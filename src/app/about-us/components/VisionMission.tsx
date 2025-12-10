"use client";

import React from "react";
import { BookOpen, GraduationCap, Info, } from "lucide-react";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";


type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const VisionMissionCard: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-white">
    {icon}
    <Heading level={6} className="font-semibold mb-4 text-center">{title}</Heading>
    <Paragraph size="sm" className=" text-center">{description}</Paragraph>
  </div>
);

const cards: CardProps[] = [
  {
    icon: <Info className="w-10 h-10 mb-4 text-(--orange)" />,
    title: "Our Vision",
    description:
      "We provide every student with the opportunity to study abroad while maintaining the highest standards in international education counseling. We are committed to unlocking human potential and fostering personal and global growth through quality education and cultural experiences.",
  },
  {
    icon: <BookOpen className="w-10 h-10 mb-4 text-(--orange)" />,
    title: "Our Mission",
    description:
      "Skill Up Study Abroad is committed to guiding students worldwide with comprehensive resources and personalized support. We ensure a smooth transition into international academics and life, empowering each student to achieve their educational goals confidently.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 mb-4 text-(--orange)" />,
    title: "Our Commitment",
    description:
      "Our commitment is to support each student through every phase of their overseas journey, from application to post-arrival, making the entire process effortless. With a hands-on, dedicated approach, we ensure every transition abroad is seamless—helping students achieve success and peace of mind.",
  },
];

const VisionMission: React.FC = () => (
  <section
    className="relative w-full bg-cover bg-center bg-no-repeat py-10 sm:py-20"
    style={{ backgroundImage: "url('/about-us/vision-mission.webp')" }}
  >
    <div className="absolute inset-0 bg-black/60"></div>
    <Section className="relative">
      <Heading level={4} className=" text-white text-center">Our Vision & Mission</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 mt-10">
        {cards.map((card) => (
          <VisionMissionCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  </section>
);

export default VisionMission;
