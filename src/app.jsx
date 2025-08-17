    import React, { useState } from 'react';
    import Timeline from './components/Timeline.jsx';
    import DetailsPanel from './components/DetailsPanel.jsx';
    import InternalMetrics from './components/InternalMetrics.jsx';
    import data from './data/rohan_patel_journey.json'; // Imports your journey data
    import './App.css';

    console.log("--- Debugging Data Load in app.jsx ---");
    console.log("Full data object imported:", data);
    console.log("Timeline data (data.timeline):", data.timeline);
    console.log("Is timeline data an array?", Array.isArray(data.timeline));
    console.log("Length of timeline data:", data.timeline ? data.timeline.length : 'N/A');
    console.log("--- End Debugging ---");

    function App() {
      const [selectedEpisode, setSelectedEpisode] = useState(null);

      const internalMetricsData = [
        { "role": "Doctor", "hours": 12, "consults": 5 },
        { "role": "Coach", "hours": 8, "consults": 3 },
        { "role": "Nutritionist", "hours": 6, "consults": 2 },
        { "role": "Physiotherapist", "hours": 7, "consults": 4 },
        { "role": "Concierge", "hours": 20, "consults": 10 },
        { "role": "Concierge Lead", "hours": 5, "consults": 2 }
      ];

      return (
        <div className="app-container">
          <header className="app-header">
            <h1>Elyx Member Journey Dashboard</h1>
            <p>Visualizing Rohan Patel's Health Progress</p>
          </header>
          <div className="main-content">
            <div className="timeline-section">
              <Timeline episodes={data.timeline} onEpisodeClick={setSelectedEpisode} />
            </div>
            <div className="details-metrics-section">
              <DetailsPanel episode={selectedEpisode} memberData={data.member} />
              <InternalMetrics timelineData={data.timeline} />
            </div>
          </div>
          <footer className="app-footer">
            <p>&copy; 2025 Elyx Hackathon Project</p>
          </footer>
        </div>
      );
    }

    export default App;
    