export interface CountryData {
  name: string;
  capital: string;
  overview: string;
  overviewImage: string;
  general: string;
  noOfUniversities: number;
  temp: string;
  languages: string[];
  currency: string;
  educationSystem?: string[];
  quickFacts?: { label: string; value: string | number }[];
  tabData: {
    id: string;
    label: string;
    title?: string;
    subtitle?: string;
    paragraphs: string[];
  }[];
  universities?: { id: number; name: string; logo: string }[];
  topics?: { id: number; title: string; icon: string; library?: "lucide" | "fa" | "md" | "ai" }[]; //Use Lucide icon names
}
