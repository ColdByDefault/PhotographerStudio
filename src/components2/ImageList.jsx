import React from "react";

const imageList = [
  { src: `${import.meta.env.BASE_URL}assets/7.jpg`, alt: "Image 1", title: "@noah-buscher" },
  { src: `${import.meta.env.BASE_URL}assets/8.jpg`, alt: "Image 2", title: "@prince-akachi" },
  { src: `${import.meta.env.BASE_URL}assets/9.jpg`, alt: "Image 3", title: "@guilherme-stecanella" },
  { src: `${import.meta.env.BASE_URL}assets/10.jpg`, alt: "Image 4", title: "@atikh-bana" },
  { src: `${import.meta.env.BASE_URL}assets/11.jpg`, alt: "Image 5", title: "@justin-peralta" },
  { src: `${import.meta.env.BASE_URL}assets/12.jpg`, alt: "Image 6", title: "@caique-nascimento" },
  { src: `${import.meta.env.BASE_URL}assets/13.jpg`, alt: "Image 7", title: "@oladimeji-odunsi" },
  { src: `${import.meta.env.BASE_URL}assets/14.jpg`, alt: "Image 8", title: "@sebastian-leon-prado" },
  { src: `${import.meta.env.BASE_URL}assets/15.jpg`, alt: "Image 1", title: "@caleb-jones" },
  { src: `${import.meta.env.BASE_URL}assets/16.jpg`, alt: "Image 2", title: "@alice-alinari" },
  { src: `${import.meta.env.BASE_URL}assets/17.jpg`, alt: "Image 3", title: "@warren" },
  { src: `${import.meta.env.BASE_URL}assets/18.jpg`, alt: "Image 4", title: "@zulmaury" },
  { src: `${import.meta.env.BASE_URL}assets/19.jpg`, alt: "Image 5", title: "@hisu-lee" },
  { src: `${import.meta.env.BASE_URL}assets/20.jpg`, alt: "Image 6", title: "@caroline" },
  { src: `${import.meta.env.BASE_URL}assets/21.jpg`, alt: "Image 7", title: "@christopher" },
  { src: `${import.meta.env.BASE_URL}assets/22.jpg`, alt: "Image 8", title: "@ryoji-iwata" },
  { src: `${import.meta.env.BASE_URL}assets/23.jpg`, alt: "Image 8", title: "@charles-etoroma" },
  { src: `${import.meta.env.BASE_URL}assets/24.jpg`, alt: "Image 8", title: "@luke-braswell" },
  { src: `${import.meta.env.BASE_URL}assets/25.jpg`, alt: "Image 8", title: "@aiony-haust" },
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
