import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <div
      className="py-10 sm:py-20 h-[calc(100vh-80px)] bg-(--teal)"
      aria-label="About Us"
    >
      <Section className="h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2   gap-12 h-full">
          <div className=" h-full py-8">
            <Heading level={4} className="font-bold leading-tight mt-4">
              Navigate
            </Heading>
            <Paragraph size="base" className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum
              velit, deleniti voluptates nesciunt quam ut natus hic nobis
              consequatur nam sunt error assumenda nihil quasi aperiam dicta
              blanditiis porro.
            </Paragraph>
          </div>
          <div className="relative flex flex-col items-center justify-center h-full ">
            <div className="grid grid-cols-2 gap-4 w-full ">
              <div>
                <Image
                  src="/home/service1.jpg"
                  alt="Service 1"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div>
                <Image
                  src="/home/service2.jpg"
                  alt="Service 2"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <Image
                  src="/home/service3.jpg"
                  alt="Service 3"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div>
                <Image
                  src="/home/service4.jpg"
                  alt="Service 4"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
