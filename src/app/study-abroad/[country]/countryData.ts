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
    title: string;
    subtitle: string;
    paragraphs: string[];
  }[];
}
