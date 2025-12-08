"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

const Banner: React.FC<{ bannerTitle: string; bannerSubtitle: string; banner: string }> = ({ bannerTitle, bannerSubtitle, banner }) => {
  return (
    <section
      className="relative h-[200px] md:h-[250px] lg:h-[300px] w-full"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Image
          src={`${banner}`}
          alt="Students collaborating in a modern classroom with laptops"
          fill
          sizes="100vw"
          quality={80}
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <Section className="text-center text-(--white) w-full ">
          <div className="l">
            <Heading level={3} className="mb-4">
              {bannerTitle}
            </Heading>
            <Paragraph size="lg" className="italic font-medium tracking-wide">
              {bannerSubtitle}
            </Paragraph>
          </div>
        </Section>
      </div>
    </section>
  );
};

export default Banner;
