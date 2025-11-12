"use client";


import React from "react";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import Section from "@/components/Section";
import Paragraph from "@/components/Paragraph";
import Span from "@/components/Span";
import Heading from "@/components/Heading";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";


type CardProps = {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  bgColor: string;
  iconBg: string;
  iconColor: string;
};

const cards: CardProps[] = [
  {
    icon: <BookOpen />,
    title: "Academic Resources",
    description: "We offer essential resources.",
    bgColor: "bg-(--bg-gray)",
    iconBg: "bg-(--teal)/20",
    iconColor: "text-(--orange)",
  },
  {
    icon: <GraduationCap />,
    title: "Aid & Scholarships",
    description: "Financial aid & scholarships.",
    bgColor: "bg-gray-50",
    iconBg: "bg-(--teal)/20",
    iconColor: "text-(--orange)",
  },
  {
    icon: <Users />,
    title: "Your Coaching Teacher",
    description: "Our teacher is committed to success.",
    bgColor: "bg-gray-50",
    iconBg: "bg-(--teal)/20",
    iconColor: "text-(--orange)",
  },
];

const InfoCard: React.FC<CardProps> = ({ icon, title, description, bgColor, iconBg, iconColor }) => (
  <div className={`flex items-start gap-4 p-5 ${bgColor} rounded-md shadow-sm hover:shadow-md transition`}>
    <div className={`p-3 ${iconBg} rounded-full`}>
      {React.isValidElement(icon)
        ? React.cloneElement(icon, { className: `${iconColor} w-6 h-6` })
        : icon}
    </div>
    <div>
      <Paragraph size="lg" className="font-semibold">
        {title}
      </Paragraph>
      <Span className="text-(--ice-gray) mt-1">{description}</Span>
    </div>
  </div>
);

const AcademicSupportSection: React.FC = () => (
  <section className="py-10 sm:py-20 ">
    <Section className="mb-10 sm:mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {cards.map((card, idx) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
    </Section>

    <Section>
      <div className="">
        <Paragraph size="lg" className="uppercase text-(--teal) font-bold leading-tight">
          Our Academic Supports
        </Paragraph>
        <Heading level={4} className="leading-tight mt-2">
          Founded In 1970, EduFord College Is A Global Leader In Education,
          Committed To Quality, Innovation, And Sustainability. We Continue
          Learning.
        </Heading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10 ">
        <div className="h-full">
          <Image
            src="/about-us/study.jpg"
            alt="Students studying on campus"
            width={600}
            height={400}
            className="rounded-md shadow-md w-full h-full object-cover"
          />
        </div>
        <div>
          <Heading level={6} className="font-semibold ">
            Innovation and Creativity
          </Heading>
          <Paragraph
            size="lg"
            className="text-(--ice-gray) leading-relaxed mt-4"
          >
            At EduFord College, innovation and creativity are at the heart of
            our educational philosophy. We strive to foster an environment
            where students are encouraged to think outside the box, explore
            new ideas, and push the boundaries of conventional learning.
            <br />
            <br />
            Our programs are designed to inspire originality and critical
            thinking, equipping students with the skills to innovate and
            create in their chosen fields through hands-on projects.
          </Paragraph>
          {/* <Link
            href="#"
            className="group inline-flex flex-col items-start uppercase gap-1 font-medium hover:text-(--indigo) mt-5"
          >
            <Paragraph size="base" className="inline-flex items-center">
              More About Us <MdArrowOutward size={20} />
            </Paragraph>
            <span className="block h-0.5 w-[95%] bg-black group-hover:bg-(--indigo) mt-1 origin-left transition-all duration-500 group-hover:opacity-0 group-hover:scale-x-0"></span>
          </Link> */}
          <button className="relative mt-8 overflow-hidden px-4 py-2 text-(--white) bg-(--orange) rounded-md cursor-pointer outline-none border-none group">
            <Paragraph
              size="base"
              className="relative font-semibold z-10 transition-colors duration-400 inline-flex items-center gap-2 group-hover:text-(--white)"
            >
              More About Us <MdArrowOutward />
            </Paragraph>
            <div className="absolute top-0 -left-[10%] w-[120%] h-full rounded-md bg-(--teal) skew-x-30 z-0 transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
          </button>
        </div>
      </div>
    </Section>
  </section>
);

export default AcademicSupportSection;
