
import { useState, useEffect } from 'react';
import bg1 from '../assest/bhOne.avif'
import bg2 from '../assest/bgTwo.avif'
import bg3 from '../assest/bgThree.avif'
import bg4 from '../assest/bgFour.avif'
import bg5 from '../assest/bgFive.avif'

const backgroundImages = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      {backgroundImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Background ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
      <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
         Trusted Charity Company
        </p>
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Let's Help And Make People <br/>Smile By Giving Of Yours
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          No matter how small the donation you give will mean a lot to them, let's donate now to help fellow humans in need
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Donate
        </button>
      </div>
    </div>
  );
};

export default HomePage;
