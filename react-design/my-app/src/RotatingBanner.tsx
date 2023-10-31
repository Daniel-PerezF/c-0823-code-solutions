import { useState } from 'react';
import React from 'react';

type Props = {
  items: string[];
};
export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Banner items={items} index={index} />
      <PreviousButton onClick={handlePreviousClick} />
      <NumberButtons onClick={handleNumClick} currentIndex={index} />
      <NextButton onClick={handleNextClick} />
    </>
  );

  function handleNumClick(index: number) {
    setIndex(index);
  }

  function handleNextClick() {
    if (index === 5) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePreviousClick() {
    if (index === 0) {
      setIndex(5);
    } else {
      setIndex(index - 1);
    }
  }
}
// Components
type NumButton = {
  onClick: (index: number) => void;
  currentIndex: number;
};
function NumberButtons({ onClick, currentIndex }: NumButton) {
  function handleClass(index: number) {
    return index === currentIndex ? 'highlighted-button' : '';
  }
  return (
    <div>
      <button className={handleClass(0)} onClick={() => onClick(0)}>
        0
      </button>
      <button className={handleClass(1)} onClick={() => onClick(1)}>
        1
      </button>
      <button className={handleClass(2)} onClick={() => onClick(2)}>
        2
      </button>
      <button className={handleClass(3)} onClick={() => onClick(3)}>
        3
      </button>
      <button className={handleClass(4)} onClick={() => onClick(4)}>
        4
      </button>
      <button className={handleClass(5)} onClick={() => onClick(5)}>
        5
      </button>
    </div>
  );
}

type OnClickType = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
function PreviousButton({ onClick }: OnClickType) {
  return (
    <button onClick={onClick} style={{ margin: '0 7rem' }}>
      Prev
    </button>
  );
}

function NextButton({ onClick }: OnClickType) {
  return (
    <button onClick={onClick} style={{ margin: '0 7rem' }}>
      Next
    </button>
  );
}

type Banner = {
  items: string[];
  index: number;
};
function Banner({ items, index }: Banner) {
  return <>{items[index]}</>;
}
