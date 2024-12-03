import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white flex items-center justify-center px-6"
    >
      <div className="max-w-screen-md text-center bg-yellow-400 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
        <p className="text-md text-white mt-2">We'd love to hear from you! Get in touch with us:</p>
        <ul className="mt-4 space-y-2 text-lg text-white">
          <li>Email: info@fotothome.de</li>
          <li>Phone: +49 123 456 789</li>
          <li>Address: Hauptstrasse 123, Schwetzingen</li>
        </ul>
        <button
          className="mt-4 px-6 py-2 bg-white text-yellow-400 font-bold rounded-lg shadow-md hover:bg-yellow-300 hover:text-white transition-all"
        >
          Send Message
        </button>
      </div>
    </section>
  );
}

export default Contact;
