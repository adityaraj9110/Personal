import React, { useState } from 'react';
import Proposal from './components/Proposal';
import Success from './components/Success';
import './index.css';

function App() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div className="App">
      {accepted ? (
        <Success />
      ) : (
        <Proposal onYes={handleAccept} />
      )}

      {/* Background Hearts */}
      <div className="floating-hearts">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
