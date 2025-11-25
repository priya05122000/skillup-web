import { ExamData } from "../examData";

const toefl: ExamData = {
  name: "TOEFL",
  bannerImage: "/test-prep/toefl-banner.webp",
  bannerSubtitle:
    "Demonstrate your English proficiency for academic and professional success with TOEFL. Expand your study and work opportunities internationally.",
  description:
    "TOEFL is the leading test to prove English skills for university admissions and visas in English-speaking countries. Skill Up offers comprehensive preparation including practice tests, skill-building exercises, and strategies tailored to the TOEFL format to ensure your readiness and competitive scores.",
  preparation: [
    {
      id: "01",
      title: "Individual Focus",
    },
    {
      id: "02",
      title: "Customized Programs",
    },
    {
      id: "03",
      title: "Exhaustive Study Materials",
    },
    {
      id: "04",
      title: "Practice Tests",
    },
    {
      id: "05",
      title: "Online Classes",
    },
    {
      id: "06",
      title: "Solving Doubts",
    },
  ],
  aboutImage:"/test-prep/toefl1.webp",
  tableTitle: "TOEFL",
  tableData: [
      { title: "Testing authority", values: "ETS, U.S.A" },
      { title: "Registration website", values: "www.ets.org" },
      { title: "Sections", values: "Reading | Writing | Listening |" },
      { title: "Applicability", values: "Overseas Education & Employment" },
      { title: "Acceptability", values: "UK, USA, Canada, Australia, NZ, EU" },
      { title: "Eligibility", values: "Std 10+" },
      { title: "Duration", values: "2 hours 15 minutes" },
      { title: "Scoring", values: "Minimum 75 out of 120" },
      { title: "Modes", values: "Computer Based" },
      { title: "Validity", values: "2 years" },
      { title: "Identity document", values: "Passport" },
      { title: "Approximate test fee", values: "Rs.17,000 (As on 2024)" },
      {
        title: "Re-attempt/schedule/cancel",
        values: "Possible | Refer to web-site",
      },
  ],
  training: [
    { title: "Training mode", values: "Off-line" },
    { title: "Course materials", values: "Printed copies included" },
    { title: "Training", values: "30 hours" },
    { title: "Self-study", values: "30 hours" },
    { title: "Mock-tests", values: "15 hours (5 mock-tests)" },
    { title: "Total training program", values: "70 hours" },
  ],
  note:"All information mentioned here-in are indicative. Do refer to the web-sites of the relevant test for current information.",
};

export default toefl;
