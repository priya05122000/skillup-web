import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import AnimatedButton from "@/components/AnimatedButton";

interface ProgramInfo {
  title: string;
  description: string;
}

const programs: ProgramInfo[] = [
  {
    title: "Graduate Program",
    description: "Browse the Graduate Degrees.",
  },
  {
    title: "Undergraduate Program",
    description: "Browse the Undergraduate Degrees.",
  },
];

const ProgramList: React.FC = () => (
  <div className="my-8 max-w-sm w-80 px-3 py-1 border-l-4 border-(--orange)">
    <div className="border-b border-black/10 pb-3">
      <Paragraph size="xl" className="font-bold leading-tight ">
        {programs[0].title}
      </Paragraph>
      <Paragraph size="base" className="mt-2">
        {programs[0].description}
      </Paragraph>
    </div>
    <div className="pt-3">
      <Paragraph size="xl" className="font-bold leading-tight ">
        {programs[1].title}
      </Paragraph>
      <Paragraph size="base" className="mt-2">
        {programs[1].description}
      </Paragraph>
    </div>
  </div>
);

const AboutUs: React.FC = () => {
  return (
    <div className="pt-20 pb-10 sm:pt-20 sm:pb-20" aria-label="About Us">
      <Section className="h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 h-full mt-10 sm:mt-0 sm:px-10 xl:px-20">
          <div className="relative flex flex-col h-[60vh]  sm:h-full ">
            <div className="w-[80%] h-[80%]  lg:h-3/4 relative   overflow-hidden ">
              <div className="relative h-full">
                <Image
                  src="/home/about-us-1.png"
                  alt="Students high-fiving in front of university"
                  layout="responsive"
                  width={500}
                  height={500}
                  className="object-cover h-full! rounded-md"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] sm:w-[50%] lg:w-[70%] xl:w-[60%] sm:h-3/5 xl:h-3/5  bg-foreground p-2 rounded-md">
              <div className="relative h-full ">
                <Image
                  src="/home/about-us-2.jpg"
                  alt="Student talking with professor outside"
                  layout="responsive"
                  width={500}
                  height={350}  
                  className="object-cover h-full! rounded-md"
                />
              </div>
            </div>
            <div className="absolute right-0 top-0 z-30 w-[20%] ">
              <div className="flex items-center justify-center">
                <Heading
                  level={4}
                  className="text-transparent font-extrabold text-center tracking-widest"
                  style={{
                    transform: "rotate(180deg)",
                    writingMode: "vertical-rl",
                    WebkitTextStroke: "1px #000",
                  }}
                >
                  EST 2020
                </Heading>
              </div>
            </div>
          </div>
          <div className="h-full py-6">
            <Paragraph
              size="lg"
              className="font-bold leading-tight uppercase text-(--teal)"
            >
              About Skill Up Study Abroad Agency
            </Paragraph>
            <Heading level={4} className="font-bold leading-tight mt-2">
              Your Proven Ally in Overseas Education
            </Heading>
            <Paragraph size="lg" className="mt-4 text-justify">
              As the best study abroad consultancy in Mumbai, we provide
              comprehensive guidance from international education counseling to
              university admission. Our expert overseas education consultants
              assist you through every step, including visa processing and
              personalized scholarship support. Trust us for a seamless journey
              to your global academic aspirations with end-to-end support and
              care
            </Paragraph>
            <ProgramList />
            <AnimatedButton
              bgColor="bg-(--orange)"
              textColor="text-(--white)"
              hoverTextColor="group-hover:text-(--white)"
              skewColor="bg-(--teal)"
              icon={<MdArrowOutward />}
            >
              Free Consultation
            </AnimatedButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutUs;
