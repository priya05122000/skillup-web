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
    className="w-34 h-30 flex items-center justify-center transition-all duration-300 border border-(--bg-grey) rounded-md shadow-sm p-2 mt-6 md:mt-0"
  >
    <Image
      src={university.logo}
      alt={university.name}
      width={100}
      height={60}
      className="object-contain"
    />
  </div>
);

const University: FC<UniversityProps> = ({ universities }) => {
  if (!universities?.length) return null;
  return (
    <Section className="bg-(--teal) py-10 my-12 lg:my-14 ">
      <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6">
        <div className="md:w-2/7 text-(--white)">
          <Heading level={5} className="font-bold mb-3">
            Study Across Global Universities
          </Heading>
          <Paragraph
            size="base"
            className="text-(--gray) leading-relaxed md:w-[75%] lg:w-[80%]"
          >
            Skill Up Study Abroad Agency connects you with global universities,
            providing tailored advice and full support for international
            students. Begin your global education journey with expert guidance,
            visa help, and career boosting services to open doors worldwide.
          </Paragraph>
        </div>
        <div className="md:w-5/7">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
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
