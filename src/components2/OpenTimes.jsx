import React from "react";

function OpenTimes() {
  return (
    <section className="min-h-screen bg-yellow-400 flex items-center justify-center px-6">
      <div className="text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">Opening Times</h1>
        <ul className="mt-4 space-y-2">
          <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </section>
  );
}

export default OpenTimes;
