"use client";

import React, { use } from "react";
import Banner from "./components/Banner";
import CountryOverview from "./components/CountryOverview";
import TabsData from "./components/TabsData";
import countryData from "./data";

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
      <TabsData tabData={data.tabData} />
    </>
  );
}
