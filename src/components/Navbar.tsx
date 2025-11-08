import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Span from "./Span";
import Paragraph from "./Paragraph";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-between w-full bg-(--teal) px-8 py-0"
      style={{ minHeight: "80px" }}
    >
      {/* Left: Social Icons */}
      <div className="hidden md:flex items-center space-x-6 text-(--text-white) ">
        <a href="#" aria-label="Facebook" className="hover:text-(--text-white)">
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-(--text-white)">
          <FaInstagram className="w-5 h-5" />
        </a>
      </div>

      {/* Center: Logo and Menus */}
      <div className="flex flex-1 items-center justify-center">
        {/* Mobile/tab: only logo and hamburger */}
        <div className="flex items-center w-full lg:hidden">
          {/* Mobile: logo left, hamburger right */}
          <a href="#" className="flex items-center gap-2 h-20 md:hidden">
            <span className="flex items-center justify-center">
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={500}
                height={500}
                className="h-[60px] w-auto"
              />
            </span>
          </a>
          <div className="flex-1 md:hidden" />
          <button
            className="ml-4 text-(--text-white) md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Tablet: logo and hamburger centered */}
          <div className="hidden md:flex items-center justify-center w-full lg:hidden">
            <a href="#" className="flex items-center gap-2 h-20 mx-auto">
              <span className="flex items-center justify-center">
                <Image
                  src="/logo/logo.svg"
                  alt="Logo"
                  width={500}
                  height={500}
                  className="h-[60px] w-auto"
                />
              </span>
            </a>
            <button
              className="ml-4 text-(--text-white)"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Desktop: logo, menu links */}
        <div className="hidden lg:flex items-center gap-8 w-full justify-center">
          <a href="#" className="flex items-center gap-2 h-20">
            <span className=" flex items-center justify-center ">
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={500}
                height={500}
                className="h-[60px] w-auto"
              />
            </span>
          </a>
          <nav
            className={`flex gap-6 text-(--text-white) text-sm font-normal items-center`}
            aria-label="Main navigation"
          >
            <a className="hover:underline" href="#">
              Home
            </a>
            <a className="hover:underline" href="#">
              Courses
            </a>
            <a className="hover:underline" href="#">
              About
            </a>
            <a className="hover:underline" href="#">
              Pages
            </a>
            <a className="hover:underline" href="#">
              Blogs
            </a>
            <a className="hover:underline" href="#">
              Contact
            </a>
          </nav>
        </div>
        {/* Mobile menu overlay */}
        {menuOpen && (
          <nav className="fixed inset-0 bg-(--teal) bg-opacity-95 flex flex-col items-center justify-center z-50 text-(--text-white) text-lg font-medium">
            <button
              className="absolute top-6 right-6 text-(--text-white)"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a className="mb-6" href="#">
              Home
            </a>
            <a className="mb-6" href="#">
              Courses
            </a>
            <a className="mb-6" href="#">
              About
            </a>
            <a className="mb-6" href="#">
              Pages
            </a>
            <a className="mb-6" href="#">
              Blogs
            </a>
            <a className="mb-6" href="#">
              Contact
            </a>
          </nav>
        )}
      </div>

      {/* Right: Free consultation */}
      <div
        className="hidden lg:flex items-center justify-end  h-full "
        style={{ height: "56px" }}
      >
        <button className="relative overflow-hidden px-4 py-2  text-(--orange)  bg-(--orange) cursor-pointer outline-none border-none group">
          <Paragraph
            size="lg"
            className="relative font-semibold z-10 transition-colors duration-400 group-hover:text-(--teal)"
          >
            Free Consultation
          </Paragraph>
          <div className="absolute top-0 -left-[10%] w-[120%] h-full bg-(--text-white) skew-x-[30deg] -z-0 transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
