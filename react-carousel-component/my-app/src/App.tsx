import './App.css';
import { Carousel } from './Carousel';
const images = [
  'images/fushiguro.webp',
  'images/inumaki.webp',
  'images/itadori.webp',
  'images/kugisaki.webp',
  'images/panda.webp',
  'images/zen-in.webp',
];

function App() {
  return (
    <>
      <div className="container">
        <div className="carousel-container">
          <Carousel imageUrl={images} images={images} />
        </div>
      </div>
    </>
  );
}

export default App;
