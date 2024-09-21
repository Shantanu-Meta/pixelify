import React from "react";
import Searchbar from "./Searchbar";
import { FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <div class="max-w-screen-xl flex items-center justify-between gap-[4rem] mx-auto p-4 z-20">
          <Link
            to="/"
            class="items-center space-x-3 rtl:space-x-reverse hidden w-full md:flex md:w-auto md:order-1"
          >
            <FaImage className="text-3xl text-white"/>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white flex">
              Pixelify<span className="hidden xl:block"> - give your thoughts a visual</span>
            </span>
          </Link>
          
          <div
            class="items-center justify-between flex md:order-1 w-full"
            id="navbar-sticky"
          >
            <Searchbar/>
          </div>
        </div>
    </>
  );
};

export default Navbar;
