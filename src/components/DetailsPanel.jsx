import React from 'react';

// The DetailsPanel component renders a detailed view of a single episode.
// It receives the episode object and member data as props.
function DetailsPanel({ episode, memberData }) {
  // If no episode is selected, display a placeholder message.
  if (!episode) {
    return (
      <div className="details-panel-container">
        <h2 className="details-panel-title">Click an event on the timeline to see details.</h2>
        <p className="details-panel-subtitle">Here, you can explore the rationale and chat logs for each decision.</p>
      </div>
    );
  }

  // Helper function to format chat log messages
  const renderChatLog = (log) => {
    return log.map((entry, index) => (
      <div key={index} className="chat-message">
        <span className="chat-date">[{entry.date}]</span>
        <strong className="chat-sender">{entry.sender}:</strong>
        <p className="chat-text">{entry.message}</p>
      </div>
    ));
  };

  return (
    <div className="details-panel-container">
      <h2 className="details-panel-title">
        {episode.title}
        <span className="episode-date-range">{episode.dateRange}</span>
      </h2>
      <p className="details-panel-summary">{episode.summary}</p>
      <hr />

      <div className="section-content">
        <h3 className="section-title">Rationale & Decision-Making</h3>
        <p className="decision-trigger">
          <strong className="label">Trigger:</strong> {episode.trigger}
        </p>
        <p className="decision-outcome">
          <strong className="label">Outcome:</strong> {episode.outcome}
        </p>
        <div className="decision-rationale">
          <h4 className="rationale-heading">Friction Points:</h4>
          <ul>
            {episode.frictionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />

      <div className="section-content">
        <h3 className="section-title">Chat Log</h3>
        <div className="chat-log-display">
          {renderChatLog(episode.chatLog)}
        </div>
      </div>
    </div>
  );
}

export default DetailsPanel;