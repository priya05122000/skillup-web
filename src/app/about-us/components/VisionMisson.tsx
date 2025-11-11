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
  <div className="flex flex-col items-center">
    {icon}
    <Heading level={6} className="font-semibold mb-4">{title}</Heading>
    <Paragraph size="base" className="text-(--dark-gray)">{description}</Paragraph>
  </div>
);

const cards: CardProps[] = [
  {
    icon: <Info className="w-12 h-12 mb-4 text-(--teal)" />,
    title: "Our Vision",
    description:
      "To be a leading institution in providing quality education that empowers individuals to achieve their full potential and contribute positively to society.",
  },
  {
    icon: <BookOpen className="w-12 h-12 mb-4 text-(--teal)" />,
    title: "Our Mission",
    description:
      "To deliver innovative and inclusive educational programs that foster critical thinking, creativity, and lifelong learning, preparing students for success in a dynamic world.",
  },
  {
    icon: <GraduationCap className="w-12 h-12 mb-4 text-(--teal)" />,
    title: "Our Commitment",
    description:
      "We are committed to creating a supportive and engaging learning environment that nurtures personal growth, academic excellence, and community involvement.",
  },
];

const VisionMission: React.FC = () => (
  <section
    className="relative w-full bg-cover bg-center bg-no-repeat py-12"
    style={{ backgroundImage: "url('/about-us/university.jpg')" }}
  >
    <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
    <Section className="relative">
      <Heading level={4} className="mb-8">Our Vision & Mission</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <VisionMissionCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  </section>
);

export default VisionMission;
