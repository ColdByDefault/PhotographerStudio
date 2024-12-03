import React, { useState, useEffect } from "react";
import images from "../data/imageData";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="w-full">
      <div className="max-w-screen-lg mx-auto text-center">
        <div className="relative w-full max-w-screen-lg h-96 mx-auto overflow-hidden rounded-lg shadow-lg">
          {/* Loop through images */}
          {images.map((image, index) => (
            <div key={index}
              className={`absolute flex items-center justify-center 
                inset-0 transition-all duration-1000 transform ${
                currentIndex === index
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-90 z-0"}`}>
              <img src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"/>
            </div>
          ))}
        </div>
        {/* Image Description */}
        <div className="mt-4">
          <p className="text-gray-700 text-lg">
            {images[currentIndex]?.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;
