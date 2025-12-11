"use client";
import Heading from "@/components/Heading";
import Section from "@/components/Section";
import React, { useState } from "react";
import { CountryOption } from "@/types/forms";
import { FaFacebookF, FaGraduationCap } from "react-icons/fa";
import FormInput from "@/components/FormInput";
import Dropdown from "@/components/Dropdown";
import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";
import toast from "react-hot-toast";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SectionCenter from "@/components/SectionCenter";
import EnquiryFormFields from "@/components/EnquiryFormFields";

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

const ContactForm = () => {
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
      } else {
        setError("Failed to send enquiry. Please try again.");
        console.error("Failed to send enquiry:", await res.text());
        console.error(error);
      }
    } catch {
      setError("Failed to send enquiry. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <SectionCenter className="py-10 sm:py-20">
      <div className="contact-form grid grid-cols-1 xl:grid-cols-[1fr_3fr] gap-10 xl:gap-38 ">
        <div className="text-end hidden xl:flex flex-col justify-center">
          <Heading level={3} className="font-bold mb-4 uppercase text-(--teal)">
            Fill our enquiry form today
          </Heading>
          <Paragraph
            size="sm"
            className="mt-8 mb-6 flex items-end gap-2 justify-end"
          >
            Facebook{" "}
            <span className="ml-8 text-3xl text-(--teal)">
              <FaFacebookF />
            </span>
          </Paragraph>
          <Paragraph
            size="sm"
            className=" flex mb-6 items-end gap-2 justify-end"
          >
            Instagram{" "}
            <span className="ml-8 text-3xl text-(--teal)">
              <FaInstagramSquare />
            </span>
          </Paragraph>
          <Paragraph size="sm" className=" flex items-end gap-2 justify-end">
            LinkedIn{" "}
            <span className="ml-8 text-3xl text-(--teal)">
              <FaLinkedin />
            </span>
          </Paragraph>
        </div>
        <div className=" flex w-full flex-col items-end">
          <div className="bg-(--teal) rounded-md sm:bg-(--teal)/80 backdrop-blur-md relative p-10  sm:w-3/4 xl:w-4/5 flex justify-end ">
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[320px] lg:w-[400px] h-[80%] hidden sm:block">
              <div className="relative  w-full h-full">
                <div className="absolute right-0 xl:right-10 bottom-0 w-[calc(100%-30px)] h-[calc(100%-30px)] rounded-md   bg-(--teal)"></div>
                <div className="absolute left-0 xl:-left-10 top-0 w-[calc(100%-30px)] h-[calc(100%-30px)]">
                  <Image
                    src="/contact/contactform.webp"
                    alt="Decorative"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="sm:w-3/5 flex  items-end">
              <div className="w-full">
                <div className="flex flex-col items-center mb-4">
                  <span className="text-5xl text-white">
                    <FaGraduationCap />
                  </span>
                  <Heading
                    level={5}
                    className="text-white font-bold text-center mb-2"
                  >
                    Get in Touch
                  </Heading>
                </div>
                {/* Only render the reusable form fields component here */}
                <EnquiryFormFields />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionCenter>
  );
};

export default ContactForm;
