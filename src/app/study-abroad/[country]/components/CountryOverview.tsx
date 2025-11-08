"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

interface CountryData {
  name: string;
  capital: string;
  overview: string;
  overviewImage: string;
  general: string;
  noOfUniversities: number;
  temp: string;
  languages: string[];
  currency: string;
}

const CountryOverview: React.FC<{ data: CountryData }> = ({ data }) => {
  return (
    <Section className="py-16">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={data.overviewImage}
            alt={`${data.name} Skyline`}
            className="w-full h-auto md:h-[60vh] rounded-xl shadow-md object-cover"
            width={800}
            height={800}
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          {/* Overview Section */}
          <Heading level={6} className="text-(--black) mb-3 uppercase">
            Overview
          </Heading>
          <Paragraph size="base" className="text-(--text-dark) mb-8 leading-relaxed">{data.overview}</Paragraph>

          {/* Quick Facts Section */}
          <Heading level={6} className="text-(--black) mb-4 uppercase">
            Quick Facts
          </Heading>

          <ul className="space-y-4 text-(--text-dark)">
            <li className="flex items-start gap-2">
              <p>
                <strong>General:</strong> {data.general}
              </p>
            </li>

            <li className="flex items-center gap-10 flex-wrap">
              <p>
                <strong>Capital:</strong> {data.capital}
              </p>
              <p>
                <strong>Number of universities:</strong> {data.noOfUniversities}
              </p>
            </li>

            <li className="flex items-center gap-2 flex-wrap">
              <p>
                <strong>Temperature:</strong> {data.temp}
              </p>
            </li>

            <li className="flex items-center gap-10 flex-wrap">
              <p>
                <strong>Official Languages:</strong> {data.languages.join(", ")}
              </p>
              <p>
                <strong>Currency:</strong> {data.currency}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default CountryOverview;
