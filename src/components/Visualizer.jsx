import React from 'react';

const Visualizer = ({ array, comparing, done, minIndex }) => {
  return (
    <main className="center glass-panel">
      <div className="array">
        {array.map((value, idx) => {
          let stateClass = '';
          if (done.has(idx)) {
            stateClass = 'done';
          } else if (comparing.has(idx)) {
            stateClass = 'current';
          } else if (idx === minIndex) {
            stateClass = 'min';
          }

          return (
            <div
              key={idx}
              className={`cell ${stateClass}`}
              style={{ height: `${value}%` }}
            ></div>
          );
        })}
      </div>
    </main>
  );
};

export default Visualizer;
