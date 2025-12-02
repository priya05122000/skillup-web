import { ExamData } from "../examData";

const gre: ExamData = {
  name: "GRE",
  bannerImage: "/test-prep/gre-banner1.png",
  bannerSubtitle:
    "Open doors to graduate programs worldwide by excelling in GRE. Sharpen your analytical, verbal, and quantitative skills for a competitive edge.",
  description:
    "The GRE is essential for master's and doctoral admissions, measuring your aptitude for critical thinking and problem-solving. Skill Up's tailored coaching focuses on all test components with practice tests and personalized feedback, helping you stand out in top graduate schools globally.",
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
  aboutImage:"/test-prep/gre1.webp",
  aboutDescription:
    "The GRE (Graduate Record Examination) is a standardized test commonly required for admission to graduate programs worldwide. It assesses verbal reasoning, quantitative reasoning, analytical writing, and critical thinking skills. Scores are used by admissions committees to evaluate applicants' potential for success in graduate-level studies.",
  tableTitle: "GRE General",
  tableData: [
      { title: "Testing authority", values: "ETS, USA" },
      { title: "Registration website", values: "ets.org" },
      { title: "Sections", values: "Verbal | Maths | Essay" },
      { title: "Applicability", values: "PG programmes" },
      { title: "Acceptability", values: "Overseas & India" },
      { title: "Eligibility", values: "After Graduation" },
      { title: "Duration", values: "2 hours" },
      { title: "Minimum score / passing", values: "260 out of 340" },
      { title: "Modes", values: "Computer Based Test (CBT)" },
      { title: "Validity", values: "5 years" },
      { title: "Identity document", values: "Passport" },
      { title: "Approximate test fee", values: "Rs.22,550" },
      {
        title: "Re-attempt/schedule/cancel",
        values: "Possible | Refer to web-site",
      },
  ],
  training: [
     { title: "Training mode", values: "Off-line | On-line" },
     { title: "Course materials", values: "Soft-copies included in course-fee" },
     { title: "Training", values: "36 hours" },
     { title: "Self-study", values: "36 hours" },
     { title: "Mock-tests", values: "12 hours (4 mock-tests)" },
     { title: "Total training program", values: "84 hours" },
  ],
  detailsImage:"/test-prep/gre2.webp",
  details: [
      {
        id: "01",
        title: "Analytical Writing",
        description:
          "The Analytical Writing measure consists of one writing task – Analyze an issue task. You have 30 minutes to type your response. The Analytical writing section is scored from 0-6 points.",
      },
      {
        id: "02",
        title: "Quantitative Reasoning",
        description:
          "There will be two Quantitative Reasoning sections on the test with a total of 27 questions and you will have 47 minutes to complete both sections. The score of the Quantitative Reasoning measure is from 130 to 170 points.",
      },
      {
        id: "03",
        title: "Verbal Reasoning",
        description:
          "There will be two Verbal Reasoning sections on the test with a total of 27 questions and you will have 41 minutes to complete both sections. The score of the Verbal Reasoning measure is also from 130 to 170 points.",
      },
      {
        id: "04",
        title: "Expression of Ideas",
        description:
          "This domain assesses students' skills in revising texts to enhance their effectiveness in written expression and achieve specific rhetorical goals. It evaluates their ability to improve the clarity, coherence, and persuasiveness of their writing.",
      },
  ],
  faqs: [
      {
        question: "How is the GRE scored?",
        answer:
          "The Quantitative Reasoning section and the Verbal Quantitative Reasoning section are scored on a scale of 130-170 in 1-point increments. The Analytical Writing section is scored on a scale of 0–6 in 0.5 increments.",
      },
      {
        question: "How long is the GRE test?",
        answer:
          "The overall testing time for the GRE General Test is about 2 hours.",
      },
      {
        question: "What is the GRE test fee?",
        answer: "The GRE test fee is USD 228.",
      },
      {
        question: "How can I register for the GRE?",
        answer:
          "The easiest way to register is through your ETS account. To create your account visit: https://www.ets.org/gre",
      },
  ],
};

export default gre;
