"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import { desc } from "framer-motion/client";
import Span from "@/components/Span";
import Paragraph from "@/components/Paragraph";
import { MdArrowOutward } from "react-icons/md";

const doctorProfile = [
  {
    name: "Study</br/>Abroad<br/>Counselling",
    profile_photo_url: "home/service1.jpg",
    description:
      "Get personalized guidance to choose the right program and university for your global education journey, ensuring every step aligns with your academic and career goals.",
  },
  {
    name: "Course<br/>Guidance",
    profile_photo_url: "home/service2.jpg",
    description:
      "Get expert support to identify the best courses and secure scholarships that match your academic goals, making your study abroad journey affordable and successful.",
  },
  {
    name: "University/College<br/>Application<br/>Processing",
    profile_photo_url: "home/service4.jpg",
    description:
      "Enjoy expert guidance with Skill Up Study Abroad Agency through every step of your university or college application for a smooth, error-free admission experience.",
  },
  {
    name: "Visa<br/>Support",
    profile_photo_url: "home/service1.jpg",
    description:
      "Get dedicated assistance with your visa application, from document preparation to interview guidance, ensuring a hassle-free process with student visa consultants in Mumbai.",
  },
  {
    name: "Scholarship<br/>Guidance",
    profile_photo_url: "home/service2.jpg",
    description:
      "Our experts at Skill Up Study Abroad Agency help you check eligibility and apply for the most suitable scholarships to fund your study abroad visa and admission services for Indian students.",
  },
  {
    name: "Pre-Departure<br/>Help",
    profile_photo_url: "home/service2.jpg",
    description:
      "Benefit from detailed briefing sessions with Skill Up Study Abroad Agency that equip you with essential information before you begin your overseas study journey.",
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Section className="relative py-10 sm:py-20 px-6  overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <Heading
          level={4}
          className="font-bold leading-tight text-center text-black"
        >
          Our Services
        </Heading>
        <Paragraph size="lg" className="mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum
          velit, deleniti voluptates nesciunt quam ut natus hic nobis
          consequatur nam sunt error assumenda nihil quasi aperiam dicta
          blanditiis porro.
        </Paragraph>
      </div>
      <div className=" mx-auto flex flex-col lg:flex-row lg:gap-10  mt-10">
        <div className="w-full h-[250px] md:h-[300px] lg:h-[350px]  flex flex-row gap-3 overflow-x-hidden scrollbar-hidden snap-x snap-mandatory px-2 md:px-0">
          {doctorProfile.map((doctor, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`shrink-0 md:shrink md:h-full border-(--teal) rounded-md border-2 relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer snap-start ${
                activeIndex === index ? "md:w-1/3" : "md:w-1/6"
              }`}
            >
              <Image
                src={`/${doctor.profile_photo_url}`}
                alt={doctor.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/70"
                aria-hidden="true"
              />
              <div
                className={`absolute bottom-0 left-0 w-full text-white p-6 transition-all duration-500 ease-in-out transform ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5 pointer-events-none"
                }`}
              >
                <Heading
                  level={6}
                  className=" font-semibold mb-2 transition-all duration-300"
                >
                  <span dangerouslySetInnerHTML={{ __html: doctor.name }} />
                </Heading>
                {/* <Span className="transition-all duration-300">
                  {doctor.description}
                </Span> */}
              </div>
              <span
                className={`absolute top-6 right-6 bg-(--teal)/70 rounded-full p-2 transition-all duration-500 ease-in-out transform backdrop-blur-md ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5 pointer-events-none"
                }`}
              >
                <MdArrowOutward className="text-white text-2xl" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
