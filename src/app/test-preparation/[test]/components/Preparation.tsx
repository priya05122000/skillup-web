"use client";

import Section from "@/components/Section";
import Heading from "@/components/Heading";
import React from "react";
import { ExamData } from "../examData";
import Paragraph from "@/components/Paragraph";


const Preparation = ({data}: {data: ExamData}) => {
  return (
    <Section className="py-12 bg-(--teal) text-(--white)">
      <Heading level={5} className="font-semibold mb-10">
        The Digital {data.name} Preparation
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.preparation.map((step) => (
          <div
            key={step.id}
            className="flex items-center gap-4"
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-(--orange) text-(--white) flex items-center justify-center font-bold text-lg md:text-xl">
              {step.id}
            </div>
            <div className="flex-1">
              <Paragraph size="lg" className="font-semibold">{step.title}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Preparation;
