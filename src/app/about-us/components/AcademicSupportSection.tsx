"use client";

import React from "react";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import Section from "@/components/Section";

const AcademicSupportSection: React.FC = () => {
  return (
    <Section className="w-full bg-white py-12 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-indigo-100 rounded-full">
            <BookOpen className="text-indigo-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Academic Resources
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              We offer essential resources.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-yellow-100 rounded-full">
            <GraduationCap className="text-yellow-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Aid & Scholarships
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Financial aid & scholarships.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-orange-100 rounded-full">
            <Users className="text-orange-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Your Coaching Teacher
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Our teacher is committed to success.
            </p>
          </div>
        </div>
      </div>

      <div className="py-8">
        <p className="italic text-gray-700 mb-2">Our Academic Supports</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
          Founded In 1970, EduFord College Is A Global Leader In Education,
          Committed To Quality, Innovation, And Sustainability. We Continue
          Learning.
        </h2>
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
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Innovation and Creativity
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            At EduFord College, innovation and creativity are at the heart of
            our educational philosophy. We strive to foster an environment where
            students are encouraged to think outside the box, explore new ideas,
            and push the boundaries of conventional learning.
            <br />
            <br />
            Our programs are designed to inspire originality and critical
            thinking, equipping students with the skills to innovate and create
            in their chosen fields through hands-on projects.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
          >
            More About Us
            <span className="text-sm">↗</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default AcademicSupportSection;
