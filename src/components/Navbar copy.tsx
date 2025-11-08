
import Image from "next/image";
import React, { useState } from "react";

const socialIcons = [
  {
    href: "#",
    label: "Facebook",
    svg: (
      <svg width="22" height="22" fill="none" stroke="white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
  },
  {
    href: "#",
    label: "X",
    svg: (
      <svg width="22" height="22" fill="none" stroke="white" viewBox="0 0 24 24"><path d="M17 7L7 17M7 7l10 10"/></svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    svg: (
      <svg width="22" height="22" fill="none" stroke="white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17" cy="7" r="1"/></svg>
    ),
  },
  {
    href: "#",
    label: "Pinterest",
    svg: (
      <svg width="22" height="22" fill="none" stroke="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4a2 2 0 1 0-2-2"/></svg>
    ),
  },
];

const navLinks = [
  { label: "Home", dropdown: true },
  { label: "Courses", dropdown: true },
  { label: "About" },
  { label: "Pages", dropdown: true },
  { label: "Blogs", dropdown: true },
  { label: "Contact" },
];

const rightIcons = [
  {
    label: "English",
    icon: (
      <span className="font-bold">English</span>
    ),
  },
  {
    label: "Globe",
    icon: (
      <svg width="22" height="22" fill="none" stroke="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>
    ),
  },
  {
    label: "Search",
    icon: (
      <svg width="22" height="22" fill="none" stroke="white" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    ),
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#8a1426] w-full py-4 px-8 flex items-center justify-between">
      {/* Left: Social Icons */}
      <div className="flex items-center gap-6">
        {socialIcons.map((icon, idx) => (
          <a key={idx} href={icon.href} aria-label={icon.label} className="hover:opacity-80">
            {icon.svg}
          </a>
        ))}
      </div>

      {/* Center: Logo and Nav */}
      <div className="flex items-center gap-8 mx-auto">
        <div className="flex items-center gap-3">
          <span className="bg-white rounded-full p-3 flex items-center justify-center">
            <Image src="/logo/logo.svg" alt="Eduvce Logo" width={40} height={40} />
          </span>
          <span className="text-white text-2xl font-bold">Eduvce</span>
        </div>
        <nav className="flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <div key={idx} className="relative group">
              <a href="#" className="text-white font-semibold hover:underline flex items-center gap-1">
                {link.label}
                {link.dropdown && (
                  <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                )}
              </a>
              {/* Dropdown example (hidden by default) */}
              {link.dropdown && (
                <div className="absolute left-0 top-full mt-2 bg-white rounded shadow-lg min-w-[120px] hidden group-hover:block z-10">
                  <a href="#" className="block px-4 py-2 text-[#8a1426] hover:bg-gray-100">Option 1</a>
                  <a href="#" className="block px-4 py-2 text-[#8a1426] hover:bg-gray-100">Option 2</a>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Right: Language, Globe, Search, Hamburger */}
      <div className="flex items-center gap-6">
        {rightIcons.map((item, idx) => (
          <span key={idx} className="flex items-center gap-1 text-white">
            {item.icon}
          </span>
        ))}
        <button
          className="md:hidden text-white"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="28" height="28" fill="none" stroke="white" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
