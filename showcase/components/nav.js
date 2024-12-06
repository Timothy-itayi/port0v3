'use client';
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-black   ">
      <div className=" max-w-screen-xl  mx-auto px-4 py-2 flex animate-fade-up justify-between items-center">
        {/* Left Section */}
        <ul className="flex">
          <li>
            <Link href="/">
              <button className="py-3 px-6 text-white  transition duration-300 ease-in-out">
              <span className="text-white text-xl">Timothy Itayi</span>
              </button>
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <ul className="flex space-x-4">
          <li>
            <Link href="https://github.com/Timothy-itayi">
              <button className="py-3 px-5 text-black transition duration-300 ease-in-out">
                GitHub
              </button>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/timothy-itayi-ab8754138/">
              <button className="py-3 px-6 text-white transition duration-300 ease-in-out">
              <span className="text-white text-xl">Linkedin</span>
              </button>
            </Link>
          </li>
          <li>
            <button className="py-3 px-3 text-white bg-black transition duration-300 ease-in-out">
            <span className="text-white text-xl">Projects</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
