import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!.replace(/\/$/, "");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  /* 🔹 Static pages */
  const staticPages = [
    "",
    "about-us",
    "contact-us",
    "languages",
    "services",
    "terms-and-conditions",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  /* 🔹 study-abroad/[country] */
  const countries = [
    "australia",
    "canada",
    "finland",
    "france",
    "germany",
    "ireland",
    "italy",
    "malta",
    "netherland",
    "newzealand",
    "uk",
    "usa",
  ];

  const countryUrls = countries.map((country) => ({
    url: `${BASE_URL}/study-abroad/${country}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  /* 🔹 test-preparation/[test] */
  const tests = ["gmat", "gre", "ielts", "oet", "pte", "sat", "toefl"];

  const testUrls = tests.map((test) => ({
    url: `${BASE_URL}/test-preparation/${test}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticUrls, ...countryUrls, ...testUrls];
}
