import React from "react";

const imageList = [
  { src: "/assets/7.jpg", alt: "Image 1", title: "@noah-buscher" },
  { src: "/assets/8.jpg", alt: "Image 2", title: "@prince-akachi"  },
  { src: "/assets/9.jpg", alt: "Image 3", title: "@guilherme-stecanella"  },
  { src: "/assets/10.jpg", alt: "Image 4", title: "@atikh-bana"  },
  { src: "/assets/11.jpg", alt: "Image 5", title: "@justin-peralta"  },
  { src: "/assets/12.jpg", alt: "Image 6", title: "@caique-nascimento"  },
  { src: "/assets/13.jpg", alt: "Image 7", title: "@oladimeji-odunsi"  },
  { src: "/assets/14.jpg", alt: "Image 8", title: "@sebastian-leon-prado"  },
  { src: "/assets/15.jpg", alt: "Image 1", title: "@caleb-jones" },
  { src: "/assets/15.jpg", alt: "Image 1", title: "@caleb-jones" },
  { src: "/assets/16.jpg", alt: "Image 2", title: "@alice-alinari"  },
  { src: "/assets/17.jpg", alt: "Image 3", title: "@warren"  },
  { src: "/assets/18.jpg", alt: "Image 4", title: "@zulmaury"  },
  { src: "/assets/18.jpg", alt: "Image 4", title: "@zulmaury"  },
  { src: "/assets/19.jpg", alt: "Image 5", title: "@hisu-lee"  },
  { src: "/assets/20.jpg", alt: "Image 6", title: "@caroline"  },
  { src: "/assets/21.jpg", alt: "Image 7", title: "@christopher"  },
  { src: "/assets/21.jpg", alt: "Image 7", title: "@christopher"  },
  { src: "/assets/22.jpg", alt: "Image 8", title: "@ryoji-iwata"  },
  { src: "/assets/23.jpg", alt: "Image 8", title: "@charles-etoroma"  },
  { src: "/assets/10.jpg", alt: "Image 4", title: "@atikh-bana"  },
  { src: "/assets/24.jpg", alt: "Image 8", title: "@luke-braswell"  },
  { src: "/assets/25.jpg", alt: "Image 8", title: "@aiony-haust"  },
  { src: "/assets/10.jpg", alt: "Image 4", title: "@atikh-bana"  },
  { src: "/assets/23.jpg", alt: "Image 8", title: "@charles-etoroma"  },


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
