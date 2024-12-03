import React, { useState } from "react";

function ServiceSlider({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-screen-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        {/* Slider Content */}
        <div className="relative flex items-center justify-center">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="rounded-lg object-cover w-full max-h-96"
          />
          <p className="text-gray-700 mt-4 text-center">{images[currentIndex].description}</p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevImage}
            className="px-4 py-2 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500"
          >
            Previous
          </button>
          <button
            onClick={nextImage}
            className="px-4 py-2 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceSlider;
