import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section
      className="relative h-[50vh] w-full"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Image
          src="/home/hero-image.jpg"
          alt="Students collaborating in a modern classroom with laptops"
          fill
          sizes="100vw"
          quality={80}
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-black/50"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <Section className="text-center text-(--white) w-full ">
          <div className="l">

            <Heading level={4} className="font-bold leading-tight mt-4">
              About Us
            </Heading>
            <Paragraph size="lg" className="mt-4 text-(--white)/70">
              Empowering Wide Range of Learning Opportunities
            </Paragraph>

          </div>
        </Section>
      </div>

    </section>
  );
};

export default Banner;
