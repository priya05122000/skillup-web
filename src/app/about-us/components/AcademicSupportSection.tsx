"use client";

import React from "react";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import Section from "@/components/Section";
import Paragraph from "@/components/Paragraph";
import Span from "@/components/Span";
import Heading from "@/components/Heading";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const AcademicSupportSection: React.FC = () => {
  return (
    <Section className="w-full py-12 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-start gap-4 p-5 bg-(--bg-gray) rounded-xl shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-(--bg-indigo) rounded-full">
            <BookOpen className="text-(--indigo) w-6 h-6" />
          </div>
          <div>
            <Paragraph size="lg" className="font-semibold">
              Academic Resources
            </Paragraph>
            <Span className="text-(--ice-gray) mt-1">
              We offer essential resources.
            </Span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-(--light-yellow) rounded-full">
            <GraduationCap className="text-(--gold) w-6 h-6" />
          </div>
          <div>
            <Paragraph size="lg" className="font-semibold">
              Aid & Scholarships
            </Paragraph>
            <Span className="text-(--ice-gray) mt-1">
              Financial aid & scholarships.
            </Span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-(--light-orange) rounded-full">
            <Users className="text-(--red) w-6 h-6" />
          </div>
          <div>
            <Paragraph size="lg" className="font-semibold">
              Your Coaching Teacher
            </Paragraph>
            <Span className="text-(--ice-gray) mt-1">
              Our teacher is committed to success.
            </Span>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-4">
        <Paragraph size="base" className="italic text-(--ice-gray) mb-2">Our Academic Supports</Paragraph>
        <Heading level={6} className="leading-snug mb-4">
          Founded In 1970, EduFord College Is A Global Leader In Education,
          Committed To Quality, Innovation, And Sustainability. We Continue
          Learning.
        </Heading>
      </div>

      {/* === About Section === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="">
          <img
            src="/about-us/study.jpg"
            alt="Students studying on campus"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        <div className="">
          <Paragraph size="xl" className="font-semibold mb-3">
            Innovation and Creativity
          </Paragraph>
          <Paragraph size="base" className="text-(--ice-gray)leading-relaxed mb-4">
            At EduFord College, innovation and creativity are at the heart of
            our educational philosophy. We strive to foster an environment where
            students are encouraged to think outside the box, explore new ideas,
            and push the boundaries of conventional learning.
            <br />
            <br />
            Our programs are designed to inspire originality and critical
            thinking, equipping students with the skills to innovate and create
            in their chosen fields through hands-on projects.
          </Paragraph>
          <Link
            href="#"
            className="group inline-flex flex-col items-start uppercase gap-1 font-medium hover:text-(--indigo) mt-5"
          >
            <Paragraph size="base" className="inline-flex items-center">
              More About Us <MdArrowOutward size={20} />
            </Paragraph>
            <span
              className="block h-0.5 w-[95%] bg-black group-hover:bg-(--indigo) mt-1 origin-left transition-all duration-500 group-hover:opacity-0 group-hover:scale-x-0"
            ></span>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default AcademicSupportSection;
