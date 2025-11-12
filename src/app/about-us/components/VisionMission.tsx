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
    <Paragraph size="base" className=" text-center">{description}</Paragraph>
  </div>
);

const cards: CardProps[] = [
  {
    icon: <Info className="w-10 h-10 mb-4 text-(--orange)" />,
    title: "Our Vision",
    description:
      "To be a leading institution in providing quality education that empowers individuals to achieve their full potential and contribute positively to society.",
  },
  {
    icon: <BookOpen className="w-10 h-10 mb-4 text-(--orange)" />,
    title: "Our Mission",
    description:
      "To deliver innovative and inclusive educational programs that foster critical thinking, creativity, and lifelong learning, preparing students for success in a dynamic world.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 mb-4 text-(--orange)" />,
    title: "Our Commitment",
    description:
      "We are committed to creating a supportive and engaging learning environment that nurtures personal growth, academic excellence, and community involvement.",
  },
];

const VisionMission: React.FC = () => (
  <section
    className="relative w-full bg-cover bg-center bg-no-repeat py-10 sm:py-20"
    style={{ backgroundImage: "url('/home/hero-image.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
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
