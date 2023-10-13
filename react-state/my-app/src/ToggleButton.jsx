import { useState } from 'react';
export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('UseState:', isClicked);
  function handleClick() {
    console.log('BeforeSetter:', isClicked);
    setIsClicked(!isClicked);
  }
  const background = isClicked ? color : 'white';
  return (
    <button
      style={{ backgroundColor: background, color: 'black' }}
      onClick={handleClick}>
      {text}
    </button>
  );
}
