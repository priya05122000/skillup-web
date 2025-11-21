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
    <footer className="bg-(--teal) text-white pt-10 sm:pt-20 pb-10 relative w-full">
      <Section>
        {/* ---- GRID FIXED ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[100px_200px_250px_auto] xl:grid-cols-[140px_220px_400px_auto] gap-y-12 gap-x-8 mb-8 items-start w-full">
          {/* Explore */}
          <div className="flex flex-col min-w-[120px] ">
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
          <div className="min-w-[120px] ">
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
          <div className="text-xs leading-relaxed min-w-[200px] ">
            <Paragraph size="base" className="font-semibold mb-3 uppercase">
              Address
            </Paragraph>
            <Paragraph size="base" className="mt-2">
              <span className="font-semibold">Navi Mumbai (Seawoods):</span>{" "}
              Office No. 201, Shah Heritage CHS Ltd, Plot No. 9, Sec-42/A, Nerul
              (W), Seawoods, Navi Mumbai, Maharashtra 400706
              <br />
              Opposite Seawoods D'mart
              <br />
            </Paragraph>
          </div>

          {/* Logo + Social Icons */}
          <div className="flex flex-col justify-start items-end h-full min-w-[120px] ">
            <div className="max-w-xs flex flex-col items-start  mr-auto">
              <Image
                src="/logo/navbar-logo.svg"
                alt="Logo"
                width={120}
                height={60}
                className="h-16 w-auto"
              />
              <Paragraph size="base" className="my-3">
                We offer personalized guidance, visa help, and complete
                assistance for students wanting to study abroad, ensuring they
                select the best universities and courses.
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

        <div className="flex flex-col xl:flex-row items-start justify-between text-xs w-full">
          <Span className="mb-2 md:mb-0 text-center xl:text-left">
            Copyright @ 2024 Skill Up Academy All Rights and Reserved. Powered
            by{" "}
            <Link
              href="https://izhtech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Span className="font-semibold text-(--orange)">
                Izhtech Creative Solutions
              </Span>
            </Link>
            <br />
            <Link
              href="/terms-and-conditions"
              className="underline"
              aria-label="Terms and Conditions"
            >
              Terms &amp; Conditions
            </Link>
          </Span>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-4 xl:mt-0 ">
            <Link
              href="tel:09930494883"
              className="flex items-center gap-1 text-sm"
              aria-label="Call 09930494883"
            >
              099304 94883
            </Link>
            <a
              href="mailto:seawoods.skillup@gmail.com"
              className="flex items-center gap-1 text-sm"
              aria-label="Email seawoods.skillup@gmail.com"
            >
              seawoods.skillup@gmail.com
            </a>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;