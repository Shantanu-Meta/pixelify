import { useState } from "react";
import createImageContext from "./createImageContext"; // Import the correct context


export default function UseImageContext({ children }) {
  const pixabay_API = process.env.REACT_APP_PIXABAY;
  const [trendingImage, setTrendingImage] = useState([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState(""); 
  const [totalHits, setTotalHits] = useState(0); // Total hits from the API for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch trending images with pagination
  const fetchTrendingImage = async (page = 1, que) => {
    try {
      const response = await fetch(
          `https://pixabay.com/api/?key=${pixabay_API}&q=${que || query || "trending"}&image_type=photo&per_page=20&page=${page}`
        );
      
      const data = await response.json();
      setTrendingImage(data.hits);
      setTotalHits(data.totalHits); // Set total hits for pagination purposes
    } catch (e) {
      setError("Failed to get images");
    }
  };
  

  return (
    <createImageContext.Provider value={{ trendingImage, error, fetchTrendingImage, totalHits, setQuery, setCurrentPage, currentPage }}>
      {children}
    </createImageContext.Provider>
  );
}
