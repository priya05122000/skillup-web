"use client";


import React from "react";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import Section from "@/components/Section";
import Paragraph from "@/components/Paragraph";
import Span from "@/components/Span";
import Heading from "@/components/Heading";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";


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
    iconBg: "bg-(--bg-indigo)",
    iconColor: "text-(--indigo)",
  },
  {
    icon: <GraduationCap />,
    title: "Aid & Scholarships",
    description: "Financial aid & scholarships.",
    bgColor: "bg-gray-50",
    iconBg: "bg-(--light-yellow)",
    iconColor: "text-(--gold)",
  },
  {
    icon: <Users />,
    title: "Your Coaching Teacher",
    description: "Our teacher is committed to success.",
    bgColor: "bg-gray-50",
    iconBg: "bg-(--light-orange)",
    iconColor: "text-(--red)",
  },
];

const InfoCard: React.FC<CardProps> = ({ icon, title, description, bgColor, iconBg, iconColor }) => (
  <div className={`flex items-start gap-4 p-5 ${bgColor} rounded-xl shadow-sm hover:shadow-md transition`}>
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
  <section className="pt-12">
    <section className="px-6 md:px-8 xl:px-0 xl:max-w-7xl xl:mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
    </section>

    <Section>
      <div className="pt-8 pb-4">
        <Paragraph size="base" className="italic text-(--ice-gray) mb-2">
          Our Academic Supports
        </Paragraph>
        <Heading level={6} className="leading-snug mb-4">
          Founded In 1970, EduFord College Is A Global Leader In Education,
          Committed To Quality, Innovation, And Sustainability. We Continue
          Learning.
        </Heading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/about-us/study.jpg"
            alt="Students studying on campus"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
        <div>
          <Paragraph size="xl" className="font-semibold mb-3">
            Innovation and Creativity
          </Paragraph>
          <Paragraph
            size="base"
            className="text-(--ice-gray) leading-relaxed mb-4"
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
          <Link
            href="#"
            className="group inline-flex flex-col items-start uppercase gap-1 font-medium hover:text-(--indigo) mt-5"
          >
            <Paragraph size="base" className="inline-flex items-center">
              More About Us <MdArrowOutward size={20} />
            </Paragraph>
            <span className="block h-0.5 w-[95%] bg-black group-hover:bg-(--indigo) mt-1 origin-left transition-all duration-500 group-hover:opacity-0 group-hover:scale-x-0"></span>
          </Link>
        </div>
      </div>
    </Section>
  </section>
);

export default AcademicSupportSection;
