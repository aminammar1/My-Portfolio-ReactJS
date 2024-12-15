{
  /*<Navbar />  */
}
export default function Navbar() {
  return (
    <nav className="bg-black/50 backdrop-blur-md text-white border-b border-gray-700 flex justify-between items-center p-5 px-10">
      <a href="/" className="text-xl font-extrabold">
        Mohamed Amine Ammar
      </a>
      <ul className="flex  lg:flex-row sm:flex-row justify-between items-center gap-5 lg:gap-10 mt-3 lg:mt-0">
        <a href="#about" className="text-lg hover:text-green-500 transition">
          About
        </a>
        <a href="#projects" className="text-lg hover:text-green-500 transition">
          Projects
        </a>
        <a href="#contact" className="text-lg hover:text-green-500 transition">
          Contact
        </a>
      </ul>
    </nav>
  );
}
