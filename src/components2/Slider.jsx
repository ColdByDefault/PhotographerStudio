import React, { useState, useEffect } from "react";
import sliderPictures from "../data/sliderPictures";
import  ImageList  from "./ImageList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedPictures = [
    sliderPictures[sliderPictures.length - 1],
    ...sliderPictures,
    sliderPictures[0],
  ];

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex
    + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (currentIndex === extendedPictures.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Skip to the first real image
      }, 500);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedPictures.length - 2); // Skip to the last real image
      }, 500);
    }
  }, [currentIndex, extendedPictures.length]);

  const transitionStyle = isTransitioning
    ? "transition-transform duration-500 ease-in-out"
    : "";

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slider Images */}
      <div className={`flex ${transitionStyle}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {extendedPictures.map((picture, index) => (
          <div key={index} className="w-full h-screen flex-shrink-0 relative">
            <img
              src={picture.src}
              alt={picture.alt}
              className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
            {index !== 0 && index !== extendedPictures.length - 1 && (
              <div className="absolute bottom-20 left-4 lg:left-16 text-white text-center sm:text-left">
                <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold">
                  {picture.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2">
                  {picture.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderPictures.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)} 
            className={`w-3 h-3 rounded-full ${
              currentIndex === index + 1 ? "bg-green-400" : "bg-gray-500"
            }`}></button>
        ))}
      </div>
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2  text-green-400 lg:p-10">
        <FontAwesomeIcon icon={faCaretLeft} size="lg" />
      </button>
      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400 lg:p-12 ">
        <FontAwesomeIcon icon={faCaretRight} size="lg" />
      </button>
    </div>
        <div>
          <ImageList />
        </div>
    </>
  );
}

export default Slider;
