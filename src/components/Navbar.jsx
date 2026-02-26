import  { useState } from "react";
import { Link } from "react-router-dom";
// import picLogo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const NavItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Projects", path: "/projects" },
    { id: 4, text: "Experience", path: "/experience" },
    { id: 5, text: "Contact", path: "/contact" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto h-16 px-4 md:px-20 shadow-lg bg-[#6d6d6d00] text-purple-200 fixed w-full z-50">
  <div className=" relative flex justify-center items-center h-16">
    
    {/* Logo */}
    {/* <div className="flex items-center space-x-3 cursor-pointer">
      <img src={picLogo} className="h-12 w-12 rounded-full border-2 border-[#ff6b00]" alt="logo" />
      <div>
        <h1 className="font-bold text-2xl">
          Ma<span className="text-[#ff6b00]">HI</span>
        </h1>
        <p className="text-sm text-gray-400">Web Developer</p>
      </div>
    </div> */}

    {/* Desktop Menu */}
  <ul className="hidden md:flex justify-center space-x-8 font-medium items-center">
      {NavItems.map((item) => (
        <li key={item.id}>
          <Link
            to={item.path}
            className="hover:text-[#ff6b00] transition duration-300 relative group"
          >
            {item.text}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff6b00] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      ))}
    </ul>

    {/* Mobile Icon */}
    <div
      className="md:hidden cursor-pointer text-[#ff6b00]"
      onClick={() => setMenu(!menu)}
    >
      {menu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
    </div>
  </div>

  {/* Mobile Menu */}
  {menu && (
    <div className="md:hidden bg-[#0f0f0f] border-t border-[#222]">
      <ul className="flex flex-col items-center space-y-6 py-6 font-semibold">
        {NavItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              onClick={() => setMenu(false)}
              className="hover:text-[#ff6b00] transition duration-300"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
  )
};

export default Navbar;