import { ExamData } from "../examData";

const ielts: ExamData = {
  name: "IELTS",
  bannerImage: "/about-us/about-banner.jpg",
  bannerSubtitle:
    "Secure your place in English-speaking countries with IELTS scores widely accepted by universities and immigration. Build language confidence for study, work, and migration.",
  description:
    "IELTS tests your English communication skills across listening, reading, writing, and speaking. Skill Up offers tailored coaching to enhance your language proficiency, familiarize you with the test format, and improve your ability to communicate effectively in academic and professional settings worldwide.",
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
  tableTitle: "IELTS",
  tableData: [
      { title: "Testing authority", values: "Cambridge ESOL Examinations, U.K." },
      { title: "Registration website", values: "https://www.ieltsidpindia.com/" },
      { title: "Sections", values: "Reading | Writing | Listening | Speaking" },
      { title: "Applicability", values: "Overseas Education & Employment" },
      { title: "Acceptability", values: "UK, USA, Canada, Australia, NZ, EU" },
      { title: "Eligibility", values: "Std. 10+" },
      { title: "Duration", values: "2 hours 45 minutes" },
      { title: "Scoring", values: "Minimum 6.5 out of 9" },
      { title: "Modes", values: "Computer Based & Hand-written" },
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
     { title: "Total training program", values: "75 hours" },
  ],
  note: "All information mentioned here-in are indicative. Do refer to the web-sites of the relevant test for current information.",
};

export default ielts;
