import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Paragraph from "./Paragraph";
import { IoMdClose } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full bg-(--teal) px-6 sm:px-8 py-0 h-20 fixed top-0 z-50">
      {/* Left: Social Icons */}
      <div className="hidden md:flex items-center space-x-6 text-(--white) ">
        <Link href="#" aria-label="Facebook" className="hover:text-(--white)">
          <FaFacebookF className="w-5 h-5" />
        </Link>
        <Link href="#" aria-label="Instagram" className="hover:text-(--white)">
          <FaInstagram className="w-5 h-5" />
        </Link>
      </div>

      {/* Center: Logo and Menus */}
      <div className="flex flex-1 items-center justify-center">
        {/* Mobile/tab: only logo and hamburger */}
        <div className="flex items-center w-full lg:hidden">
          {/* Mobile: logo left, hamburger right */}
          <Link href="#" className="flex items-center gap-2 h-20 md:hidden">
            <span className="flex items-center justify-center">
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={500}
                height={500}
                className="h-[60px] w-auto"
              />
            </span>
          </Link>
          <div className="flex-1 md:hidden" />
          <button
            className="ml-4 text-(--white) md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <HiOutlineBars3 className="w-8 h-8" />
          </button>
          {/* Tablet: logo and hamburger centered */}
          <div className="hidden md:flex items-center justify-center w-full lg:hidden">
            <Link href="#" className="flex items-center gap-2 h-20 mx-auto">
              <span className="flex items-center justify-center">
                <Image
                  src="/logo/logo.svg"
                  alt="Logo"
                  width={500}
                  height={500}
                  className="h-[60px] w-auto"
                />
              </span>
            </Link>
            <button
              className="ml-4 text-(--white)"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <HiOutlineBars3 className="w-8 h-8" />
            </button>
          </div>
        </div>
        {/* Desktop: logo, menu links */}
        <div className="hidden lg:flex items-center gap-8 w-full justify-center">
          <Link href="#" className="flex items-center gap-2 h-20">
            <span className=" flex items-center justify-center ">
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={500}
                height={500}
                className="h-[60px] w-auto"
              />
            </span>
          </Link>
          <nav
            className={`flex gap-4 xl:gap-6 text-(--white) text-sm font-normal items-center`}
            aria-label="Main navigation"
          >
            <Link className="hover:underline" href="#">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              About Us
            </Link>
            <Link className="hover:underline" href="#">
              Study Abroad
            </Link>
            <Link className="hover:underline" href="#">
              Contact Us
            </Link>
            <Link className="hover:underline" href="#">
              Services
            </Link>
          </nav>
        </div>
        {/* Mobile menu overlay */}
        <nav
          className={`fixed inset-0 bg-(--teal) bg-opacity-95 flex flex-col items-center justify-center z-50 text-(--white) text-lg font-medium transition-all duration-500 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
          style={{ top: 0, left: 0 }}
        >
          <button
            className="absolute top-6 right-6 sm:right-8 text-(--white)"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <IoMdClose className="w-8 h-8" />
          </button>
          <Link className="mb-6" href="#">
            Home
          </Link>
          <Link className="mb-6" href="#">
            About Us
          </Link>
          <Link className="mb-6" href="#">
            Study Abroad
          </Link>
          <Link className="mb-6" href="#">
            Contact Us
          </Link>
          <Link className="mb-6" href="#">
            Services
          </Link>
        </nav>
      </div>

      {/* Right: Free consultation */}
      <div className="hidden lg:flex items-center justify-end  h-full ">
        <button className="relative overflow-hidden px-4 py-2  text-(--orange)  bg-(--orange) rounded-md cursor-pointer outline-none border-none group">
          <Paragraph
            size="lg"
            className="relative font-semibold z-10 rounded-md transition-colors duration-400 group-hover:text-(--white)"
          >
            Free Consultation
          </Paragraph>
          <div className="absolute top-0 -left-[10%] w-[120%] h-full rounded-md bg-(--white) skew-x-30 z-0 transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;