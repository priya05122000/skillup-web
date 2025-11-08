import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-between w-full bg-[#49a6a7] px-0 py-0"
      style={{ minHeight: "80px" }}
    >
      {/* Left: Social Icons */}
      <div className="hidden md:flex items-center space-x-6 pl-4 text-white min-w-[180px]">
        <a href="#" aria-label="Facebook" className="hover:text-white">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
          </svg>
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-white">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.784 2.226 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.346 3.678 1.327c-.98.98-1.196 2.093-1.255 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.275 2.394 1.255 3.374.981.981 2.093 1.196 3.374 1.255C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.394-.274 3.374-1.255.98-.98 1.196-2.093 1.255-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.275-2.394-1.255-3.374-.981-.981-2.093-1.196-3.374-1.255C15.668.013 15.259 0 12 0z" />
            <circle cx="12" cy="12" r="3.5" />
          </svg>
        </a>
        <a href="#" aria-label="Pinterest" className="hover:text-white">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.388 7.633 11.093-.105-.943-.2-2.39.042-3.419.219-.956 1.409-6.099 1.409-6.099s-.359-.719-.359-1.781c0-1.668.968-2.915 2.174-2.915 1.025 0 1.52.77 1.52 1.693 0 1.031-.656 2.572-.995 4.003-.283 1.197.601 2.174 1.782 2.174 2.138 0 3.782-2.253 3.782-5.502 0-2.872-2.065-4.885-5.021-4.885-3.429 0-5.444 2.571-5.444 5.225 0 1.04.401 2.158.902 2.765.1.12.114.225.083.345-.09.36-.292 1.197-.331 1.362-.05.207-.162.252-.375.153-1.398-.577-2.272-2.389-2.272-3.85 0-3.135 2.553-6.888 7.615-6.888 4.073 0 6.759 2.924 6.759 6.073 0 4.205-2.338 7.324-5.801 7.324-1.162 0-2.257-.627-2.627-1.336l-.715 2.724c-.206.786-.61 1.772-.91 2.376C9.36 23.82 10.66 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
        </a>
      </div>

      {/* Center: Logo and Menus */}
      <div className="flex flex-1 items-center justify-center">
        {/* Mobile/tab: only logo and hamburger */}
        <div className="flex items-center justify-center w-full md:hidden">
          <a href="#" className="flex items-center gap-2 mx-auto h-20">
            <span className="bg-white rounded-full flex items-center justify-center h-20 w-20">
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                style={{ height: "80px", width: "auto" }}
              />
            </span>
          </a>
          <button
            className="ml-4 text-white"
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
        {/* Desktop: logo, menu links */}
        <div className="hidden md:flex items-center gap-8 w-full justify-center">
          <a href="#" className="flex items-center gap-2 h-20">
            <span className=" flex items-center justify-center ">
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                style={{ height: "60px", width: "auto" }}
              />
            </span>
          </a>
          <nav
            className={`flex gap-6 text-white text-sm font-normal items-center`}
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
          <nav className="fixed inset-0 bg-[#880E2A] bg-opacity-95 flex flex-col items-center justify-center z-50 text-white text-lg font-medium">
            <button
              className="absolute top-6 right-6 text-white"
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
        className="hidden md:flex items-center justify-end min-w-[260px] bg-white h-full px-8 py-4"
        style={{ height: "56px" }}
      >
        <span className="text-black text-2xl font-light whitespace-nowrap">
          Free consulation
        </span>
      </div>
    </header>
  );
};

export default Navbar;
