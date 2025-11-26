import { CountryData } from "../countryData";

const usa: CountryData = {
  name: "United States",
  bannerTitle: "Study in USA",
  bannerSubtitle: "Open New Doors with USA Studies",
  capital: "Washington, D.C.",
  banner: "/study-abroad/usa/banner.jpg",
  overview:
    "The USA education system is a top choice for international students due to its robust economy, diverse campus life, and wide range of flexible and high-quality academic programs. From dynamic cities to stunning national parks, the U.S. promises an enriching experience beyond academics. This blend of cultural diversity, cutting-edge research, and vibrant student environment makes studying in America truly captivating.",
  overviewImage: "/study-abroad/usa/us.jpeg",
  studentImage: "/study-abroad/usa/students.jpeg",
  general:
    "The United States of America is a federal republic consisting of 50 states, with its capital in Washington, D.C. It is the world’s third-largest country by land area and population, known for its diverse culture, strong economy, and democratic system of government.",
  temp: "Cold semi-arid- interior northwest; warm to hot desert & semi-arid-southwest",
  languages: ["No federal official language"],
  currency: "United States Dollar (USD)",
  educationSystem: [
    "The USA education system includes 12 years of primary and secondary schooling.",
    "After high school, students progress to undergraduate programs.",
    "Further studies include graduate school, post-graduation, and PhD programs.",
  ],
  quickFacts: [
    { label: "Population", value: "334 million" },
    { label: "Area", value: "9.83 million km²" },
    { label: "Time Zone", value: "UTC-5 to UTC-10" },
  ],
  tabData: [
    {
      id: "programs",
      label: "Programs",
      title: "Popular Programs",
      subtitle: "",
      paragraphs: [
        "Associate degree: Awarded after about two years at a community college, suitable for those seeking a fast-track or affordable study path.",
        "Bachelor’s degree: A four-year undergraduate qualification from a college or university, offering depth in a selected major.",
        "Graduate degree: Advanced studies available after a bachelor’s, with choices in arts, sciences, business, and many other fields.​",
        "Master’s degree: Postgraduate programs usually lasting two years, designed for expertise in specialized disciplines.​",
        "Doctorate: Research-focused qualification pursued after a master’s, typically taking three to six years to complete depending on the field",
      ],
    },
    {
      id: "criteria",
      label: "Criteria",
      title: "Criteria",
      subtitle: "",
      paragraphs: [
        "Most universities in the USA require an IELTS score of 6.0 to 7.5 or a TOEFL score of 70 to 100, depending on the institution’s standards.​",
        "Top-tier universities often need a higher score, such as IELTS 7.0-7.5 or TOEFL 100-110, for competitive programs.​",
        "Some universities offer conditional admission if your scores are slightly below their minimum but may require English language courses first.",
        "Score validity for IELTS and TOEFL is generally two years, so you must ensure your scores are current for application submissions.​",
        "Other accepted English proficiency tests include PTE Academic and Duolingo, but IELTS and TOEFL remain the most widely recognized.",
      ],
    },
    {
      id: "tuition",
      label: "Tuition",
      title: "Tuition",
      subtitle: "",
      paragraphs: [
        "Tuition fees at private institutions generally range between $15,000 and $25,000 per year, while state institutions charge $10,000 to $20,000 annually.",
        "Public universities often offer lower tuition fees compared to private universities, providing affordable options for students.",
        "Estimated living expenses, including accommodation, food, transport, and other costs, range from $10,000 to $16,000 per year.",
        "The overall cost of education varies depending on the university, program, and location within the USA.",
        "Budget planning should include both tuition and cost of living to prepare for the total expenses of studying abroad.",
      ],
    },
    {
      id: "intake",
      label: "Intake",
      title: "Intake",
      subtitle: "",
      paragraphs: ["August/September", "January", "May"],
    },
    {
      id: "workrights",
      label: "Work Rights",
      title: "Work Rights",
      subtitle: "",
      paragraphs: [
        "Optional Practical Training (OPT) permits up to 12 months work post-study (up to 24 months extension for STEM fields).",
        "Work must be related to the field of study.",
        "Ability to apply for H-1B work visa during OPT period.",
      ],
    },
  ],
  universities: [
    { id: 1, name: "University 1", logo: "/study-abroad/usa/university1.png" },
    { id: 2, name: "University 2", logo: "/study-abroad/usa/university2.png" },
    { id: 3, name: "University 3", logo: "/study-abroad/usa/university3.png" },
    { id: 4, name: "University 4", logo: "/study-abroad/usa/university4.png" },
    { id: 5, name: "University 5", logo: "/study-abroad/usa/university5.png" },
    { id: 6, name: "University 6", logo: "/study-abroad/usa/university6.png" },
    { id: 7, name: "University 7", logo: "/study-abroad/usa/university7.png" },
    { id: 8, name: "University 8", logo: "/study-abroad/usa/university8.png" },
  ],
};

export default usa;
