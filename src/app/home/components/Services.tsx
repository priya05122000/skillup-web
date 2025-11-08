import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <Section className="bg-(--teal)">
      <div
        className="py-10 sm:py-20 h-screen "
        aria-label="About Us"
      >
        <div className="h-full ">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 h-full">
            <div className="flex flex-col justify-center h-full py-8 max-w-lg">
              <Heading
                level={4}
                className="font-bold leading-tight mt-4 text-white"
              >
                Navigate
              </Heading>
              <Paragraph size="lg" className="mt-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                cum velit, deleniti voluptates nesciunt quam ut natus hic nobis
                consequatur nam sunt error assumenda nihil quasi aperiam dicta
                blanditiis porro.
              </Paragraph>
            </div>

            <div className="relative flex flex-col items-center justify-center h-full ">
              <div className="grid grid-cols-2 gap-8 w-full h-full">
                <div className="flex flex-col gap-4 ">
                  <div className="relative">
                    <Image
                      src="/home/service1.jpg"
                      alt="Campus Student Life"
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover w-full h-64"
                    />
                    {/* <div className="absolute bottom-2 left-2  px-3 py-2 rounded font-semibold flex items-center gap-2">
                      Campus Student Life <MdArrowOutward />
                    </div> */}
                    <Paragraph
                      size="lg"
                      className=" text-white px-3 py-2 rounded font-bold flex justify-between items-center gap-2 "
                    >
                      <span>Campus Student Life</span> <MdArrowOutward />
                    </Paragraph>
                  </div>
                  <div className="relative ">
                    <Image
                      src="/home/service2.jpg"
                      alt="Arts & Cultural Program"
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover w-full h-64"
                    />
                    <Paragraph
                      size="lg"
                      className=" text-white px-3 py-2 rounded font-bold flex justify-between items-center gap-2 "
                    >
                      <span>Arts & Cultural Program</span> <MdArrowOutward />
                    </Paragraph>
                  </div>
                </div>
                <div className="flex flex-col gap-4  justify-end">
                  <div className="relative">
                    <Image
                      src="/home/service3.jpg"
                      alt="Recreations & Wellness"
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover w-full h-64"
                    />
                    <Paragraph
                      size="lg"
                      className=" text-white px-3 py-2 rounded font-bold flex justify-between items-center gap-2 "
                    >
                      <span>Recreations & Wellness</span> <MdArrowOutward />
                    </Paragraph>
                  </div>
                  <div className="relative">
                    <Image
                      src="/home/service4.jpg"
                      alt="Sports & Fitness"
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover w-full h-64"
                    />
                    <Paragraph
                      size="lg"
                      className=" text-white px-3 py-2 rounded font-bold flex justify-between items-center gap-2 "
                    >
                      <span>Sports & Fitness</span> <MdArrowOutward />
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
