import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal"; // Adjust the import path as needed

const Wishlist = () => {
  const [wishlistImages, setWishlistImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch wishlist images from local storage
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistImages(savedWishlist);
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="p-4">
      <h1
        className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-yellow-800 text-shadow-md"
        style={{
    background: 'linear-gradient(222deg, rgba(255,1,0,1) 6%, rgba(255,194,0,1) 70%, rgba(255,232,0,1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
      >
        My Wishlist
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {wishlistImages.length > 0 ? (
          wishlistImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden group rounded-md"
            >
              <img
                src={image.largeImageURL}
                alt={image.tags}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                loading="lazy"
                onClick={() => handleImageClick(image)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>{image.tags}</p>
                <p>Author: {image.user || "No author available."}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No images in your wishlist.</p>
        )}
      </div>

      {/* Image Modal for displaying larger image and download functionality */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default Wishlist;
