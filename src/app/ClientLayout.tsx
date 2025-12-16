"use client";

import React, {
  ReactNode,
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  createContext,
  useMemo,
} from "react";
export const EnquiryFormContext = createContext<
  | {
    showEnquiryForm: boolean;
    setShowEnquiryForm: React.Dispatch<React.SetStateAction<boolean>>;
  }
  | undefined
>(undefined);
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

import Navbar from "@/components/Navbar";
import AOSInit from "@/components/AOSInit";
import Footer from "@/components/Footer";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaHeadset } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import PopupForm from "@/components/PopupForm";
import AnimatedButton from "@/components/AnimatedButton";
import Heading from "@/components/Heading";
import SubscribePopup from "@/components/SubscribePopup";

interface ClientLayoutProps {
  children: ReactNode;
}

const CTA_BUTTONS = [
  {
    icon: <BsFilePost className="w-7 h-7 shrink-0" />,
    label: "Brochure",
    href: "#",
  },
  {
    icon: <PiPhoneCallFill className="w-7 h-7 shrink-0" />,
    label: "Call",
    href: "tel:9820588082",
  },
  {
    icon: <IoLogoWhatsapp className="w-7 h-7 shrink-0" />,
    label: "Whatsapp",
    href: "https://wa.me/9820588082",
  },
  {
    icon: <FaHeadset className="w-7 h-7 shrink-0" />,
    label: "Enquiry",
    href: "/contact-us",
  },
];

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  // Popup state and logic
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupSubmitting, setPopupSubmitting] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

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

  const handleMobileNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setMobileNumber(value);
  };

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setPopupSubmitting(true);
    // Mobile validation: only 10 digits
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      setPopupSubmitting(false);
      return;
    }
    if (!executeRecaptcha) {
      toast.error("Captcha failed. Please refresh and try again.");
      setPopupSubmitting(false);
      return;
    }
    const captchaToken = await executeRecaptcha("subscribe_popup");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber, recaptchaToken: captchaToken }),
      });
      if (res.ok) {
        toast.success("Demo Request sent successfully!");
        setMobileNumber("");
        setShowPopup(false);
      } else {
        toast.error("Failed to send demo request. Please try again.");
      }
    } catch {
      toast.error("Failed to send demo request. Please try again.");
    }
    setPopupSubmitting(false);
  };

  const handleClosePopup = () => setShowPopup(false);

  const contextValue = useMemo(
    () => ({ showEnquiryForm, setShowEnquiryForm }),
    [showEnquiryForm]
  );
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "body",
      }}
    >
      <EnquiryFormContext.Provider value={contextValue}>
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
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              rel={
                btn.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group relative w-12 hover:w-36 h-12 bg-(--orange) shadow-xl text-(--white) rounded-l-md font-bold flex justify-start items-center p-2 pr-6 duration-700 overflow-hidden cursor-pointer no-underline"
              onClick={(e) => {
                if (btn.label === "Enquiry") {
                  e.preventDefault();
                  setShowEnquiryForm(true);
                } else if (btn.label === "Call" || btn.label === "Whatsapp") {
                  window.open(
                    btn.href,
                    btn.label === "Whatsapp" ? "_blank" : "_self"
                  );
                }
              }}
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
            <SubscribePopup onClose={handleClosePopup} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showEnquiryForm && (
            <PopupForm setShowEnquiryForm={setShowEnquiryForm} />
          )}
        </AnimatePresence>
        <Toaster position="top-right" reverseOrder={false} />
      </EnquiryFormContext.Provider>
    </GoogleReCaptchaProvider>
  );
};

export default ClientLayout;
