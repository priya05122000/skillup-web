"use client";
import Heading from "@/components/Heading";
import Section from "@/components/Section";
import React from "react";
import { CountryOption } from "@/types/forms";
import { FaFacebookF, FaGraduationCap } from "react-icons/fa";
import FormInput from "@/components/FormInput";
import Dropdown from "@/components/Dropdown";
import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
  const [selectedProgram, setSelectedProgram] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [openDropdownName, setOpenDropdownName] = React.useState("");
  return (
    <Section className="py-10 sm:py-20">
      <div className="contact-form grid grid-cols-1  xl:grid-cols-[1fr_3fr] gap-20">
        <div className="text-end flex flex-col justify-center">
          <Heading level={3} className="font-bold mb-4 uppercase text-(--teal)">
            Fill our enquiry form today
          </Heading>
          <Paragraph size="lg" className="mt-8 mb-6 flex items-center gap-2 justify-end">
            Facebook <span className="ml-10 text-3xl text-(--teal)"><FaFacebookF /></span>
          </Paragraph>
          <Paragraph size="lg" className=" flex mb-6 items-center gap-2 justify-end">
            Instagram <span className="ml-10 text-3xl text-(--teal)"><FaInstagramSquare  /></span>
          </Paragraph>
          <Paragraph size="lg" className=" flex items-center gap-2 justify-end">
            LinkedIn <span className="ml-10 text-3xl text-(--teal)"><FaLinkedin  /></span>
          </Paragraph>
        </div>
        <div className=" flex w-full flex-col items-end">
          <div className="bg-(--teal)/80 backdrop-blur-md relative p-10 w-4/5 flex justify-end ">
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[80%] ">
              <div className="relative  w-full h-full">
                <div className="absolute  right-0 bottom-0 w-[calc(100%-30px)] h-[calc(100%-30px)]    bg-(--teal)"></div>
                <div className="absolute  left-0 top-0 w-[calc(100%-30px)] h-[calc(100%-30px)]">
                  <Image
                    src="/contact/contactform.jpg"
                    alt="Decorative"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="w-2/3 flex  items-end">
              <div className="w-full">
                <div className="flex flex-col items-center mb-6">
                  <span className="text-6xl mb-2 text-white">
                    <FaGraduationCap />
                  </span>
                  <Heading
                    level={4}
                    className="text-white font-bold text-center mb-2"
                  >
                    Get in Touch
                  </Heading>
                </div>
                <form className="w-full flex flex-col gap-4">
                  <FormInput
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                  />
                  <FormInput type="email" name="email" placeholder="Email" />
                  <FormInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
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
                    />
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
        </div>
      </div>
    </Section>
  );
};


export default ContactForm;
