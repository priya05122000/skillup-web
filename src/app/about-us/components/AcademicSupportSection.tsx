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
    title: "Educational Materials",
    description: "We provide top-notch study materials for students.",
    bgColor: "bg-(--bg-gray)",
    iconBg: "bg-(--teal)/20",
    iconColor: "text-(--orange)",
  },
  {
    icon: <GraduationCap />,
    title: "Financial Assistance & Grant",
    description:
      "Grants and financial aid offer essential support to students.",
    bgColor: "bg-gray-50",
    iconBg: "bg-(--teal)/20",
    iconColor: "text-(--orange)",
  },
  {
    icon: <Users />,
    title: "Academic Coach",
    description:
      "Our personalized guidance helps students achieve academic success.",
    bgColor: "bg-gray-50",
    iconBg: "bg-(--teal)/20",
    iconColor: "text-(--orange)",
  },
];

const InfoCard: React.FC<CardProps> = ({
  icon,
  title,
  description,
  bgColor,
  iconBg,
  iconColor,
}) => (
  <div
    className={`flex items-start gap-4 p-5 ${bgColor} rounded-md shadow-sm hover:shadow-md transition`}
  >
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


    <Section>
      <div className="">
        <Paragraph
          size="lg"
          className="uppercase text-(--teal) font-bold leading-tight"
        >
          WHO WE ARE
        </Paragraph>
        <Heading level={4} className="leading-tight mt-2">
          Skill Up Study Abroad : Guiding Success in Overseas Education
          Consultancy
        </Heading>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 ">
        <div className="h-full w-full sm:h-[400px] lg:h-[450px]">
          <Image
            src="/about-us/study.jpeg"
            alt="Students studying on campus"
            width={1600}
            height={800}
            className="rounded-md shadow-md w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <Heading level={6} className="font-semibold ">
            Decade of Expertise in International Academic Coaching
          </Heading>
          <Paragraph
            size="sm"
            className="text-(--ice-gray) leading-relaxed mt-4"
          >
            Skill Up Study Abroad has established itself as a leading
            overseas education consultancy, leveraging ten years of hands-on
            experience to guide students toward their academic dreams. Our
            comprehensive consultancy services are tailored to individual
            aspirations, providing up-to-date information on top universities,
            courses, scholarships, and visa processes. With an expert team
            well-versed in global education systems, Skill Up ensures a smooth
            transition, from initial counseling and course selection to
            admissions, accommodation, and ongoing support. This depth of
            knowledge not only saves time but also protects students from common
            pitfalls and costly missteps during their journey abroad..
            <br />
            <br />
            The Consultancy's personalized coaching approach has benefited thousands,
            focusing on holistic student development, including academics,
            career planning, and personal growth. Skill Up Study Abroad
            is committed to building lasting success through constant
            mentorship, post-arrival support, and financial guidance, including
            access to grants and scholarships.
          </Paragraph>
          {/* <Link
            href="#"
            className="group inline-flex flex-col items-start uppercase gap-1 font-medium hover:text-(--indigo) mt-5"
          >
            <Paragraph size="sm" className="inline-flex items-center">
              More About Us <MdArrowOutward size={20} />
            </Paragraph>
            <span className="block h-0.5 w-[95%] bg-black group-hover:bg-(--indigo) mt-1 origin-left transition-all duration-500 group-hover:opacity-0 group-hover:scale-x-0"></span>
          </Link> */}
          {/* <button className="relative mt-8 overflow-hidden px-4 py-2 text-(--white) bg-(--orange) rounded-md cursor-pointer outline-none border-none group">
            <Paragraph
              size="sm"
              className="relative font-semibold z-10 transition-colors duration-400 inline-flex items-center gap-2 group-hover:text-(--white)"
            >
              More About Us <MdArrowOutward />
            </Paragraph>
            <div className="absolute top-0 -left-[10%] w-[120%] h-full rounded-md bg-(--teal) skew-x-30 z-0 transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
          </button> */}
        </div>
      </div>
    </Section>

    {/* <Section className="mt-10 sm:mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {cards.map((card, idx) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
    </Section> */}
  </section>
);

export default AcademicSupportSection;