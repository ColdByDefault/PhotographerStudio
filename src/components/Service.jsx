import React, { useState } from "react";
import ServiceSlider from "./ServiceSlider";
import serviceImages from "../data/serviceImages";

function Service() {
  const [selectedService, setSelectedService] = useState(null);

  const openSlider = (service) => {
    setSelectedService(serviceImages[service]);
  };

  const closeSlider = () => {
    setSelectedService(null);
  };

  return (
    <section id="service"
      className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg">
        {/* Pass Pictures */}
        <div onClick={() => openSlider("passPictures")}
          className="flex flex-col items-center justify-center text-center bg-yellow-400 p-6 
          rounded-lg shadow-lg cursor-pointer hover:bg-yellow-500 transition">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Passbild</h2>
          <p className="text-md text-white mt-2">Passbilder ohne Termin - Sofort zum Mitnehmen</p>
          <img src="/assets/8.jpg" alt="" />
        </div>
        {/* Portfolio */}
        <div
          onClick={() => openSlider("portfolio")}
          className="flex flex-col items-center justify-center text-center bg-white border-2 
          border-yellow-400 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-yellow-100 transition">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">Portfolio</h2>
          <p className="text-md text-gray-700 mt-2">Showcase your personal or professional portfolio.</p>
          <img src="/assets/6.jpg" alt="" />

        </div>
        {/* Business Pictures */}
        <div
          onClick={() => openSlider("businessPictures")}
          className="flex flex-col items-center justify-center text-center bg-yellow-400 p-6 
          rounded-lg shadow-lg cursor-pointer hover:bg-yellow-500 transition">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Business Pictures</h2>
          <p className="text-md text-white mt-2">Professional photos to elevate your business profile.</p>
          <img src="/assets/5.jpg" alt="" />

        </div>
      </div>
      {/* Service Slider Modal */}
      {selectedService && (
        <ServiceSlider images={selectedService} onClose={closeSlider} />
      )}
    </section>
  );
}

export default Service;
