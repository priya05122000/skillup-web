import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

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
      <Paragraph size="xl" className="font-bold leading-tight ">{programs[0].title}</Paragraph>
      <Paragraph size="base" className="mt-2">{programs[0].description}</Paragraph>
    </div>
    <div className="pt-3">
      <Paragraph size="xl" className="font-bold leading-tight ">{programs[1].title}</Paragraph>
      <Paragraph size="base" className="mt-2">{programs[1].description}</Paragraph>
    </div>
  </div>
);

interface AboutUsImage {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const AboutUsImageBlock: React.FC<AboutUsImage> = ({ src, alt, className, style }) => (
  <div className={className} style={style}>
    <div className="relative">
      <Image src={src} alt={alt} layout="responsive" width={500} height={350} className="object-cover" />
    </div>
  </div>
);

const AboutUs: React.FC = () => {
  return (
    <div className="py-10 sm:py-20 " aria-label="About Us">
      <Section className="h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 h-full">
          <div className="relative flex flex-col items-center justify-center h-full ">
            <AboutUsImageBlock
              src="/home/aboutus-1.jpg"
              alt="Students high-fiving in front of university"
              className="absolute top-0 left-0 w-[85%] max-w-lg z-10"
            />
            <AboutUsImageBlock
              src="/home/aboutus-2.jpg"
              alt="Student talking with professor outside"
              className="absolute bottom-0 border-t-8 border-l-8 border-foreground right-0 w-[60%] max-w-md overflow-hidden z-10"
            />
            {/* Circular university logo */}
            {/* <div className="absolute left-8 bottom-8 w-32 h-32 flex items-center justify-center z-20"></div> */}
            {/* Vertical EST 1995 text */}
            <div className="absolute right-0 top-0 z-30 w-[15%] py-3">
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
                  EST 1995
                </Heading>
              </div>
            </div>
          </div>
          <div className="h-full py-6">
            <Paragraph size="lg" className="font-bold leading-tight uppercase text-(--teal)">About Us</Paragraph>
            <Heading level={4} className="font-bold leading-tight mt-4">
              The Larget & Most Diverse Universties in the United Emirates
            </Heading>
            <Paragraph size="lg" className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum velit, deleniti voluptates nesciunt quam ut natus hic nobis consequatur nam sunt error assumenda nihil quasi aperiam dicta blanditiis porro.
            </Paragraph>
            <ProgramList />
            <button className="relative overflow-hidden px-4 py-2 text-(--white) bg-(--orange) rounded-md cursor-pointer outline-none border-none group">
              <Paragraph
                size="base"
                className="relative font-semibold z-10 transition-colors duration-400 inline-flex items-center gap-2 group-hover:text-(--white)"
              >
                Free Consultation <MdArrowOutward />
              </Paragraph>
              <div className="absolute top-0 -left-[10%] w-[120%] h-full rounded-md bg-(--teal) skew-x-30 z-0 transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutUs;
