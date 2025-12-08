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
  { src: "/study-abroad/uk/university1.png", alt: "UK University" },
  { src: "/study-abroad/canada/university1.png", alt: "Canada University" },
  { src: "/study-abroad/usa/university1.png", alt: "US University" },
  { src: "/study-abroad/australia/university1.png", alt: "Australia University" },
  { src: "/study-abroad/ireland/university4.png", alt: "Ireland University" },
  { src: "/study-abroad/germany/university1.png", alt: "Germany University" },
  { src: "/study-abroad/italy/university3.png", alt: "Italy University" },
  { src: "/study-abroad/malta/university3.png", alt: "Malta University" },
  { src: "/study-abroad/finland/university1.png", alt: "Finland University" },
  { src: "/study-abroad/france/university1.png", alt: "France University" },
  { src: "/study-abroad/newzealand/university1.png", alt: "New Zealand University" },
  { src: "/study-abroad/netherland/university1.png", alt: "Netherlands University" },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20 h-full">
            <div className="flex flex-col justify-center h-full ">
              <Heading level={4} className="font-bold leading-tight ">
                Global Network of Universities
              </Heading>
              <Paragraph size="sm" className="mt-4 text-justify">
                Our partnering universities and institutions span key destinations across the globe, opening doors for students. Skill Up Study Abroad works closely with top academic institutions to offer wide-ranging choices and expert guidance. These trusted global alliances ensure world-class educational opportunities and personalized student support.
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
