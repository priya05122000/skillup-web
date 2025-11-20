"use client";
import React, { FC, InputHTMLAttributes } from "react";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";
import Section from "./Section";
import AnimatedButton from "@/components/AnimatedButton";

// Types
interface CountryOption {
  name: string;
  code: string;
}

interface DropdownProps {
  options: string[] | CountryOption[];
  selected: string;
  placeholder: string;
  onSelect: (value: string) => void;
  buttonClass?: string;
  itemClass?: string;
}

interface DropdownControl {
  openDropdown: (name: string) => void;
  openName: string;
}

// Reusable Dropdown Component
const Dropdown: FC<DropdownProps & DropdownControl> = ({
  options,
  selected,
  placeholder,
  onSelect,
  buttonClass = "w-full px-4 py-2 bg-white text-black rounded-md text-left border border-gray-300 flex items-center justify-between",
  itemClass = "px-4 py-2 cursor-pointer hover:bg-gray-100",
  openDropdown,
  openName,
}) => {
  const isOpen = openName === placeholder;
  return (
    <div className="relative">
      <button
        type="button"
        className={buttonClass}
        onClick={() => openDropdown(isOpen ? "" : placeholder)}
      >
        <span>{selected || placeholder}</span>
        <span className="pointer-events-none ml-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8L10 12L14 8" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="absolute left-0 w-full mt-1 bg-white rounded-md shadow-lg z-20 max-h-60 overflow-auto">
          {(options as any[]).map((opt) => {
            const value = typeof opt === "string" ? opt : opt.name;
            const key = typeof opt === "string" ? opt : opt.code;
            return (
              <div
                key={key}
                className={itemClass}
                onClick={() => {
                  onSelect(value);
                  openDropdown("");
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      )}
      <input type="hidden" name={placeholder.toLowerCase()} value={selected} />
    </div>
  );
};

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

type FormInputProps = {
  type: "text" | "email" | "tel";
  placeholder: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
  type,
  placeholder,
  name,
  ...rest
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="w-full px-4 py-2 bg-white text-black focus:outline-none rounded-md"
    {...rest}
  />
);

const EnquireForm: FC = () => {
  const [selectedProgram, setSelectedProgram] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [openDropdownName, setOpenDropdownName] = React.useState("");

  return (
    <Section className="py-10 sm:py-20">
      <div className="relative p-10 flex justify-center items-center rounded-md">
        {/* BACKGROUND IMAGE FULL WIDTH */}
        <div className="absolute inset-0">
          <Image
            src="/home/enquireform.jpg"
            alt="Join with Us"
            fill
            className="object-cover w-full h-full rounded-md"
            priority
          />
        </div>
        {/* RIGHT FORM CONTAINER */}
        <div className="relative z-10 w-full max-w-7xl flex justify-end">
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
