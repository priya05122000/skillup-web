"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";

type University = {
  id: number;
  name: string;
  logo: string;
};

const University = ({ universities }: { universities: University[] }) => {
  if (!universities || universities.length === 0) {
    return null;
  }
  return (
    <Section className="bg-(--teal) mt-8 md:mt-8 py-8">
      <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6">
        <div className="mb-10 md:w-2/7">
          <Heading level={5} className="font-bold mb-3">
            Who Will You Learn With?
          </Heading>
          <Paragraph
            size="base"
            className="text-(--gray) leading-relaxed md:w-[75%] lg:w-[80%]"
          >
            You can find your partners or fellow learners across these top
            institutions and organizations that share your goals.
          </Paragraph>
        </div>
        <div className="md:w-5/7">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
            {universities.map((university) => (
              <div
                key={university.id}
                className="w-24 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={university.logo}
                  alt={university.name}
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default University;
