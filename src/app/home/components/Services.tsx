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
import AnimatedButton from "@/components/AnimatedButton";

const services = [
  {
    slug: "counselling-guidance",
    name: "Counselling &<br/>Guidance",
    profile_photo_url: "services/study-abroad.webp",
    description:
      "Get personalized guidance to choose the right program and university for your global education journey, ensuring every step aligns with your academic and career goals.",
  },
  {
    slug: "application-processing",
    name: "University/College<br/>Application<br/>Processing",
    profile_photo_url: "services/university.webp",
    description:
      "Enjoy expert guidance with Skill Up Study Abroad  through every step of your university or college application for a smooth, error-free admission experience.",
  },
  {
    slug: "visa-support",
    name: "Visa<br/>Support",
    profile_photo_url: "services/visa.webp",
    description:
      "Get dedicated assistance with your visa application, from document preparation to interview guidance, ensuring a hassle-free process with student visa consultants in Mumbai.",
  },
  {
    slug: "scholarship-guidance",
    name: "Scholarship<br/>Guidance",
    profile_photo_url: "services/scholarship.webp",
    description:
      "Our experts at Skill Up Study Abroad help you check eligibility and apply for the most suitable scholarships to fund your study abroad visa and admission services for Indian students.",
  },
  {
    slug: "loan",
    name: "Loan",
    profile_photo_url: "services/loan.webp",
    description:
      "Skill Up offers flexible study abroad loan options, guiding you through the application process to secure the financial support needed for your international education.",
  },
  {
    slug: "pre-departure-help",
    name: "Pre-Departure<br/>Help",
    profile_photo_url: "services/departure.webp",
    description:
      "Benefit from detailed briefing sessions with Skill Up Study Abroad that equip you with essential information before you begin your overseas study journey.",
  },
  {
    slug: "accommodation",
    name: "Accommodation",
    profile_photo_url: "services/accomodation.webp",
    description:
      "Find the perfect housing solution with Skill Up Study Abroad, offering assistance in securing safe and comfortable accommodation options that suit your needs while studying abroad.",
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section className="relative py-10 sm:py-20 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <Heading
          level={4}
          className="font-bold leading-tight text-center text-black"
        >
          Our Services
        </Heading>
        <Paragraph size="sm" className="mt-4 text-center">
          Skill Up Study Abroad offers comprehensive overseas education
          services, guiding students seamlessly from university selection to
          admission. Our expert team specializes in student visa services,
          ensuring smooth processing and compliance with immigration
          requirements.
        </Paragraph>
      </div>
      <div className=" mx-auto flex flex-col lg:flex-row lg:gap-10  mt-10 xl:px-20">
        <div className="w-full h-[250px] sm:h-[270px] md:h-[300px] lg:h-[350px] flex flex-row gap-3 overflow-x-auto scrollbar-hidden snap-x snap-mandatory px-2 md:px-0">
          {services.map((service, index) => (
            <Link
              href={`/services#${service.slug}`}
              key={index}
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
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
                src={`/${service.profile_photo_url}`}
                alt={service.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/70"
                aria-hidden="true"
              />
              {/* Always show name on mobile, else use activeIndex */}
              <div
                className={`absolute bottom-0 left-0 w-full text-white p-4 sm:p-6 transition-all duration-500 ease-in-out transform ${
                  isMobile || activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5 pointer-events-none"
                }`}
              >
                <Heading
                  level={6}
                  className=" font-semibold mb-2 transition-all duration-300"
                >
                  <span dangerouslySetInnerHTML={{ __html: service.name }} />
                </Heading>
              </div>
              <span
                className={`absolute top-4 sm:top-6 right-4 sm:right-6 bg-(--orange) rounded-full p-2 transition-all duration-500 ease-in-out transform backdrop-blur-md ${
                  isMobile || activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5 pointer-events-none"
                }`}
              >
                <MdArrowOutward className="text-white text-2xl" />
              </span>
            </Link>
          ))}
        </div>
      </div>
      {/* View All Button */}
      <div className="w-full flex justify-end mt-8 xl:px-20">
        <Link href="/services">
          <AnimatedButton
            bgColor="bg-(--orange)"
            textColor="text-(--white)"
            hoverTextColor="group-hover:text-(--white)"
            skewColor="bg-(--teal)"
            icon={<MdArrowOutward />}
          >
            View All
          </AnimatedButton>
        </Link>
      </div>
    </Section>
  );
};

export default Services;
