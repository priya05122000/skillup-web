// components/ServicesSection.tsx
"use client";

import Image from "next/image";
import { ExamData } from "../examData";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";


const DetailSection = ({ data }: { data: ExamData }) => {
  if (!data.details || data.details.length === 0) {
    return null;
  }

  return (
    <Section className="bg-(--teal) text-white py-10 md:py-16">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Section - Image */}
        <div className="relative w-full h-80 md:h-[500px] rounded-md overflow-hidden">
          <Image
            src="/home/enquireform.jpg"
            alt="Tattoo artist at work"
            fill
            className="object-cover" 
          />
        </div>

        {/* Right Section - Services */}
        <div>
          {data.purpose && (
            <div className="mb-8">
              <Heading level={4} className="tracking-wide">Purpose</Heading>
              <Paragraph size="lg" className="mt-4 leading-relaxed">{data.purpose}</Paragraph>
            </div>
          )}
          <Heading level={4} className="mb-4 tracking-wide">
            The {data.name} Consists of {data.details.length} Main Sections
          </Heading>

          <div className="space-y-4">
            {(data.details ?? []).map((service, idx) => (
              <div
                key={service.id}
                className={
                  idx === (data.details?.length ?? 0) - 1
                    ? "pb-4"
                    : "border-b border-(--light-gray) pb-4"
                }
              >
                <Paragraph size="xl" className="font-semibold text-white mb-2">
                  {service.id}. {service.title}
                </Paragraph>
                <Paragraph className="leading-relaxed">
                  {service.description}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DetailSection;
