import React, { useContext, useState } from "react";
import createImageContext from "../contextAPI/createImageContext";
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const {setQuery, fetchTrendingImage, setCurrentPage} = useContext(createImageContext); 
  const [inputValue, setInputValue] = useState(''); // Track input value
  const navigate  = useNavigate(); 
  
  const searchImage = (e)=>{
    e.preventDefault(); // Prevent form submission
    setQuery(inputValue);
    setCurrentPage(1); 
    fetchTrendingImage(1, inputValue); 
  } 
  return (
    <>
      <form class="w-full shadow-sm" onSubmit={searchImage}>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg focus:outline-none"
            placeholder="Search Mockups, Logos..."
            required
            onChange={(e)=>{setInputValue(e.target.value)}}
          />
          <button
            type="submit"
            class=" absolute end-2.5 bottom-2.5 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-gray-400"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Searchbar;
