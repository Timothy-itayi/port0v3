'use client';
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" header-font ">
      <div className=" max-w-screen-xl mx-auto px-4 py-2 flex animate-fade-up justify-between flex-row">
        {/* Left Section */}
        <ul className="flex">
          <li>
            <Link href="/">
              <button className="py-3 px-10 text-white  transition duration-300 ease-in-out">
              <span className="text-white text-xl">Timothy Itayi</span>
              </button>
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <ul className="flex space-x-4">
      
          <li>
            <Link href="https://www.linkedin.com/in/timothy-itayi-ab8754138/">
              <button className="py-3 px-6 text-white transition duration-300 ease-in-out">
              <span className="text-white text-xl">Linkedin</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/timothy-itayi-ab8754138/">
              <button className="py-3 px-6 text-white transition duration-300 ease-in-out">
              <span className="text-white text-xl">Blog</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/timothy-itayi-ab8754138/">
              <button className="py-3 px-6 text-white transition duration-300 ease-in-out">
              <span className="text-white text-xl">Github</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
