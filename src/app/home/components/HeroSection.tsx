import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import { MdArrowOutward, MdOutlineWhatsapp } from "react-icons/md";
import React from "react";
import AnimatedButton from "@/components/AnimatedButton";

const heroButtons = [
  {
    children: "Apply Now",
    icon: <MdArrowOutward />,
    bgColor: "bg-(--white)",
    textColor: "text-(--white)",
    hoverTextColor: "group-hover:text-(--teal)",
    skewColor: "bg-(--teal)",
  },
  {
    children: "Chat with Us",
    icon: <MdOutlineWhatsapp />,
    bgColor: "bg-(--white)",
    textColor: "text-(--white)",
    hoverTextColor: "group-hover:text-(--teal)",
    skewColor: "bg-(--teal)",
  },
  {
    children: "Brochure",
    icon: <MdArrowOutward />,
    bgColor: "bg-(--white)",
    textColor: "text-(--white)",
    hoverTextColor: "group-hover:text-(--teal)",
    skewColor: "bg-(--teal)",
  },
];

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen sm:h-[calc(90vh-80px)] w-full mb-20"
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
          className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black/70"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <Section className="text-left text-(--white) w-full ">
          <div className="max-w-lg lg:max-w-2xl">
            <Paragraph size="lg" className="font-bold leading-tight uppercase">
              Knowledge is Power
            </Paragraph>
            <Heading level={4} className="font-bold leading-tight mt-4">
              <span className="bg-(--teal)">Skill Up Academy</span> - Level up
              your skills with hands-on courses
            </Heading>
            <Paragraph size="lg" className="mt-4 text-(--white)/70">
              Practical, project-based lessons and mentorship to help you build
              real-world experience.
            </Paragraph>
            <div className="my-8 flex gap-4">
              <AnimatedButton
                bgColor="bg-(--white)"
                textColor="text-(--white)"
                hoverTextColor="group-hover:text-(--teal)"
                skewColor="bg-(--orange)"
                icon={<MdArrowOutward />}
                className="px-4 py-3"
              >
                View Our Program
              </AnimatedButton>
            </div>
          </div>
        </Section>
      </div>
      <div className="absolute max-w-72 sm:max-w-xl lg:max-w-2xl z-50 bg-(--white)/10 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-auto w-full px-8 py-8 rounded-md border border-(--white)/10 shadow-lg">
        <div className="flex  flex-col gap-4 sm:flex-row justify-evenly z-50">
          {heroButtons.map((btn, idx) => (
            <AnimatedButton
              key={idx}
              bgColor={btn.bgColor}
              textColor={btn.textColor}
              hoverTextColor={btn.hoverTextColor}
              skewColor={btn.skewColor}
              icon={btn.icon}
              className="px-4 py-3"
            >
              {btn.children}
            </AnimatedButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
