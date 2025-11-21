import React, { useState } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import Heading from "@/components/Heading";
import Dropdown from "@/components/Dropdown";
import FormInput from "@/components/FormInput";
import { FaGraduationCap } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Paragraph from "./Paragraph";

import { CountryOption } from "@/types/forms";

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

interface PopupFormProps {
  setShowEnquiryForm: (show: boolean) => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ setShowEnquiryForm }) => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [openDropdownName, setOpenDropdownName] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);
    if (!agree) {
      setError("You must authorize us to contact you.");
      setSubmitting(false);
      return;
    }
    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          mobile,
          course: selectedProgram,
          country: selectedCountry,
        }),
      });
      if (res.ok) {
        toast.success("Your enquiry has been sent!");
        setFullName("");
        setEmail("");
        setMobile("");
        setSelectedProgram("");
        setSelectedCountry("");
        setAgree(false);
        setSuccess("Your enquiry has been sent!");
        setShowEnquiryForm(false);
      } else {
        setError("Failed to send enquiry. Please try again.");
      }
    } catch {
      setError("Failed to send enquiry. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-(--black)/60 p-6"
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

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
            required
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <FormInput
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMobile(e.target.value)}
            required
          />
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
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              required
              className="accent-(--orange)"
            />
            You authorize us to call, email, or SMS you at any time.
          </label>
          <AnimatedButton
            type="submit"
            bgColor="bg-(--white)"
            textColor="text-(--white)"
            hoverTextColor="group-hover:text-(--orange)"
            skewColor="bg-(--orange)"
            className="px-4 py-2"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </AnimatedButton>
          {success && (
            <Paragraph className="text-green-300 mt-2">{success}</Paragraph>
          )}
          {error && (
            <Paragraph className="text-red-300 mt-2">{error}</Paragraph>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PopupForm;
