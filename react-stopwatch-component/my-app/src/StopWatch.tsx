import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [counter, setCount] = useState(0);
  const [activeIntervalId, setActiveIntervalId] = useState<NodeJS.Timeout>();

  const isRunning = activeIntervalId ? true : false;

  function handleClick() {
    if (isRunning) {
      clearInterval(activeIntervalId);
      setActiveIntervalId(undefined);
    } else {
      const timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      setActiveIntervalId(timer);
    }
  }

  function handleReset() {
    if (!isRunning) {
      setCount(0);
    }
  }
  return (
    <>
      <Counter count={counter} onClick={handleReset} />
      <Indicator running={isRunning} onClick={handleClick} />
    </>
  );
}

type CounterTypes = {
  count: number;
  onClick: () => void;
};
function Counter({ count, onClick }: CounterTypes) {
  return (
    <>
      <div
        onClick={onClick}
        className="border rounded-full w-96 h-96 flex items-center justify-center">
        {count}
      </div>
    </>
  );
}
type IndicatorProps = {
  running: boolean;
  onClick: () => void;
};
function Indicator({ running, onClick }: IndicatorProps) {
  const play = running ? <FaPause /> : <FaPlay />;
  return (
    <div
      onClick={onClick}
      className="text-5xl flex items-center justify-center m-10">
      {play}
    </div>
  );
}
