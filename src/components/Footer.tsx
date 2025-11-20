import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Span from "./Span";
import Paragraph from "./Paragraph";
import Section from "./Section";

type NavItem = {
  label: string;
  href?: string;
};

const navItems: NavItem[] = [
  { label: "Name", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

const countries: string[] = [
  "UK",
  "Canada",
  "US",
  "Australia",
  "Ireland",
  "Netherlands",
  "Germany",
  "Italy",
  "Malta",
  "Finland",
  "France",
  "Newzealand",
];

const Footer = () => {
  return (
    <footer className="bg-(--teal) text-white pt-10 sm:pt-20 pb-10 relative">
      <Section>
        {/* ---- GRID FIXED ---- */}
        <div className="grid grid-cols-1 md:grid-cols-[140px_220px_400px_auto] gap-y-12 gap-x-8 mb-8 items-start">
          {/* Explore */}
          <div className="flex flex-col">
            <Paragraph size="base" className="font-semibold mb-3 uppercase">
              Explore
            </Paragraph>
            <div className="text-sm flex flex-col gap-1">
              {navItems.map((item) => (
                <Paragraph size="base" className="mr-2 mb-1" key={item.label}>
                  {item.label}
                </Paragraph>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div>
            <Paragraph size="base" className="font-semibold mb-3 uppercase">
              Countries
            </Paragraph>
            <div className="text-sm flex flex-wrap gap-2">
              {countries.map((country, idx) => (
                <React.Fragment key={country}>
                  <Span className="mr-2 mb-1 inline-block">{country}</Span>
                  {idx < countries.length - 1 && (
                    <Span className="mx-1">|</Span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="text-xs leading-relaxed">
            <Paragraph size="base" className="font-semibold mb-3 uppercase">
              Address
            </Paragraph>
            <Paragraph size="base" className="mt-2">
              <span className="font-semibold">Navi Mumbai (Seawoods):</span>{" "}
              Office No. 10, Shah Heritage, Plot No. 9, Sector 42/A, Opp.
              D-Mart, Seawoods (W), Navi Mumbai-400706
            </Paragraph>
            <Paragraph size="base" className="mt-2">
              <span className="font-semibold">
                Navi Mumbai (Koparkhairane):
              </span>{" "}
              Shop no 3, Anmol Terrace CHS Ltd, sector 5, Koparkhairane Rd,
              Opposite Lokmanya Tilak college, Navi Mumbai -400709
            </Paragraph>
          </div>

          {/* Logo + Social Icons */}
          <div className="flex flex-col justify-start items-end h-full ">
            <div className="max-w-xs flex flex-col items-start">
              <Image
                src="/logo/navbar-logo.svg"
                alt="Logo"
                width={120}
                height={60}
                className="h-16 w-auto"
              />
              <Paragraph size="base" className=" my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus necessitatibus consectetur nulla adipisci ipsam?
              </Paragraph>
              <div className="flex gap-3 mt-2">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-(--white)"
                >
                  <FaFacebookF className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-(--white)"
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-white/30 my-4" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs">
          <Span className="mb-2 md:mb-0">
            @ 2025 - All Rights Reserved by{" "}
            <Span className="font-semibold">leadzstudyabroad.com</Span>
          </Span>

          <div className="flex items-center gap-4">
            <Span className="flex items-center gap-1">
              <i className="fas fa-phone-alt"></i> +91 8893 2700 50
            </Span>
            <Span className="flex items-center gap-1">
              <i className="fas fa-envelope"></i> info@leadzedu.com
            </Span>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
