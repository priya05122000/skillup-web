import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Span from "./Span";
import Paragraph from "./Paragraph";
import Section from "./Section";
import { link } from "fs";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
];

type Country = {
  name: string;
  href: string;
};

const countries: Country[] = [
  { name: "UK", href: "/study-abroad/uk" },
  { name: "Canada", href: "/study-abroad/canada" },
  { name: "US", href: "/study-abroad/us" },
  { name: "Australia", href: "/study-abroad/australia" },
  { name: "Ireland", href: "/study-abroad/ireland" },
  { name: "Netherlands", href: "/study-abroad/netherlands" },
  { name: "Germany", href: "/study-abroad/germany" },
  { name: "Italy", href: "/study-abroad/italy" },
  { name: "Malta", href: "/study-abroad/malta" },
  { name: "Finland", href: "/study-abroad/finland" },
  { name: "France", href: "/study-abroad/france" },
  { name: "Newzealand", href: "/study-abroad/newzealand" },
];

const Footer = () => {
  return (
    <footer className="bg-(--teal) text-white pt-10 sm:pt-20 pb-10 relative w-full">
      <Section>
        {/* ---- GRID FIXED ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[80px_210px_250px_auto] xl:grid-cols-[130px_340px_350px_auto] gap-y-12 gap-x-12 mb-8 items-start w-full">
          {/* Explore */}
          <div className="flex flex-col min-w-[120px] ">
            <Paragraph size="sm" className="font-semibold mb-3 uppercase">
              Explore
            </Paragraph>
            <div className="text-sm flex flex-col gap-1">
              {navItems.map((item) => (
                <Link href={item.href} key={item.label}>
                  <Paragraph size="sm" className="mr-2 mb-1">
                    {item.label}
                  </Paragraph>
                </Link>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div className="min-w-[120px] xl:w-64">
            <Paragraph size="sm" className="font-semibold mb-3 uppercase">
              Countries
            </Paragraph>
            <div className="text-sm flex flex-wrap gap-2">
              {countries.map((country, idx) => (
                <Link
                  href={country.href}
                  key={idx}
                  className="hover:underline"
                >
                  <React.Fragment>
                    <Span className="mr-2 mb-1 inline-block">
                      {country.name}
                    </Span>
                    {idx < countries.length - 1 && (
                      <Span className="mx-1">|</Span>
                    )}
                  </React.Fragment>
                </Link>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="text-xs leading-relaxed min-w-[150px] lg:w-54 xl:w-60">
            <Paragraph size="sm" className="font-semibold mb-3 uppercase">
              Address
            </Paragraph>
            <Paragraph size="sm" className="mt-2">
              <span className="font-semibold">Navi Mumbai (Seawoods):</span>{" "}
              Office No. 201, Shah Heritage CHS Ltd, Plot No. 9, Sec-42/A, Nerul
              (W), Seawoods, Navi Mumbai, Maharashtra 400706
              <br />
              Opposite Seawoods D'mart
              <br />
            </Paragraph>
          </div>

          {/* Logo + Social Icons */}
          <div className="flex flex-col justify-start items-end h-full">
            <div className="flex flex-col items-start">
              <Link href="/" aria-label="Home">
                <Image
                  src="/logo/navbar-logo.webp"
                  alt="Logo"
                  width={120}
                  height={60}
                  className="h-16 w-auto"
                />
              </Link>
              <Paragraph size="sm" className="my-3">
                We offer personalized guidance, visa help, and complete
                assistance for students wanting to study abroad, ensuring they
                select the best universities and courses.
              </Paragraph>
              {/* <div className="flex gap-3 mt-2">
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
              </div> */}
            </div>
          </div>
        </div>

        <hr className="border-t border-white/30 my-4" />

        <div className="flex flex-col xl:flex-row items-start sm:items-center xl:items-start justify-between text-xs w-full">
          <Span className="mb-2 md:mb-0 text-start sm:text-center xl:text-left">
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
              className="underline mt-2 inline-block"
              aria-label="Terms and Conditions"
            >
              Terms &amp; Conditions
            </Link>
          </Span>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 xl:mt-0 ">
            <div>
                <Link
                href="tel:+919820588082"
                className="flex items-center gap-1 text-sm"
                aria-label="Call +91-98205 88082"
                >
                +91-98205 88082
                </Link>
              <Link
                href="tel:+919930180955"
                className="flex items-center gap-1 text-sm"
                aria-label="Call 09930180955"
              >
                +91-99301 80955
              </Link>
            </div>
            <div>
              <a
                href="mailto:info@skillupstudyabroad.com"
                className="flex items-center gap-1 text-sm"
                aria-label="Email info@skillupstudyabroad.com"
              >
                info@skillupstudyabroad.com
              </a>
              <a
                href="mailto:admission@skillupstudyabroad.com"
                className="flex items-center gap-1 text-sm"
                aria-label="Email admission@skillupstudyabroad.com"
              >
                admission@skillupstudyabroad.com
              </a>

            </div>
          </div>


        </div>
      </Section>
    </footer >
  );
};

export default Footer;
