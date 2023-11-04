import { useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

type CarouselProps = {
  imageUrl: string;
};
export function Carousel({ imageUrl }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(4);
  function handleLeftClick() {
    setCurrentIndex(currentIndex - 1);
  }
  return (
    <>
      <LuChevronLeft className="arrow left" onClick={handleLeftClick} />
      <img src={imageUrl[currentIndex]} alt="Hiei" />
      <LuChevronRight className="arrow right" />
    </>
  );
}
