"use client";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import AnimatedButton from "@/components/AnimatedButton";
import Dropdown from "@/components/Dropdown";
import FormInput from "@/components/FormInput";
import { CountryOption } from "@/types/forms";
import { toast } from "react-hot-toast";
import Image from "next/image";

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

const EnquireForm = ({ description }: { description: string }) => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [openDropdownName, setOpenDropdownName] = useState("");

  // Form state
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
    <Section className="py-10">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-3/5">
          <Paragraph
            size="lg"
            className="font-bold leading-tight uppercase text-(--teal)"
          >
            Grow with us
          </Paragraph>
          <Heading level={4} className="font-bold leading-tight">
            Contact
          </Heading>

          <Image
            src="/home/destination2.jpg"
            alt="Contact Image"
            width={600}
            height={400}
            className="rounded-md mt-4 w-full object-cover h-80"
          />

          <Paragraph size="lg" className="mt-4">
            {description}
          </Paragraph>
        </div>
        <div className="relative z-10 w-full sm:w-2/5 flex">
          <div className="w-full sm:w-[350px] md:w-[500px] bg-(--teal)/70 blur- bg-opacity-95 p-10 rounded-md shadow-xl backdrop-blur">
            {/* ICON + HEADING */}
            <div className="flex flex-col items-center mb-6">
              <span className="text-6xl mb-2 text-white">
                <FaGraduationCap />
              </span>
              <Heading
                level={5}
                className="text-white font-bold text-center mb-2"
              >
                Connect with us
              </Heading>
            </div>
            {/* FORM */}
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <FormInput
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
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
                  required
                  className="accent-(--orange)"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                You authorize us to call, email, or SMS you at any time.
              </label>
              <AnimatedButton
                type="submit"
                bgColor="bg-(--white)"
                textColor="text-(--white)"
                hoverTextColor="group-hover:text-(--orange)"
                skewColor="bg-(--orange)"
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
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EnquireForm;
