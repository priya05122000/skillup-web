import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface ServiceItem {
  src: string;
  alt: string;
  label: string;
}

const serviceItems: ServiceItem[] = [
  {
    src: "/home/service1.jpg",
    alt: "Campus Student Life",
    label: "Campus Student Life",
  },
  {
    src: "/home/service2.jpg",
    alt: "Arts & Cultural Program",
    label: "Arts & Cultural Program",
  },
  {
    src: "/home/service3.jpg",
    alt: "Recreations & Wellness",
    label: "Recreations & Wellness",
  },
  {
    src: "/home/service4.jpg",
    alt: "Sports & Fitness",
    label: "Sports & Fitness",
  },
];

const ServiceCard: React.FC<ServiceItem> = ({ src, alt, label }) => (
  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
    <Image
      src={src}
      alt={alt}
      width={300}
      height={200}
      className="rounded-lg object-cover w-full h-40 sm:h-56 transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-2 text-center">
      {label}
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <Section className="bg-(--teal)">
      <div className="py-10 sm:py-20" aria-label="About Us">
        <div className="h-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 h-full">
            <div className="flex flex-col justify-center h-full lg:py-8 max-w-lg">
              <Heading
                level={4}
                className="font-bold leading-tight lg:mt-4 text-white"
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
            <div className="relative flex flex-col items-center justify-center h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 w-full h-full">
                <div className="flex flex-col gap-4">
                  <ServiceCard {...serviceItems[0]} />
                  <ServiceCard {...serviceItems[1]} />
                </div>
                <div className="flex flex-col gap-4 mt-4 sm:mt-10">
                  <ServiceCard {...serviceItems[2]} />
                  <ServiceCard {...serviceItems[3]} />
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
