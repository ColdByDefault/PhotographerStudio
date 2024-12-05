import React, { useEffect } from "react";
import imageList from "../data/imageData";

function ImageGrid() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".image-container");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight && !element.classList.contains("animated")) {
          element.style.animation = "fadeUp 0.8s ease-out forwards";
          element.classList.add("animated"); 
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid gap-4 p-4 bg-black mt-24"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gridAutoRows: "200px",
      }}>
      {imageList.map((image, index) => (
        <div key={index}
          className={`image-container relative group overflow-hidden rounded-lg ${
            index % 3 === 0 ? "row-span-2 col-span-2" : "row-span-1 col-span-1"
          } opacity-0`}
          style={{ transform: "translateY(200px)", opacity: 0 }}>
          <img src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
          {image.title && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 
            transition-opacity duration-300">
              <h2 className="text-white text-lg font-bold">{image.title}</h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
