import React from "react";
import Logo from "../logo.png";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className='bg-gray-900'>
      <div className=" pl-12 flex space-x-8 items-center py-4">
        <img className="w-[50px] md:w-[60px]" src={Logo}></img>
        <Link to="/" className="text-blue-400 font-bold text-xl md:text-3xl">Funlimited</Link>
        <Link to="/favourites" className="text-blue-400 font-bold text-xl md:text-3xl ">Favourites</Link>
      </div>
    </div>
  );
}

export default Navbar;
