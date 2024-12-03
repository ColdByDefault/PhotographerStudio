import React, { useState, useEffect } from "react";
import sliderData from "../data/sliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderLength = sliderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderLength - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderLength - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section>
      {/* Social Media Sidebar */}
      <div className="absolute right-0 top-0 h-full flex flex-col items-center justify-center space-y-6 py-8 bg-opacity-70 z-50">
        <a href="#" className="text-white hover:text-yellow-400 px-2 transition-all flex flex-col items-center">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="#" className="text-white hover:text-yellow-400 transition-all flex flex-col items-center">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="#" className="text-white hover:text-yellow-400 transition-all flex flex-col items-center">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
      <div className="relative h-screen bg-black flex items-center justify-center lg:border-y-11 border-black lg:border-r-10 lg:border-l-9 overflow-hidden">
        {/* Slider Container */}
        <div
          className="relative w-full h-full flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {sliderData.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
              <div className="absolute bottom-20 text-white lg:left-16 ml-4">
                <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
                <p className="text-lg md:text-xl mt-4">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-yellow-400" : "bg-gray-500"}`}
            ></button>
          ))}
        </div>

        {/* Arrow Controls */}
        <button
          onClick={handlePrevious}
          className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={handleNext}
          className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}

export default Slider;
