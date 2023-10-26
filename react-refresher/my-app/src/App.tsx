import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button
          className="updown"
          onClick={() => setCount((count) => count + 1)}>
          UP
        </button>
        <span style={{ fontSize: 45 }}>{count}</span>
        <button
          className="updown"
          onClick={() => setCount((count) => count - 1)}>
          DOWN
        </button>
      </div>
    </>
  );
}

export default App;
