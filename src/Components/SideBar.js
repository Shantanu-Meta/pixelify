import React from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import { Link, useLocation } from "react-router-dom";
import Wishlist from "./Wishlist";
import { FaCrown, FaImage, FaInfoCircle, FaServicestack, FaUser } from "react-icons/fa";

const SideBar = () => {
  const location = useLocation(); 
  
  return (
    <>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-20 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-2 "
        aria-label="Sidebar"
        style={{
        boxShadow: '10px 0 15px -3px rgba(0, 0, 0, 0.1), 4px 0 6px -2px rgba(0, 0, 0, 0.05)',
      }}
      >
        <Link
  to={"/"}
  className="px-3 py-4 overflow-y-auto font-bold text-[2.5rem] flex items-center gap-2 text-white bg-gradient-to-r from-red-600 to-yellow-400 text-shadow-md"
  style={{
    background: 'linear-gradient(222deg, rgba(255,1,0,1) 6%, rgba(255,194,0,1) 70%, rgba(255,232,0,1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
 <FaImage className="text-orange-500"/> Pixelify
</Link>

        <div class="h-full px-3 py-4 overflow-y-auto  dark:">
          <ul class="space-y-2 font-medium">
            <li>
              <Link
                to="/Profile"
                class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300 "
              >
                <FaUser />

                <span class="ms-3">Profile</span>
              </Link>
            </li>
            
            <li>
              <Link
                to="#"
                class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300"
              >
                <FaInfoCircle/>
                <span class="flex-1 ms-3 whitespace-nowrap">About</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300"
              >
                <FaServicestack/>
                <span class="flex-1 ms-3 whitespace-nowrap">Services</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300"
              >
                <FaCrown/>
                <span class="flex-1 ms-3 whitespace-nowrap">Premium</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div class="px-4 pb-4 sm:ml-64 flex flex-col gap-4">
        {location.pathname==="/" && <div class="p-4  rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300  fixed left-0 sm:left-64 right-0 mx-4 mb-4 shadow-md z-20">
          <Navbar/>
        </div>}

        {location.pathname==="/" && <div className="mt-[8rem]">
          <Gallery/>
        </div>}

        {
          location.pathname==="/Profile" && 
            <Wishlist/>
        }
      </div>
    </>
  );
};

export default SideBar;
