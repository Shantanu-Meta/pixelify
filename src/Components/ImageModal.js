import React, { useState } from 'react';
import { FaDownload, FaHeart, FaWindowClose, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ImageModal = ({ isOpen, onClose, image }) => {
  const [loading, setLoading] = useState(true);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      const response = await fetch(image.largeImageURL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `${image.tags}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    const isInWishlist = wishlist.some(item => item.id === image.id);
    
    if (!isInWishlist) {
      wishlist.push(image); 
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert("Image added to wishlist!");
    } else {
      alert("Image is already in your wishlist.");
    }
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(image.largeImageURL)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(image.largeImageURL)}&text=${encodeURIComponent(image.tags)}`, '_blank');
  };

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(image.largeImageURL)}&title=${encodeURIComponent(image.tags)}`, '_blank');
  };

  const shareToWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(image.largeImageURL)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-30">
      <div className="bg-white p-4 rounded-lg w-[50vw] mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">{image.tags}</h2>
          <button onClick={onClose} className="text-red-500">
            <FaWindowClose />
          </button>
        </div>

        {loading && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/02/Loading.png"
            alt="Loading..."
            className="w-full h-[22rem] object-cover"
          />
        )}
        
        <img
          src={image.largeImageURL}
          alt={image.tags}
          className={`w-full h-[22rem] object-cover transition-transform duration-300 ${loading ? "hidden" : "block"}`}
          onLoad={() => setLoading(false)}
        />
        
        <div className='flex justify-between items-center mt-2'>
          <p>Author: {image.user || "No author available."}</p>
          <div className='flex items-center gap-4'>
            <button className="text-red-500" onClick={handleWishlist}><FaHeart /></button>
            <button onClick={handleDownload} className="text-red-500">
              <FaDownload />
            </button>
          </div>
        </div>
        
        <div className='flex gap-4 justify-center mt-4'>
          <button className="text-blue-500" onClick={shareToFacebook}>
            <FaFacebook size={24} />
          </button>
          <button className="text-blue-400" onClick={shareToTwitter}>
            <FaTwitter size={24} />
          </button>
          <button className="text-blue-600" onClick={shareToLinkedIn}>
            <FaLinkedin size={24} />
          </button>
          <button className="text-green-500" onClick={shareToWhatsApp}>
            <FaWhatsapp size={24} />
          </button>
        </div>

        <p className='flex items-center gap-2 text-[0.8rem] text-gray-400'>{image.downloads} <FaDownload /></p>
      </div>
    </div>
  );
};

export default ImageModal;
