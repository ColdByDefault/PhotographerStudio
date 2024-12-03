import React from "react";

function OpenTimes() {
  return (
    <section
      id="openTimes"
      className="bg-yellow-400 flex items-center justify-center px-6"
    >
      <div className="max-w-screen-md w-full bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-500 text-center">
          Our Opening Hours
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          We look forward to welcoming you!
        </p>
        <div className="mt-6">
          <ul className="divide-y divide-yellow-200">
            <li className="py-4 flex justify-between items-center">
              <span className="text-xl font-medium text-gray-800">Monday - Friday</span>
              <span className="text-lg text-gray-600">9:00 AM - 6:00 PM</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span className="text-xl font-medium text-gray-800">Saturday</span>
              <span className="text-lg text-gray-600">10:00 AM - 4:00 PM</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span className="text-xl font-medium text-gray-800">Sunday</span>
              <span className="text-lg text-gray-600">Closed</span>
            </li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">Have questions? <a href="#contact" className="text-yellow-500 font-medium hover:underline">Contact us</a></p>
        </div>
      </div>
    </section>
  );
}

export default OpenTimes;
