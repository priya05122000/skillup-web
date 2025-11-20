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
import { FaHeadset } from "react-icons/fa";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import AnimatedButton from "@/components/AnimatedButton";

interface ClientLayoutProps {
  children: ReactNode;
}

const CTA_BUTTONS = [
  {
    icon: <PiPhoneCallFill className="w-8 h-8 shrink-0" />,
    label: "Call",
    href: "tel:+1234567890",
  },
  {
    icon: <IoLogoWhatsapp className="w-8 h-8 shrink-0" />,
    label: "Whatsapp",
    href: "https://wa.me/1234567890",
  },
  {
    icon: <FaHeadset className="w-8 h-8 shrink-0" />,
    label: "Enquiry",
    href: "/contact-us",
  },
];

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  // Popup state and logic
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupSubmitting, setPopupSubmitting] = useState(false);
  const [email, setEmail] = useState("");

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
          >
            {btn.icon}
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
            className="fixed inset-0 z-100 flex items-center justify-center bg-(--black)/60 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-(--teal) shadow-2xl p-6 max-w-lg w-full relative"
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
              <form
                onSubmit={handleSubscribe}
                className="space-y-2 mt-5"
              >
                <div className="flex flex-row gap-4 items-center">
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none"
                  />
                  <AnimatedButton
                    type="submit"
                    disabled={popupSubmitting}
                    bgColor="bg-(--orange)"
                    textColor="text-(--orange)"
                    hoverTextColor="group-hover:text-(--white)"
                    skewColor="bg-(--white)"
                  >
                    {popupSubmitting ? "Subscribing..." : "Subscribe"}
                  </AnimatedButton>
                </div>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClientLayout;
