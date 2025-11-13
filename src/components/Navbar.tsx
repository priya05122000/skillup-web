"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Paragraph from "./Paragraph";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<{ main: boolean; studyAbroad: boolean }>({ main: false, studyAbroad: false });
  const pathname = usePathname();

  const studyAbroadCountries = [
    { name: "Canada", code: "canada" },
    { name: "Australia", code: "australia" },
    { name: "Ireland", code: "ireland" },
    { name: "Germany", code: "germany" },
    { name: "United States", code: "usa" },
    { name: "Denmark", code: "denmark" },
    { name: "Bulgaria", code: "bulgaria" },
    { name: "Malaysia", code: "malaysia" },
    { name: "Russia", code: "russia" },
    { name: "Singapore", code: "singapore" },
    { name: "United Kingdom", code: "uk" },
    { name: "New Zealand", code: "new-zealand" },
    { name: "Sweden", code: "sweden" },
    { name: "Switzerland", code: "switzerland" },
    { name: "Italy", code: "italy" },
    { name: "South Korea", code: "south-korea" },
    { name: "France", code: "france" },
    { name: "Netherlands", code: "netherlands" },
    { name: "UAE", code: "uae" },
    { name: "Phillipines", code: "phillipines" },
  ];

  return (
    <header className="flex items-center justify-between w-full bg-(--teal) px-6 sm:px-8 py-0 h-20 fixed top-0 z-50 shadow-lg">
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
            onClick={() => setMenuOpen((prev) => ({ ...prev, main: true }))}
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
              onClick={() => setMenuOpen((prev) => ({ ...prev, main: true }))}
            >
              <HiOutlineBars3 className="w-8 h-8" />
            </button>
          </div>
        </div>
        {/* Desktop: logo, menu links */}
        <div className="hidden lg:flex items-center gap-8 h-20 w-full justify-center">
          <Link href="#" className="flex items-center gap-2 h-full ">
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
            className={`flex gap-4  xl:gap-6 h-full text-(--white) text-sm font-normal items-center`}
            aria-label="Main navigation"
          >
            <Link className={`hover:text-(--orange) ${pathname === "/" ? "text-(--orange)" : ""}`} href="/">
              <Paragraph size="base">Home</Paragraph>
            </Link>
            <Link className={`hover:text-(--orange) ${pathname === "/about-us" ? "text-(--orange)" : ""}`} href="/about-us">
              <Paragraph size="base">About Us</Paragraph>
            </Link>
            <div className="relative group">
              <button className={`hover:text-(--orange)  flex items-center gap-1 ${pathname.startsWith("/study-abroad") ? "text-(--orange)" : ""}`}>
                <Paragraph size="base">Study Abroad</Paragraph>
                <span className=""><IoIosArrowDown className={`transition-transform   ${menuOpen.studyAbroad ? "rotate-180" : ""}`} /></span>
              </button>
              <div className="absolute left-0 top-full min-w-[400px] bg-(--white) text-(--teal) shadow-lg rounded-md p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50">
                <div className="grid grid-cols-2 gap-0">
                  {studyAbroadCountries.map((country) => (
                    <Link
                      key={country.code}
                      href={`/study-abroad/${country.code}`}
                      className={`flex items-center gap-2 px-4 py-2 hover:bg-(--teal) hover:text-(--white) ${pathname === `/study-abroad/${country.code}` ? "text-(--orange)" : ""}`}
                    >
                      <span>{country.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link className={`hover:text-(--orange) ${pathname === "/services" ? "text-(--orange)" : ""}`} href="/services">
              <Paragraph size="base">Services</Paragraph>
            </Link>
            <Link className={`hover:text-(--orange) ${pathname === "/contact-us" ? "text-(--orange)" : ""}`} href="/contact-us">
              <Paragraph size="base">Contact Us</Paragraph>
            </Link>
          </nav>
        </div>
        {/* Mobile menu overlay */}
        <nav
          className={`fixed inset-0 bg-(--teal) bg-opacity-95 flex flex-col items-center justify-center z-50 text-(--white) text-lg font-medium transition-all duration-500 ease-in-out ${menuOpen.main
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none"
            } overflow-y-auto`} // <-- add overflow-y-auto
          style={{ top: 0, left: 0 }}
        >
          <button
            className="absolute top-6 right-6 sm:right-8 text-(--white)"
            aria-label="Close menu"
            onClick={() => setMenuOpen((prev) => ({ ...prev, main: false, studyAbroad: false }))}
          >
            <IoMdClose className="w-8 h-8" />
          </button>
          <Link className={`hover:text-(--orange) mb-4 ${pathname === "/" ? "text-(--orange)" : ""}`} href="/" onClick={() => setMenuOpen({ main: false, studyAbroad: false })}>
            <Paragraph size="base">Home</Paragraph>
          </Link>
          <Link className={`hover:text-(--orange) mb-4 ${pathname === "/about-us" ? "text-(--orange)" : ""}`} href="/about-us" onClick={() => setMenuOpen({ main: false, studyAbroad: false })}>
            <Paragraph size="base">About Us</Paragraph>
          </Link>
          <div className="mb-4 w-full flex flex-col items-center">
            <button
              className={`w-full flex justify-center items-center  gap-1 px-4  ${menuOpen.studyAbroad ? "pb-2" : "pb-0"}  bg-transparent text-(--white)  rounded focus:outline-none ${pathname.startsWith("/study-abroad") ? "text-(--orange)" : ""}`}
              onClick={() => setMenuOpen((prev) => ({ ...prev, studyAbroad: !prev.studyAbroad }))}
              aria-expanded={!!menuOpen.studyAbroad}
              aria-controls="study-abroad-list"
            >
              <Paragraph size="base" className={`${pathname.startsWith("/study-abroad") ? "text-(--orange)" : ""}`}>Study Abroad</Paragraph>
              <IoIosArrowDown className={`transition-transform   ${menuOpen.studyAbroad ? "rotate-180" : ""}`} />
            </button>
            <div
              id="study-abroad-list"
              className={`grid grid-cols-1 items-center overflow-y-auto transition-all duration-300 ${menuOpen.studyAbroad ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} `}
              style={{ scrollbarWidth: 'thin' }}
            >
              {studyAbroadCountries.map((country) => (
                <Link
                  key={country.code}
                  href={`/study-abroad/${country.code}`}
                  className={`flex items-center gap-2 text-xs px-4 py-2 hover:bg-(--teal) hover:text-(--white) rounded w-full justify-center will-change-transform text-(--white) ${pathname === `/study-abroad/${country.code}` ? "text-(--orange)" : ""}`}
                  onClick={() => setMenuOpen({ main: false, studyAbroad: false })}
                >
                  <span className={`${pathname === `/study-abroad/${country.code}` ? "text-(--orange)" : ""}`}>{country.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <Link className={`hover:text-(--orange) mb-4 ${pathname === "/services" ? "text-(--orange)" : ""}`} href="/services" onClick={() => setMenuOpen({ main: false, studyAbroad: false })}>
              <Paragraph size="base">Services</Paragraph>
            </Link>
            <Link className={`hover:text-(--orange) mb-4 ${pathname === "/contact-us" ? "text-(--orange)" : ""}`} href="/contact-us" onClick={() => setMenuOpen({ main: false, studyAbroad: false })}>
              <Paragraph size="base">Contact Us</Paragraph>
            </Link>
          </div>
        </nav>
      </div>

      {/* Right: Free consultation */}
      <div className="hidden lg:flex items-center justify-end  h-full ">
        <button className="relative overflow-hidden px-4 py-2  text-(--orange)  bg-(--orange) rounded-md cursor-pointer outline-none border-none group">
          <Paragraph
            size="base"
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