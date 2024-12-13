{
  /* <Footer /> */
}

import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="px-32"></div>
      <div className="border"></div>
      <div className="flex justify-between items-center p-10 px-32">
        <div>© 2024 Mohamed Amine Ammar</div>
        <div className="flex gap-4">
          <a
            href="https://github.com/aminammar1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009032685978"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-amine-ammar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </>
  );
}
