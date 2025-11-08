"use client";
import React, { use } from "react";
import Banner from "./components/Banner";


const countryData: Record<string, { name: string }> = {
  usa: { name: "United States" },
  uk: { name: "United Kingdom" },
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

  return <Banner countryName={data.name} />;
}
