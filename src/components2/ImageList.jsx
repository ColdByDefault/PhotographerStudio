import React from "react";

const imageList = [
  { src: "/assets/2.jpg", alt: "Image 1", title: "Speed King" },
  { src: "/assets/3.jpg", alt: "Image 2", title: "Speed King"  },
  { src: "/assets/5.jpg", alt: "Image 3", title: "Speed King"  },
  { src: "/assets/6.jpg", alt: "Image 4", title: "Speed King"  },
  { src: "/assets/77.jpg", alt: "Image 5", title: "Speed King"  },
  { src: "/assets/1.jpg", alt: "Image 6", title: "Speed King"  },
  { src: "/assets/77.jpg", alt: "Image 7", title: "Speed King"  },
  { src: "/assets/77.jpg", alt: "Image 8", title: "Speed King"  },
  { src: "/assets/2.jpg", alt: "Image 1", title: "Speed King" },
  { src: "/assets/3.jpg", alt: "Image 2", title: "Speed King"  },
  { src: "/assets/5.jpg", alt: "Image 3", title: "Speed King"  },
  { src: "/assets/6.jpg", alt: "Image 4", title: "Speed King"  },
  { src: "/assets/77.jpg", alt: "Image 5", title: "Speed King"  },
  { src: "/assets/1.jpg", alt: "Image 6", title: "Speed King"  },
  { src: "/assets/77.jpg", alt: "Image 7", title: "Speed King"  },
  { src: "/assets/77.jpg", alt: "Image 8", title: "Speed King"  },
];

function ImageGrid() {
  return (
    <div
      className="grid gap-4 p-4 bg-black"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gridAutoRows: "200px",
      }}
    >
      {imageList.map((image, index) => (
        <div
          key={index}
          className={`relative group overflow-hidden rounded-lg ${
            index % 3 === 0 ? "row-span-2 col-span-2" : "row-span-1 col-span-1"
          }`}
        >
          {/* Image */}
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay */}
          {image.title && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-lg font-bold">{image.title}</h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
