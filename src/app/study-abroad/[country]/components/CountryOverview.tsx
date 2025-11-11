"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Span from "@/components/Span";
import Image from "next/image";
import React from "react";
import { CircleCheckBig } from "lucide-react";
import { CountryData } from "../countryData";

const CountryOverview: React.FC<{ data: CountryData }> = ({ data }) => {
  return (
    <Section className="pt-8 lg:pt-12">
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
        <div className="w-full lg:w-3/5">
          <Image
            src={data.overviewImage}
            alt={`${data.name} Skyline`}
            className="w-full h-auto md:h-[60vh] rounded-xl shadow-md object-cover"
            width={800}
            height={800}
          />
          {data.quickFacts && (
            <div className="mt-6">
              <Heading level={6} className="mb-4">
                Quick Facts
              </Heading>
              <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-2">
                {data.quickFacts.map((fact, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Paragraph size="base" className="font-bold">
                      {fact.label}:
                    </Paragraph>
                    <Paragraph size="base">{fact.value}</Paragraph>
                  </div>
                ))}
              </div>
            </div>
          )}
          {data.educationSystem && (
            <div>
              <Heading level={5} className="mt-6 mb-4">
                {data.name} Education System
              </Heading>
              <div className="text-justify">
                {data.educationSystem.map((point, index) => (
                  <Paragraph size="base" key={index} className="block mb-2">
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

        <div className="w-full lg:w-2/5 bg-white p-5 rounded-xl shadow-md">
          <Image
            src={data.overviewImage}
            alt={`${data.name} Overview`}
            className="w-full h-auto md:h-[30vh] rounded-xl shadow-md object-cover"
            width={800}
            height={800}
          />
          <Heading level={6} className="mb-2 my-4">
            Overview
          </Heading>
          <Paragraph size="base" className="text-justify">
            {data.overview}
          </Paragraph>

          <Heading level={6} className="my-2">
            General Information
          </Heading>
          <Paragraph size="base" className="text-justify">
            {data.general}
          </Paragraph>

          <div className="mt-4 bg-(--bg-grey) p-4 rounded-lg flex items-center gap-2">
            <Paragraph size="lg" className="font-bold">
              Capital:
            </Paragraph>
            <Paragraph>{data.capital}</Paragraph>
          </div>
          <div className="mt-4 bg-(--bg-grey) p-4 rounded-lg flex items-center gap-2">
            <Paragraph size="lg" className="font-bold">
              Number of Universities:
            </Paragraph>
            <Paragraph>{data.noOfUniversities}</Paragraph>
          </div>
          <div className="mt-4 bg-(--bg-grey) p-4 rounded-lg flex gap-2">
            <Paragraph size="lg" className="font-bold">
              Temperature:
            </Paragraph>
            <Paragraph className="pt-0.5">{data.temp}</Paragraph>
          </div>
          <div className="mt-4 bg-(--bg-grey) p-4 rounded-lg flex items-center gap-2">
            <Paragraph size="lg" className="font-bold">
              Languages:
            </Paragraph>
            <Paragraph>{data.languages.join(", ")}</Paragraph>
          </div>
          <div className="mt-4 bg-(--bg-grey) p-4 rounded-lg flex items-center gap-2">
            <Paragraph size="lg" className="font-bold">
              Currency:
            </Paragraph>
            <Paragraph>{data.currency}</Paragraph>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CountryOverview;
