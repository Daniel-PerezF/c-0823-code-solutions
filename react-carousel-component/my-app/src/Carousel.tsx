import { useEffect, useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { FaCircle } from 'react-icons/fa';

type CarouselProps = {
  images: string[];
};
export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      clearInterval(id);
      if (currentIndex < images.length - 1) {
        setCurrentIndex((next) => next + 1);
      } else {
        clearInterval(id);
        setCurrentIndex(0);
      }
    }, 2000);

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [currentIndex, images.length]);

  function handleLeftClick() {
    if (currentIndex <= 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleRightClick() {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handleCircleClick(index: number) {
    const numIndex = Number(index);
    setCurrentIndex(numIndex);
  }

  return (
    <div>
      <LuChevronLeft onClick={handleLeftClick} className="arrow left" />
      <div>
        <img src={images[currentIndex]} />
        <div className="circle-container">
          {images.map((image, index) => (
            <div key={image}>
              <FaCircle
                style={{
                  cursor: 'pointer',
                  fill: currentIndex === index ? 'black' : 'white',
                }}
                onClick={() => handleCircleClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <LuChevronRight onClick={handleRightClick} className="arrow right" />
    </div>
  );
}
