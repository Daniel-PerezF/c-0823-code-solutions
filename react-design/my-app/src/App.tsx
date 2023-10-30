// import { useState } from 'react'
import './App.css';
import { NumberButtons } from './NumberButtons';
import { NextButton } from './NextButton';
import { PreviousButton } from './PreviousButton';
import { RotatingBanner } from './RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <RotatingBanner items={items} />
      <PreviousButton />
      <NumberButtons />
      <NextButton />
    </div>
  );
}

export default App;
