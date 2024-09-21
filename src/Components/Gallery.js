import React, { useEffect, useContext, useState } from "react";
import createImageContext from "../contextAPI/createImageContext";
import ImageModal from "./ImageModal"; // Import the modal component

const Gallery = () => {
  const { trendingImage, error, fetchTrendingImage, totalHits, query, setCurrentPage, currentPage } = useContext(createImageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const perPage = 20; // Number of results per page
  const totalPages = Math.ceil(Math.min(totalHits, 200) / perPage); // Max 200 results (10 pages)

  // Call `fetchTrendingImage` when the page changes
  useEffect(() => {
    fetchTrendingImage(currentPage);
  }, [currentPage, query]);

  // Handle page change
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const openModal = (image) => {
    console.log(image)
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="p-4">
      {/* Grid for displaying images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-10">
        {error && <p className="text-red-500">{error}</p>}
        {trendingImage.length > 0 ? (
          trendingImage.map((image) => (
            <div key={image.id} className="relative overflow-hidden group rounded-md">
              <img
                src={image.webformatURL}
                alt={image.tags}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                loading="lazy"
                onClick={() => openModal(image)} // Open modal on click
              />
              {/* Image Details */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>{image.tags}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-300 p-2 rounded disabled:opacity-50"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p>Page {currentPage} of {totalPages}</p>
        <button
          className="bg-gray-300 p-2 rounded disabled:opacity-50"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal for displaying image */}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
    </div>
  );
};

export default Gallery;
