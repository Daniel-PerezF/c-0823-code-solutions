import './color.css';
import { useState } from 'react';
export default function ToggleButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  let color;

  if (count < 3) {
    color = 'purple';
  } else if (count < 6) {
    color = 'indigo';
  } else if (count < 9) {
    color = 'red';
  } else if (count < 12) {
    color = 'orange';
  } else if (count < 15) {
    color = 'yellow';
  } else {
    color = 'white';
  }

  return (
    <div>
      <button className={color} onClick={() => handleClick()}>
        Hot Button
      </button>
      <p>{count}</p>
    </div>
  );
}
