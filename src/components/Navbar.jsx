{
  /*<Navbar />  */
}
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black/50 backdrop-blur-md text-white border-b border-gray-700 flex justify-between items-center p-5 px-10">
      <a
        href="/"
        className="text-sm md:text-lg lg:text-xl font-extrabold whitespace-nowrap"
      >
        Mohamed Amine Ammar
      </a>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-10 mt-3 lg:mt-0 transition-all duration-300 ease-in-out`}
      >
        <li>
          <a
            href="#about"
            className="text-sm md:text-lg hover:text-green-500 transition"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-sm md:text-lg hover:text-green-500 transition"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-sm md:text-lg hover:text-green-500 transition"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
