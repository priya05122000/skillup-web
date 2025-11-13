import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

interface PartnerItem {
  src: string;
  alt: string;
}

const partnerItems: PartnerItem[] = [
  { src: "/home/partner1.png", alt: "Partner 1" },
  { src: "/home/partner2.png", alt: "Partner 2" },
  { src: "/home/partner3.png", alt: "Partner 3" },
  { src: "/home/partner4.png", alt: "Partner 4" },
  { src: "/home/partner5.png", alt: "Partner 5" },
  { src: "/home/partner6.png", alt: "Partner 6" },
  { src: "/home/partner7.png", alt: "Partner 7" },
  { src: "/home/partner8.png", alt: "Partner 8" },
  { src: "/home/partner9.png", alt: "Partner 9" },
  { src: "/home/partner10.png", alt: "Partner 10" },
  { src: "/home/partner11.png", alt: "Partner 11" },
  { src: "/home/partner12.png", alt: "Partner 12" },
];

const PartnerLogo: React.FC<PartnerItem> = ({ src, alt }) => (
  <div className="flex items-center cursor-pointer group justify-center h-20 p-2 border border-(--orange) rounded-md">
    <Image
      src={src}
      alt={alt}
      width={120}
      height={80}
      className="object-contain h-full w-28 transition-transform duration-300 group-hover:scale-105"
    />
  </div>
);

const Partners: React.FC = () => {
  return (
    <Section>
      <div className="py-10 sm:py-20 sm:px-10 xl:px-20" aria-label="About Us">
        <div className="h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">
            <div className="flex flex-col justify-center h-full ">
              <Heading level={4} className="font-bold leading-tight ">
                Our <span className="text-(--teal)">Top Ranked</span> Partners
              </Heading>
              <Paragraph size="lg" className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                cum velit, deleniti voluptates nesciunt quam ut natus hic nobis
                consequatur nam sunt error assumenda nihil quasi aperiam dicta
                blanditiis porro.
              </Paragraph>
            </div>
            <div className="relative flex flex-col items-center justify-center h-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full ">
                {partnerItems.map((item, idx) => (
                  <PartnerLogo key={idx} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Partners;
