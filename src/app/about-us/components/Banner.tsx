"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] xl:h-[70vh] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
        style={{
          backgroundImage:
            "url('/about-us/university.jpg')",
        }}
      ></div>

      {/* Overlay Text */}
      <div className="relative text-center text-(--white) px-4">
        <Heading level={3} className="mb-4">
          About Us
        </Heading>
        <Paragraph size="lg" className="italic font-medium tracking-wide">
          Empowering Wide Range of Learning Opportunities
        </Paragraph>
      </div>
    </section>
  );
};

export default Banner;
