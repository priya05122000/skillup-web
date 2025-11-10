import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import { MdArrowOutward, MdOutlineWhatsapp } from "react-icons/md";
import React from "react";

interface HeroButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  hoverTextColor?: string;
  skewColor?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  children,
  bgColor = "bg-(--white)",
  hoverTextColor = "group-hover:text-(--teal)",
  skewColor = "bg-(--teal)",
  icon,
  onClick,
}) => (
  <button
    className={`relative overflow-hidden px-4 py-3 text-(--white) ${bgColor} rounded-md cursor-pointer outline-none border-none group`}
    onClick={onClick}
  >
    <Paragraph
      size="base"
      className={`relative font-semibold z-10 transition-colors duration-400 inline-flex items-center gap-2 ${hoverTextColor}`}
    >
      {children} {icon}
    </Paragraph>
    <div
      className={`absolute top-0 -left-[10%] w-[120%] h-full ${skewColor} skew-x-30 z-0 transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full`}
    />
  </button>
);

const heroButtons = [
  {
    children: 'Apply Now',
    icon: <MdArrowOutward />,
  },
  {
    children: 'Chat with Us',
    icon: <MdOutlineWhatsapp />,
  },
  {
    children: 'Brochure',
    icon: <MdArrowOutward />,
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[calc(90vh-80px)] w-full mb-20" aria-label="Hero">
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
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black/70" aria-hidden="true" />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <Section className="text-left text-(--white) w-full ">
          <div className="max-w-2xl">
            <Paragraph size="lg" className="font-bold leading-tight uppercase">
              Knowledge is Power
            </Paragraph>
            <Heading level={4} className="font-bold leading-tight mt-4">
              <span className="bg-(--teal)">Skill Up Academy</span> - Level up your skills with hands-on courses
            </Heading>
            <Paragraph size="lg" className="mt-4 text-(--white)/70">
              Practical, project-based lessons and mentorship to help you build real-world experience.
            </Paragraph>
            <div className="my-8 flex gap-4">
              <HeroButton
                bgColor="bg-(--white)"
                hoverTextColor="group-hover:text-(--teal)"
                skewColor="bg-(--orange)"
                icon={<MdArrowOutward />}
              >
                View Our Program
              </HeroButton>
            </div>
          </div>
        </Section>
      </div>
      <div className="absolute max-w-xl lg:max-w-2xl z-50 bg-(--white)/10 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-auto w-full px-8 py-8 rounded-md border border-(--white)/10">
        <div className="flex  flex-col sm:flex-row justify-evenly z-50">
          {heroButtons.map((btn, idx) => (
            <HeroButton key={idx} icon={btn.icon}>{btn.children}</HeroButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
