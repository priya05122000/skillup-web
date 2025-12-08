"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import { FC } from "react";

type University = {
  id: number;
  name: string;
  logo: string;
};

type UniversityProps = {
  universities: University[];
};

const UniversityLogo: FC<{ university: University }> = ({ university }) => (
  <div
    key={university.id}
    className="w-full h-26 flex items-center justify-center transition-all duration-300 border border-(--bg-grey) rounded-md shadow-sm p-2 bg-white"
  >
    <Image
      src={university.logo}
      alt={university.name}
      width={200}
      height={600}
      className="object-contain h-full w-full"
    />
  </div>
);

const University: FC<UniversityProps> = ({ universities }) => {
  if (!universities?.length) return null;
  return (
    <Section className="bg-(--teal) py-10 md:py-20">
      <div className="flex flex-col lg:flex-row md:space-x-4 lg:space-x-6">
        <div className="lg:w-1/3 text-(--white)">
          <Heading level={4} className="font-bold mb-4 leading-tight">
            Study Across Global Universities
          </Heading>
          <Paragraph
            size="sm"
            className="text-(--gray) leading-relaxed md:w-[75%] lg:w-[95%] text-justify"
          >
            Skill Up Study Abroad connects you with global universities,
            providing tailored advice and full support for international
            students. Begin your global education journey with expert guidance,
            visa help, and career boosting services to open doors worldwide.
          </Paragraph>
        </div>
        <div className="lg:w-2/3 mt-6 lg:mt-2">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
            {universities.map((university) => (
              <UniversityLogo university={university} key={university.id} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default University;
