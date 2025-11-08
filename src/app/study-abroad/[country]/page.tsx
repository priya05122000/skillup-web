"use client";
import React, { use } from "react";
import Banner from "./components/Banner";
import CountryOverview from "./components/CountryOverview";

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

const countryData: Record<string, CountryData> = {
  usa: {
    name: "United States",
    capital: "Washington, D.C.",
    overview:
      "The United States is a diverse and dynamic country known for its rich cultural heritage, technological innovation, and world-class educational institutions. It offers a wide range of opportunities for international students seeking quality education and vibrant campus life.",
    overviewImage: "/study-abroad/usa.png",
    general:
      "The United States of America (USA) is a federal republic consisting of 50 states, a federal district, five major self-governing territories, and various possessions.",
    noOfUniversities: 100,
    temp: "Varies by region, generally temperate.",
    languages: ["English", "Spanish"],
    currency: "USD"
  },
  canada: {
    name: "Canada",
    capital: "Ottawa",
    overview:
      "Canada is a hugely popular choice as an overseas study destination for a host of reasons. From secure environment to first-rate education system, abundant opportunities to buzzing city life and picturesque locations, Canada offers everything you could possibly want from life.",
    overviewImage: "/study-abroad/canada.png",
    general:
      "Canada is a Federation of ten provinces (Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland and Labrador, Nova Scotia, Ontario, Prince Edward Island, Quebec, and Saskatchewan) and three territories (Northwest Territories, Yukon, and Nunavut).",
    noOfUniversities: 98,
    temp: "Varies by region, generally temperate.",
    languages: ["English", "French"],
    currency: "CAD$"
  },
  uk: {
    name: "United Kingdom",
    capital: "London",
    overview:
      "The United Kingdom is home to some of the world's oldest and most prestigious universities. It offers a rich cultural experience and a diverse range of study programs.",
    overviewImage: "/study-abroad/uk.png",
    general:
      "The United Kingdom (UK) is made up of four countries: England, Scotland, Wales, and Northern Ireland. It has a constitutional monarchy and a parliamentary democracy.",
    noOfUniversities: 120,
    temp: "Mild and temperate, with relatively cool summers and mild winters.",
    languages: ["English"],
    currency: "GBP"
  },
};

interface PageProps {
  params: Promise<{ country: string }>;
}

export default function Page({ params }: PageProps) {
  const { country } = use(params);
  const countryKey = country?.toLowerCase?.();
  const data = countryKey ? countryData[countryKey] : undefined;

  if (!data) {
    return <div>Country not found.</div>;
  }

  return (
    <>
      <Banner countryName={data.name} />
      <CountryOverview data={data} />
    </>
  );
}
