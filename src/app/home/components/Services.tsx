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

const services = [
  {
    name: "Study</br/>Abroad<br/>Counselling",
    profile_photo_url: "services/study-abroad.jpg",
    description:
      "Get personalized guidance to choose the right program and university for your global education journey, ensuring every step aligns with your academic and career goals.",
  },
  {
    name: "Course<br/>Guidance",
    profile_photo_url: "services/course.jpg",
    description:
      "Get expert support to identify the best courses and secure scholarships that match your academic goals, making your study abroad journey affordable and successful.",
  },
  {
    name: "University/College<br/>Application<br/>Processing",
    profile_photo_url: "services/university.png",
    description:
      "Enjoy expert guidance with Skill Up Study Abroad Agency through every step of your university or college application for a smooth, error-free admission experience.",
  },
  {
    name: "Visa<br/>Support",
    profile_photo_url: "services/visa.jpg",
    description:
      "Get dedicated assistance with your visa application, from document preparation to interview guidance, ensuring a hassle-free process with student visa consultants in Mumbai.",
  },
  {
    name: "Scholarship<br/>Guidance",
    profile_photo_url: "services/scholarship.jpg",
    description:
      "Our experts at Skill Up Study Abroad Agency help you check eligibility and apply for the most suitable scholarships to fund your study abroad visa and admission services for Indian students.",
  },
  {
    name: "Pre-Departure<br/>Help",
    profile_photo_url: "services/pre-departure.jpg",
    description:
      "Benefit from detailed briefing sessions with Skill Up Study Abroad Agency that equip you with essential information before you begin your overseas study journey.",
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Section className="relative py-10 sm:py-20 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <Heading
          level={4}
          className="font-bold leading-tight text-center text-black"
        >
          Our Services
        </Heading>
        <Paragraph size="lg" className="mt-4 text-center">
          Skill Up Study Abroad Agency offers comprehensive overseas education
          services, guiding students seamlessly from university selection to
          admission. Our expert team specializes in student visa services,
          ensuring smooth processing and compliance with immigration
          requirements.
        </Paragraph>
      </div>
      <div className=" mx-auto flex flex-col lg:flex-row lg:gap-10  mt-10 xl:px-20">
        <div className="w-full h-[250px] sm:h-[270px] md:h-[300px] lg:h-[350px] flex flex-row gap-3 overflow-x-auto scrollbar-hidden snap-x snap-mandatory px-2 md:px-0">
          {services.map((doctor, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`shrink-0 sm:shrink-0 md:shrink md:h-full border-(--orange) rounded-md border relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer snap-start
                ${
                  activeIndex === index
                    ? "md:w-1/2 sm:w-2/3 w-4/5"
                    : "md:w-1/6 sm:w-1/3 w-3/5"
                }
                w-full max-w-[250px] sm:max-w-sm ${
                  index === 0 ? "ml-2 sm:ml-0" : ""
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
                className={`absolute bottom-0 left-0 w-full text-white p-4 sm:p-6 transition-all duration-500 ease-in-out transform ${
                  activeIndex === index ||
                  (typeof window !== "undefined" && window.innerWidth < 768)
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
              </div>
              <span
                className={`absolute top-4 sm:top-6 right-4 sm:right-6 bg-(--teal)/70 rounded-full p-2 transition-all duration-500 ease-in-out transform backdrop-blur-md ${
                  activeIndex === index ||
                  (typeof window !== "undefined" && window.innerWidth < 768)
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
