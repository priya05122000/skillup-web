"use client";

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
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
          About Us
        </h1>
        <p className="text-base md:text-lg italic font-medium tracking-wide">
          Empowering Wide Range of Learning Opportunities
        </p>
      </div>
    </section>
  );
};

export default Banner;
