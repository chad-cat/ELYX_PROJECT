        import React from 'react';

        function Timeline({ episodes, onEpisodeClick }) {
          return (
            <div className="timeline-container">
              {/* 'episodes' prop here is actually the 'timeline' array from your JSON */}
              {episodes.map(monthData => (
                <div key={monthData.month} className="month-section">
                  <h3>{monthData.title || `Month ${monthData.month}`}</h3>
                  <div className="month-episodes-list">
                    {/* Now, map over the actual 'episodes' array nested within each month */}
                    {monthData.episodes.map(episode => (
                      <div
                        key={episode.title} // Consider using a more unique ID if available for keys
                        className="timeline-node"
                        onClick={() => onEpisodeClick(episode)}
                      >
                        <h4>{episode.title}</h4>
                        <p>{episode.dateRange}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        }

        export default Timeline;
        