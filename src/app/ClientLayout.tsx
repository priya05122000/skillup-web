"use client";

import React, { ReactNode, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

import Navbar from "@/components/Navbar";
import AOSInit from "@/components/AOSInit";
import Footer from "@/components/Footer";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGraduationCap, FaHeadset } from "react-icons/fa";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import AnimatedButton from "@/components/AnimatedButton";
import Heading from "@/components/Heading";
import Dropdown from "@/components/Dropdown";
import FormInput from "@/components/FormInput";
import { CountryOption } from "@/types/forms";

interface ClientLayoutProps {
  children: ReactNode;
}

const CTA_BUTTONS = [
  {
    icon: <PiPhoneCallFill className="w-7 h-7 shrink-0" />,
    label: "Call",
    href: "tel:+1234567890",
  },
  {
    icon: <IoLogoWhatsapp className="w-7 h-7 shrink-0" />,
    label: "Whatsapp",
    href: "https://wa.me/1234567890",
  },
  {
    icon: <FaHeadset className="w-7 h-7 shrink-0" />,
    label: "Enquiry",
    href: "/contact-us",
  },
];

const courseOptions = ["MBBS", "Nursing", "Pharmacy", "Dental", "Other"];
const countryOptions: CountryOption[] = [
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

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  // Popup state and logic
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupSubmitting, setPopupSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let popupTimer: NodeJS.Timeout;
    if (!loading) {
      popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 2500);
    }
    return () => {
      if (popupTimer) clearTimeout(popupTimer);
    };
  }, [loading]);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setPopupSubmitting(true);
    // Add your subscribe logic here
    toast.success("Subscribed successfully!");
    setEmail("");
    setShowPopup(false);
    setPopupSubmitting(false);
  };

  const handleClosePopup = () => setShowPopup(false);
  const [selectedProgram, setSelectedProgram] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [openDropdownName, setOpenDropdownName] = React.useState("");

  return (
    <>
      <AOSInit />

      <Navbar />

      {/* Main content */}
      <main className="relative z-10 pt-20">{children}</main>

      <Footer />

      {/* Fixed vertical CTA buttons */}
      <div className="fixed right-0 top-3/4 transform -translate-y-1/2 flex flex-col gap-4 z-50 w-36 items-end">
        {CTA_BUTTONS.map((btn) => (
          <Link
            key={btn.label}
            href={btn.href}
            target={btn.href.startsWith('http') ? '_blank' : undefined}
            rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group relative w-12 hover:w-36 h-12 bg-(--orange) shadow-xl text-(--white) rounded-l-md font-bold flex justify-start items-center p-2 pr-6 duration-700 overflow-hidden cursor-pointer no-underline"
            onClick={btn.label === 'Enquiry' ? (e => { e.preventDefault(); setShowEnquiryForm(true); }) : undefined}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="flex items-center"
            >
              {btn.icon}
            </motion.span>
            <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-300 opacity-0 group-hover:opacity-100 border-l-2 border-white ml-2 pl-2 transform scale-x-0 group-hover:scale-x-100 transition-all">
              {btn.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-(--black)/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-(--teal)/40 shadow-2xl p-10 max-w-lg w-full relative backdrop-blur-md rounded-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-2 cursor-pointer text-xl text-(--bg-grey)"
                onClick={handleClosePopup}
                aria-label="Close"
              >
                <IoClose />
              </button>

              {/* <div className="mb-8 flex justify-center">
              <img
                src="/logos/navbarlogo.png"
                alt="Logo"
                width={180}
                height={40}
                className="w-48 md:w-72"
              />
              </div> */}
              <Heading level={5} className="font-bold leading-tight text-center text-(--white) uppercase">
                Subscribe
              </Heading>
              <Paragraph size="lg" className="mt-4 text-(--white) text-center">
                Subscribe with your email for exclusive updates and insights about our services.
              </Paragraph>
              <form
                onSubmit={handleSubscribe}
                className="space-y-2 mt-5"
              >
                <div className="flex flex-row gap-2  items-center">
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded border border-white bg-white focus:outline-none"
                  />
                  <AnimatedButton
                    type="submit"
                    disabled={popupSubmitting}
                    bgColor="bg-(--white)"
                    textColor="text-(--white)"
                    hoverTextColor="group-hover:text-(--teal)"
                    skewColor="bg-(--orange)"
                    className="px-4 py-2"
                  >
                    {popupSubmitting ? "Subscribing..." : "Subscribe"}
                  </AnimatedButton>
                </div>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showEnquiryForm && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-(--black)/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full sm:w-[350px] md:w-[500px] bg-(--teal)/40 shadow-2xl p-10 max-w-lg relative backdrop-blur-md rounded-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-2 cursor-pointer text-2xl text-(--bg-grey)"
                onClick={() => setShowEnquiryForm(false)}
                aria-label="Close"
              >
                <IoClose />
              </button>

              {/* ICON + HEADING */}
              <div className="flex flex-col items-center mb-6">
                <span className="text-5xl mb-2 text-white">
                  <FaGraduationCap />
                </span>
                <Heading level={5} className="text-white font-bold text-center mb-2">
                  Join With Us
                </Heading>
              </div>

              <form className="w-full flex flex-col gap-4">
                <FormInput type="text" name="fullName" placeholder="Full Name" />
                <FormInput type="email" name="email" placeholder="Email" />
                <FormInput type="tel" name="mobile" placeholder="Mobile Number" />
                <Dropdown
                  options={courseOptions}
                  selected={selectedProgram}
                  placeholder="Course"
                  onSelect={setSelectedProgram}
                  openDropdown={setOpenDropdownName}
                  openName={openDropdownName}
                />
                <Dropdown
                  options={countryOptions}
                  selected={selectedCountry}
                  placeholder="Country"
                  onSelect={setSelectedCountry}
                  openDropdown={setOpenDropdownName}
                  openName={openDropdownName}
                />
                <label className="flex items-center gap-2 text-xs text-white">
                  <input type="checkbox" required className="accent-(--orange)" />
                  You authorize us to call, email, or SMS you at any time.
                </label>
                <AnimatedButton
                  type="submit"
                  bgColor="bg-(--white)"
                  textColor="text-(--white)"
                  hoverTextColor="group-hover:text-(--orange)"
                  skewColor="bg-(--orange)"
                >
                  Submit
                </AnimatedButton>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClientLayout;
