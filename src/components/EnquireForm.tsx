"use client";
import React, { FC, InputHTMLAttributes } from "react";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";
import Section from "./Section";
import AnimatedButton from "@/components/AnimatedButton";
import Dropdown from "@/components/Dropdown";
import FormInput from "@/components/FormInput";
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


interface EnquireFormProps {
  imageSrc: string;
}

const EnquireForm: FC<EnquireFormProps> = ({ imageSrc }) => {
  const [selectedProgram, setSelectedProgram] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [openDropdownName, setOpenDropdownName] = React.useState("");

  return (
    <Section className="py-10 sm:py-20">
      <div className="relative sm:p-10 flex justify-center items-center rounded-md">
        {/* BACKGROUND IMAGE FULL WIDTH */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt="Join with Us"
            fill
            className="object-cover w-full h-full rounded-md"
            priority
          />
        </div>
        {/* RIGHT FORM CONTAINER */}
        <div className="relative z-10 w-full max-w-7xl flex justify-center lg:justify-end">
          <div className="w-full sm:w-[350px] md:w-[500px] bg-(--teal)/70 blur- bg-opacity-95 p-10 rounded-md shadow-xl backdrop-blur">
            {/* ICON + HEADING */}
            <div className="flex flex-col items-center mb-6">
              <span className="text-6xl mb-2 text-white">
                <FaGraduationCap />
              </span>
              <Heading level={4} className="text-white font-bold text-center mb-2">
                Join With Us
              </Heading>
            </div>
            {/* FORM */}
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
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EnquireForm;
