import { useState } from 'react';

export function ToggleButton() {
  const [isClicked, setIsClicked] = useState(true);

  const label = isClicked ? 'On' : 'Off';
  const onOff = isClicked ? 'toggle-switch is-on' : 'toggle-switch';

  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <div className={onOff} onClick={() => handleClick()}>
        <div className="slider">
          <div className="switch"></div>
        </div>
        <span className="state-label">{label}</span>
      </div>
    </>
  );
}
