import React, { useEffect, useState } from 'react';
import './SlidingCarousel.css'; // Import your CSS
import modi from "./images.jpg"
import modis from "./499037.png"

const items = [
  { image: {modi,modis}, text: 'Description for Image 1' },
  { image: {modis}, text: 'Description for Image 2' },
  { image: 'path/to/image3.jpg', text: 'Description for Image 3' },
  { image: 'path/to/image4.jpg', text: 'Description for Image 4' },
  { image: 'path/to/image4.jpg', text: 'Description for Image 4' },
  { image: 'path/to/image4.jpg', text: 'Description for Image 4' },
  { image: 'path/to/image4.jpg', text: 'Description for Image 4' },
];

const SlidingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = items.length;

  // Duplicate the items for continuous effect
  const duplicatedItems = [...items, ...items];
  console.log("ygfyuwga",duplicatedItems)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= itemCount ? 0 : nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          transform: `translateX(-${(currentIndex / duplicatedItems.length) * 100}%)`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={modis} alt={`Slide ${index + 1}`}  className='image'/>
            <p>{item.text}</p>
          </div>
        ))}
          {/* {duplicatedItems.map((item, index) => (
          <div className="carousel-item" key={index}>
            <div className="image-container">
              {image.map((imageSrc, idx) => (
                <img key={idx} src={modi} alt={`Slide ${index + 1}`} className='image' />
              ))}
            </div>
            <p>{item.text}</p>
          </div> */}
        {/* ))} */}
      </div>
    </div>
  );
};

export default SlidingCarousel;
