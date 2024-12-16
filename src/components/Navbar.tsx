"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 border-b-2 border-gray-200">
      {/* Navbar Container */}
      <div className="flex justify-between items-center px-6 py-2">
        {/* Logo with Image */}
        <div className="flex items-center">
          <Link href="/">
          <Image
  src={"/logo.png"}
  alt="Logo"
  width={40}
  height={40}
/>

            <span className="ml-2 text-white font-bold text-lg">Al Kazim Model School</span>
          </Link>
        </div>

        {/* Menu Links for Larger Screens */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="px-3 py-2 rounded-md bg-orange-100 font-medium text-gray-700">
            Home
          </Link>
          <Link href="/about-us" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            About Us
          </Link>
          <Link href="/Academics" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Academics
          </Link>
          <Link href="/admission" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Admissions
          </Link>
          <Link href="/student-life" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Student Life
          </Link>
          <Link href="/contact" className="px-3 py-2 rounded-md bg-orange-400 text-white font-semibold">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden bg-orange-50">
          <Link href="/" className="block px-6 py-2 text-gray-700 hover:bg-orange-100">
            Home
          </Link>
          <Link href="/about" className="block px-6 py-2 text-gray-700 hover:bg-orange-100">
            About Us
          </Link>
          <Link href="/academics" className="block px-6 py-2 text-gray-700 hover:bg-orange-100">
            Academics
          </Link>
          <Link href="/admissions" className="block px-6 py-2 text-gray-700 hover:bg-orange-100">
            Admissions
          </Link>
          <Link href="/student-life" className="block px-6 py-2 text-gray-700 hover:bg-orange-100">
            Student Life
          </Link>
          <Link href="/contact" className="block px-6 py-2 bg-orange-400 text-white">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
