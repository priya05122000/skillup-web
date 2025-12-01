// components/FAQAccordion.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "@/components/Section";
import { ExamData } from "../examData";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

const FAQAccordion = ({ data }: { data: ExamData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const satSections = [
    {
      title: "Verbal",
      description: "Covers reading comprehension, grammar, and writing skills.",
    },
    {
      title: "Maths",
      description: "Focuses on problem solving, algebra, and data analysis.",
    },
  ];

  if (!data.faqs || data.faqs.length === 0) {
    return null;
  }
  
  return (
    <Section className="py-10">
      {data.faqs.map((faq, index) => (
        <div
          key={index}
          className="cursor-pointer border-b border-gray-200 py-4 transition-all"
          onClick={() => toggle(index)}
        >
          <div className="flex items-center justify-between">
            <Paragraph size="lg" className="font-semibold">
              {faq.question}
            </Paragraph>
            <ChevronDown
              className={`h-5 w-5 transform text-(--black)/80 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`mt-2 max-h-0 overflow-hidden text-(--black) transition-all duration-800 ${
              openIndex === index ? "max-h-40 opacity-100" : "opacity-0"
            }`}
          >
            <Paragraph size="sm" className="leading-relaxed w-[90%] sm:w-[60%] text-justify">
              {(() => {
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                const parts = faq.answer.split(urlRegex);
                return parts.map((part, i) => {
                  if (urlRegex.test(part)) {
                    return (
                      <a
                        key={i}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--orange)"
                      >
                        {part}
                      </a>
                    );
                  }
                  return part;
                });
              })()}
            </Paragraph>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default FAQAccordion;
