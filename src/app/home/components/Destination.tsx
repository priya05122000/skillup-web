import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DestinationItem {
  src: string;
  alt: string;
  label: string;
  desc?: string;
}

const destinations: DestinationItem[] = [
  {
    src: "/study-abroad/canada/canada.jpeg",
    alt: "MBBS Programs",
    label: "Canada",
    desc: "World-class education and  diverse cultural experiences.",
  },
  {
    src: "/study-abroad/ireland/ireland.jpeg",
    alt: "Nursing Courses",
    label: "Ireland",
    desc: "Vibrant culture and excellent global career opportunities.",
  },
  {
    src: "/study-abroad/uk/uk.jpeg",
    alt: "Pharmacy Studies",
    label: "UK",
    desc: "Diverse course options and strong student support. ",
  },
  {
    src: "/study-abroad/australia/australia.jpeg",
    alt: "Dental Programs",
    label: "Australia",
    desc: "Vibrant multicultural experiences for international students.",
  },
];

const DestinationCard: React.FC<DestinationItem> = ({
  src,
  alt,
  label,
  desc,
}) => (
  <div className="relative group cursor-pointer rounded-md">
    <Image
      src={src}
      alt={alt}
      width={300}
      height={200}
      className="rounded-md object-cover w-full h-64 transition-transform duration-300 "
      // className="rounded-md object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
    />
    <Link href={`/study-abroad/${label.toLowerCase()}`}>
      <div
        className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/70 rounded-md"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 bottom-0 mx-auto translate-y-1/2 w-4/5 h-32 lg:h-40 xl:h-32 bg-(--white)/10 shadow-lg rounded-tl-md rounded-md flex items-center justify-center border border-(--white)/30 backdrop-blur-md">
          <div className="flex flex-col gap-2 justify-center h-full w-full">
            <Paragraph
              size="xl"
              className="text-white font-semibold px-4 text-center"
            >
              {label}
            </Paragraph>
            <Paragraph
              size="sm"
              className="text-white leading-tight px-4 text-center"
            >
              {desc}
            </Paragraph>
          </div>
        </div>
      </div>
    </Link>

    {/* <div className="absolute bottom-4 rounded-md flex items-center justify-start w-full">
            <Heading level={6} className="text-white text-lg font-semibold text-center px-4">
                {label}
            </Heading>
        </div> */}
  </div>
);

const Destination = () => {
  return (
    <div>
      <Section>
        <div className="pt-10 sm:pt-20 sm:px-10 xl:px-20">
          <div className="max-w-3xl mx-auto">
            <Heading level={4} className="font-bold leading-tight text-center">
              {/* <span className="text-(--teal)">Explore</span> MBBS, Nursing and
              More in HealthCare */}
              Pick the <span className="text-(--teal)">Place</span> That Speaks
              to You
            </Heading>
          </div>
        </div>
      </Section>

      <div className="bg-linear-to-t from-(--teal) to-transparent">
        <Section>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-6 lg:gap-y-6 xl:px-20 pb-20">
            {destinations.map((item, idx) => (
              <div key={idx} className={idx % 2 === 0 ? "" : " sm:mt-10"}>
                <DestinationCard {...item} />
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Destination;
