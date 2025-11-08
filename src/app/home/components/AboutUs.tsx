import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="py-10 sm:py-20  " aria-label="About Us">
      <Section className="h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]   gap-14 h-full">
          <div className="relative flex flex-col items-center justify-center h-full ">
            {/* Top left image */}
            <div className="absolute top-0 left-0 w-[85%] max-w-lg z-10 ">
              <div className="relative">
                <Image
                  src="/home/aboutus-1.jpg"
                  alt="Students high-fiving in front of university"
                  layout="responsive"
                  width={500}
                  height={350}
                  className="object-cover"
                />
                {/* <div className="absolute w-40 h-40 translate-x-1/2  translate-y-1/2 border border-black bottom-0 rounded-full -z-1"/> */}
              </div>
            </div>
            {/* Bottom right image */}
            <div className="absolute bottom-0 border-t-8 border-l-8 border-(--foreground) right-0 w-[60%] max-w-md overflow-hidden z-10">
              <Image
                src="/home/aboutus-2.jpg"
                alt="Student talking with professor outside"
                layout="responsive"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
            {/* Circular university logo */}
            <div className="absolute left-8 bottom-8 w-32 h-32 flex items-center justify-center z-20"></div>
            {/* Vertical EST 1995 text */}
            <div className="absolute right-0 top-0  z-30 w-[15%] py-3  ">
              <div className="flex items-center justify-center">
                <Heading
                  level={4}
                  className="text-transparent font-extrabold text-center tracking-widest "
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
          <div className=" h-full py-6">
            <Paragraph
              size="lg"
              className="font-bold leading-tight uppercase text-(--teal)"
            >
              About Us
            </Paragraph>
            <Heading level={4} className="font-bold leading-tight mt-4">
              The Larget & Most Diverse Universties in the United Emirates
            </Heading>
            <Paragraph size="base" className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum
              velit, deleniti voluptates nesciunt quam ut natus hic nobis
              consequatur nam sunt error assumenda nihil quasi aperiam dicta
              blanditiis porro.
            </Paragraph>
            <div className="my-8 max-w-sm w-80 px-3 py-1 border-l-4 border-(--orange)">
              <div className="border-b border-black/10 pb-3">
                <Paragraph size="xl" className="font-bold leading-tight ">
                  Graduate Program
                </Paragraph>
                <Paragraph size="base" className="mt-2">
                  Browse the Graduate Degrees.
                </Paragraph>
              </div>
              <div className="pt-3">
                <Paragraph size="xl" className="font-bold leading-tight ">
                  Undergraduate Program
                </Paragraph>
                <Paragraph size="base" className="mt-2">
                  Browse the Undergraduate Degrees.
                </Paragraph>
              </div>
            </div>
            <button className=" relative overflow-hidden px-4 py-2  text-(--white)  bg-(--orange) rounded-md cursor-pointer outline-none border-none group">
              <Paragraph
                size="base"
                className={`relative font-semibold z-10  transition-colors duration-400 inline-flex items-center gap-2 group-hover:text-(--white)`}
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
