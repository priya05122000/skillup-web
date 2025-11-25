import Section from "@/components/Section";
import React from "react";

export type Country = {
  name: string;
  code: string;
};

export const STUDY_ABROAD_COUNTRIES: Country[] = [
  { name: "United Kingdom", code: "uk" },
  { name: "Canada", code: "canada" },
  { name: "United States", code: "usa" },
  { name: "Australia", code: "australia" },
  { name: "Ireland", code: "ireland" },
  { name: "Netherlands", code: "netherland" },
  { name: "Germany", code: "germany" },
  { name: "Italy", code: "italy" },
  { name: "Malta", code: "malta" },
  { name: "Finland", code: "finland" },
  { name: "France", code: "france" },
  { name: "New Zealand", code: "newzealand" },
];

const Navigation = () => {
  return (
    <Section>
      <div className="grid grid-cols-2 sm:flex sm:flex-row sm:justify-center gap-4 sm:flex-wrap sm:items-center">
        {STUDY_ABROAD_COUNTRIES.map((country,idx) => (
          <div key={country.code} className="flex items-center gap-4">
            <a
              key={country.code}
              href={`/study-abroad/${country.code}`}
              className="text-(--orange) transition-colors font-medium"
            >
              {country.name}
            </a>
            <div className="hidden sm:block">|</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Navigation;
