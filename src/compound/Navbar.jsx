 import React, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import Logo from "../assets/item/Logo-1.png";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';

const items = [
  { id: 1, link: "Advantage", title: "Advantage" },
  { id: 2, link: "Feature", title: "Feature" },
  { id: 3, link: "FAQ", title: "FAQ" },
  { id: 4, link: "APK", title: "Download APK" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50">
      <div className="bg-blue-950 px-[16px] lg:px-[106px] mx-auto">
        <div className="flex justify-between items-center h-[100px] text-lg shadow-2xl">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" className="h-[120px] w-[220px]" />
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="block md:hidden text-4xl text-white cursor-pointer"
            onClick={toggleSidebar}
          >
            <IoReorderThree />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-between gap-8 text-amber-50">
            {items.map((data) => (
              <div key={data.id}>
                <ul>
                  <li className="cursor-pointer hover:text-yellow-300">
                    <Link
                      to={data.link} 
                      smooth={true}
                      duration={500}
                      offset={-70} 
                      className="cursor-pointer"
                    >
                      {data.title}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-[100%] h-full bg-blue-950 text-white p-6 z-50 transition-transform duration-300">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-6">
            <img src={Logo} alt="Logo" className="h-[120px] w-[220px]" />
            <IoMdClose
              className="text-3xl cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-6">
            {items.map((data) => (
              <div key={data.id}>
                <ul>
                  <li className="cursor-pointer hover:text-yellow-300">
                    <Link
                      to={data.link} // Corrected
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={toggleSidebar} // Sidebar will close when clicking
                      className="cursor-pointer"
                    >
                      {data.title}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
