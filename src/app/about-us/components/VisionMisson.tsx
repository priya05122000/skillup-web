"use client";

import React from "react";
import { BookOpen, GraduationCap, Info, } from "lucide-react";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

const VisionMission: React.FC = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: "url('/about-us/university.jpg')", // replace with your image
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
      <Section className="relative">
        <Heading level={4} className="mb-8">Our Vision & Mission</Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
                <Info className="w-12 h-12 mb-4 text-(--teal)" />
                <Heading level={6} className="font-semibold mb-4">Our Vision</Heading>
                <Paragraph size="base" className="text-(--dark-gray)">
                    To be a leading institution in providing quality education that empowers individuals to achieve their full potential and contribute positively to society.
                </Paragraph>
            </div>
            <div className="flex flex-col items-center">
                <BookOpen className="w-12 h-12 mb-4 text-(--teal)" />
                <Heading level={6} className="font-semibold mb-4">Our Mission</Heading>
                <Paragraph size="base" className="text-(--dark-gray)">
                    To deliver innovative and inclusive educational programs that foster critical thinking, creativity, and lifelong learning, preparing students for success in a dynamic world.
                </Paragraph>
            </div>
            <div className="flex flex-col items-center">
                <GraduationCap className="w-12 h-12 mb-4 text-(--teal)" />
                <Heading level={6} className="font-semibold mb-4">Our Commitment</Heading>
                <Paragraph size="base" className="text-(--dark-gray)">
                    We are committed to creating a supportive and engaging learning environment that nurtures personal growth, academic excellence, and community involvement.
                </Paragraph>
            </div>
        </div>
      </Section>
    </section>
  );
};

export default VisionMission;
