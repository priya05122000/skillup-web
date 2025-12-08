"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import { CircleCheckBig } from "lucide-react";
import { CountryData } from "../countryData";
import Span from "@/components/Span";

type CountryOverviewProps = {
  data: CountryData;
};

const InfoRow: FC<{ label: string; value: ReactNode }> = ({ label, value }) => (
  <div className="mt-4 bg-(--bg-grey) p-4 rounded-md flex gap-2">
    <Paragraph size="lg" className="font-bold">
      {label}:
    </Paragraph>
    <Paragraph className="mt-0.5">{value}</Paragraph>
  </div>
);

const InfoTemp: FC<{ label: string; value: ReactNode }> = ({ label, value }) => (
  <div className="mt-4 bg-(--bg-grey) p-4 rounded-md">
    <Paragraph size="lg">
      <strong>{label}: </strong> <span className="text-base mt-0.5">{value}</span>
    </Paragraph>
  </div>
);  

const CountryOverview: FC<CountryOverviewProps> = ({ data }) => {
  const quickFacts = data.quickFacts ?? [];
  const educationSystem = data.educationSystem ?? [];
  return (
    <Section className="py-10 md:py-20">
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
        {/* Main Content */}
        <div className="w-full lg:w-3/5">
          <Image
            src={data.overviewImage}
            alt={`${data.name} Skyline`}
            className="w-full h-auto md:h-[60vh] rounded-md shadow-md object-cover"
            width={800}
            height={800}
          />
          {quickFacts.length > 0 && (
            <div className="mt-6">
              <Heading level={6} className="mb-4">
                Quick Facts
              </Heading>
              <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-2">
                {quickFacts.slice(0, 2).map((fact, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Paragraph size="sm" className="font-bold">
                      {fact.label}:
                    </Paragraph>
                    <Paragraph size="sm">{fact.value}</Paragraph>
                  </div>
                ))}
              </div>
              <div>
                {quickFacts.slice(2).map((fact, index) => (
                  <div key={index} className="flex flex-col sm:flex-row mt-2 w-[90%] sm:w-[75%] lg:w-[80%] xl:w-[75%]">
                    <Paragraph size="sm"><span className="font-bold pr-2">{fact.label}:</span>{fact.value}</Paragraph>
                  </div>
                ))}
              </div>
            </div>
          )}
          {educationSystem.length > 0 && (
            <div>
              <Heading level={5} className="mt-6 mb-4">
                {data.name} Education System
              </Heading>
              <div className="text-justify">
                {educationSystem.map((point, index) => (
                  <Paragraph size="sm" key={index} className="block mb-2">
                    <CircleCheckBig
                      className="inline-flex text-(--orange) mr-2"
                      size={18}
                    />
                    {point}
                  </Paragraph>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-2/5 md:bg-white md:p-5 rounded-md md:shadow-md">
          <Image
            src={data.studentImage}
            alt={`${data.name} Students`}
            className="w-full h-[30vh] sm:h-[50vh] lg:h-[30vh] rounded-md shadow-md object-cover"
            width={800}
            height={800}
          />
          <Heading level={6} className="mt-4 my-2">
            Overview
          </Heading>
          <Paragraph size="sm" className="text-justify">
            {data.overview}
          </Paragraph>

          <Heading level={6} className="my-2">
            General Information
          </Heading>
          <Paragraph size="sm" className="text-justify">
            {data.general}
          </Paragraph>

          <InfoRow label="Capital" value={data.capital} />
          <InfoTemp label="Temperature" value={data.temp} />
          <InfoRow label="Languages" value={data.languages.join(", ")} />
          <InfoRow label="Currency" value={data.currency} />
        </div>
      </div>
    </Section>
  );
};

export default CountryOverview;
