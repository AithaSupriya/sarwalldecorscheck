import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-import images from folders
  const wallImages = Object.values(
    import.meta.glob("../assets/schoolpainting/governmentschool/*.jpg", { eager: true, import: "default" })
  );

  const schoolImages = Object.values(
    import.meta.glob("../assets/WallDecors/Hotels & Restaurants Wall Painting/*.jpg", { eager: true, import: "default" })
  );

  const muralImages = Object.values(
    import.meta.glob("../assets/WallDecors/Street Wall Painting/*.jpg", { eager: true, import: "default" })
  );

  const openImageViewer = (list, index) => {
    setImageList(list);
    setCurrentIndex(index);
    setCurrentImage(list[index]);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => setIsViewerOpen(false);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % imageList.length;
    setCurrentIndex(newIndex);
    setCurrentImage(imageList[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    setCurrentIndex(newIndex);
    setCurrentImage(imageList[newIndex]);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isViewerOpen) return;
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "Escape") closeImageViewer();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isViewerOpen, currentIndex, imageList]);

  // Reusable Gallery Section Component
  const GallerySection = ({ title, images }) => (
    <div className="bg-white py-10 px-3 sm:px-6 ">
      <div className="max-w-full mx-auto ">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{ boxShadow: "0px 0px 15px -7px black" }}
              onClick={() => openImageViewer(images, index)} // <-- ADD THIS
            >
              <div className="p-2.5">
                <div className="w-full aspect-square overflow-hidden rounded-sm">
                  <img
                    src={src}
                    alt={`${title} ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Wall Painting Section */}
      <GallerySection title="Wall Painting" images={wallImages} />

      {/* School Painting Section */}
      <GallerySection title="School Painting" images={schoolImages} />

      {/* Mural Painting Section */}
      <GallerySection title="Mural Painting" images={muralImages} />

      {/* Image Viewer Modal */}
      {isViewerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
          onClick={closeImageViewer}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition"
            onClick={(e) => {
              e.stopPropagation();
              closeImageViewer();
            }}
          >
            ×
          </button>

          <div className="flex items-center justify-center w-full px-8">
            <button
              className="text-white text-4xl mr-6 hover:text-yellow-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ‹
            </button>

            <img
              src={currentImage}
              alt="Full view"
              className="max-w-[90vw] max-h-[70vh] object-contain"
            />

            <button
              className="text-white text-4xl ml-6 hover:text-yellow-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ›
            </button>
          </div>

          {/* Thumbnails */}
          <div
            className="w-full max-h-[20vh] overflow-y-auto mt-6 p-4 bg-gray-900 bg-opacity-60 flex flex-wrap justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {imageList.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumb ${index + 1}`}
                className={`w-20 h-20 object-contain rounded cursor-pointer transition-all ${currentIndex === index
                    ? "border-4 border-yellow-400 scale-110"
                    : "border-2 border-gray-600 hover:border-yellow-400"
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                  setCurrentImage(img);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
