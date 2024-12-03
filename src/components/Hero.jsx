import React from "react";
import ImageSlider from "./ImageSilder";
import ImageSliderF1 from "./ImageSliderF1";

function Hero() {
  return (
    <section
      id="home"
      className="bg-white flex items-center justify-center px-6 pt-28">
      <div className="grid grid-cols-6 gap-4 max-w-screen-xl w-full">
        {/* Image Slider F1 */}
        <div className="col-span-6 md:col-span-4 row-span-2 flex items-center justify-center 
        rounded-lg shadow-lg">
          <ImageSliderF1 />
        </div>
        {/* Location */}
        <div className="col-span-3 md:col-span-2 bg-white border-2 border-yellow-400 p-6 rounded-lg shadow-lg 
        flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
            Schwetzingen
          </h2>
          <p className="text-md text-gray-700 mt-2">
            Your trusted local photographer
          </p>
        </div>
        {/* Call to Action */}
        <div className="col-span-3 md:col-span-2 bg-yellow-400 p-6 rounded-lg shadow-lg flex flex-col 
        items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Book Your Session Today!
          </h2>
          <a href="#contact"
            className="mt-4 px-6 py-2 bg-white text-yellow-400 font-bold rounded-lg shadow-md 
            hover:bg-yellow-300 
            hover:text-white transition-all">
            Get in Touch
          </a>
        </div>
        {/* Image Slider */}
        <div className="col-span-6 md:col-span-4 flex items-center justify-center 
        rounded-lg shadow-lg">
          <ImageSlider />
        </div>
        {/* Studio Image */}
        <div className="col-span-6 md:col-span-2 flex items-center justify-center rounded-lg shadow-lg">
          <img
            src="/assets/studio11111.jpg"
            alt=""
            className="w-full h-auto object-cover rounded-lg"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
