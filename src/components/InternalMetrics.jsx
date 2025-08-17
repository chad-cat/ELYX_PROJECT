import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// The InternalMetrics component visualizes key performance indicators for the Elyx team.
// It receives the full timeline data to calculate conversation metrics.
function InternalMetrics({ timelineData }) {
  // If no timeline data is provided or it's empty, display a message.
  if (!timelineData || timelineData.length === 0) {
    return (
      <div className="metrics-container">
        <h2>Internal Metrics</h2>
        <p>No timeline data available to calculate conversation metrics.</p>
      </div>
    );
  }

  // --- Data Processing for Conversation Metrics ---
  const conversationDataByRole = {}; // Stores { role: { totalMessages: N, activeMonths: Set<string> } }

  timelineData.forEach(monthEntry => {
    // Ensure monthEntry.episodes exists and is an array
    if (monthEntry.episodes && Array.isArray(monthEntry.episodes)) {
      monthEntry.episodes.forEach(episode => {
        // Ensure episode.chatLog exists and is an array
        if (episode.chatLog && Array.isArray(episode.chatLog)) {
          episode.chatLog.forEach(chatMessage => {
            const sender = chatMessage.sender;
            
            // Heuristic to identify Elyx team members: look for "(Elyx" in sender name
            // and extract the role (e.g., "Ruby (Elyx Concierge)" -> "Concierge")
            const roleMatch = sender.match(/\((Elyx\s+([^)]+))\)/);
            let role = 'Rohan (Member)'; // Default to Rohan if no Elyx role found

            if (roleMatch && roleMatch[2]) {
              // Extract the specific role part, e.g., "Concierge", "Medical", "Lifestyle", etc.
              // We'll use the part after "Elyx "
              const fullRoleString = roleMatch[2].trim();
              if (fullRoleString.startsWith('Elyx ')) {
                role = fullRoleString.substring(5).trim(); // Remove "Elyx " prefix
              } else {
                role = fullRoleString; // Use as is if no "Elyx " prefix
              }
            } else if (sender.startsWith('Rohan')) {
                role = 'Rohan (Member)';
            } else if (sender.startsWith('Sarah Tan')) { // Assuming Sarah Tan is Rohan's PA, not Elyx team
                role = 'Sarah Tan (PA)';
            }
            
            // Initialize role data if not present
            if (!conversationDataByRole[role]) {
              conversationDataByRole[role] = {
                totalMessages: 0,
                activeMonths: new Set() // Using a Set to count unique months
              };
            }

            conversationDataByRole[role].totalMessages++;
            conversationDataByRole[role].activeMonths.add(monthEntry.month); // Add the current month
          });
        }
      });
    }
  });

  // Prepare data for the chart and table
  const chartData = Object.keys(conversationDataByRole).map(role => {
    const total = conversationDataByRole[role].totalMessages;
    const activeMonthsCount = conversationDataByRole[role].activeMonths.size;
    const average = activeMonthsCount > 0 ? (total / activeMonthsCount).toFixed(1) : 0;

    return {
      name: role,
      'Total Messages': total,
      'Avg. per Month': parseFloat(average) // Ensure it's a number for charting
    };
  }).sort((a, b) => b['Total Messages'] - a['Total Messages']); // Sort by total messages descending

  // --- Render Chart and Table ---
  return (
    <div className="metrics-container">
      <h2 className="metrics-title">Elyx Internal Metrics</h2>
      <p className="metrics-subtitle">
        Tracking team engagement and conversation patterns.
      </p>

      <h3 className="section-title">Average Conversations by Role</h3>
      <div className="metrics-chart-area" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{
              top: 20, right: 30, left: 20, bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Total Messages" fill="#8884d8" name="Total Messages" />
            <Bar dataKey="Avg. per Month" fill="#82ca9d" name="Avg. per Month" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h3 className="section-title">Team Member Engagement Summary</h3>
      <table className="metrics-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Total Messages</th>
            <th>Avg. per Month (Active)</th>
          </tr>
        </thead>
        <tbody>
          {chartData.map((metric, index) => (
            <tr key={index}>
              <td>{metric.name}</td>
              <td>{metric['Total Messages']}</td>
              <td>{metric['Avg. per Month']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InternalMetrics;
