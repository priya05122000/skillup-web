import { CountryData } from "../countryData";

const uk: CountryData = {
  name: "United Kingdom",
  bannerTitle: "Study in UK",
  bannerSubtitle: "Unlock Your Future with a UK Education",
  capital: "London",
  banner : "/study-abroad/uk/banner.jpg",
  overview:
    "The United Kingdom is home to some of the world’s oldest and most prestigious universities. Renowned institutions like Oxford, Cambridge, and Imperial College London are celebrated for their academic excellence. Whether you seek a comprehensive undergraduate or postgraduate program, the United Kingdom universities offer a range of options, backed by high rankings and international recognition",
  overviewImage: "/study-abroad/uk/uk.jpeg",
  studentImage:"/study-abroad/uk/students.jpeg",
  general:
    "The country’s rich history, vibrant student cities, and welcoming multicultural atmosphere make it an ideal destination for students seeking academic excellence and global exposure.",
  noOfUniversities: 45,
  temp: "5°C in winter to 23°C in summer",
  languages: ["English"],
  currency: "British Pound Sterling (GBP)",
  educationSystem: [
    "The United Kingdom education system offers flexible options for students who wish to study in the UK without IELTS.",
    "Many universities accept alternative proof of English proficiency, such as medium of instruction certificates, good English marks in previous studies, or their own English tests.",
    "This makes it easier for international students to pursue quality education in the UK without the hurdle of IELTS, opening doors to world-class learning and career opportunities.",
  ],
  quickFacts: [
    { label: "Population", value: "67 million" },
    { label: "Area", value: "243,610 km²" },
    { label: "Time Zone", value: "UTC+0 to UTC+1" },
  ],
  tabData: [
    {
      id:"programs",
      label: "Programs",
      title: "Popular Programs",
      subtitle: "",
      paragraphs: [
        "Universities offer degree programs, skill-based training, and diploma options at different levels.",
        "Sandwich programs run for four years and include a full year of structured industry experience.",
        "First degree programs usually take three to four years to finish.",
        "Diplomas and vocational studies last one to two years, with certificates granted by the Vocational and Technical Education Councils.",
        "Master’s programs run for one or two years and may follow either supervised independent research or a taught academic route.",
      ],
    },
    {
      id: "criteria",
      label: "Criteria",
      title: "Criteria",
      subtitle: "",
      paragraphs: [
        "Many students think IELTS is required, yet several UK universities offer other ways to prove English ability.",
        "Studying in an English medium school can help, as some universities accept a Medium of Instruction certificate as proof.",
        "Strong marks in Class 12 English can serve as evidence of language skills for various institutions.",
        "A short online interview through platforms like Skype or Teams may be used to check your spoken English.",
        "Some universities conduct their own language tests instead of asking for IELTS, TOEFL, or PTE.",
      ],
    },
    {
      id: "tuition",
      label: "Tuition",
      title: "Tuition",
      subtitle: "",
      paragraphs: [
        "Annual tuition usually comes to about 11,400 GBP",
        "Fees differ from one university to another",
        "Living costs in Inner London are about 13,347 GBP for nine months",
        "Living costs in Outer London are about 10,224 GBP for nine months",
        "Total expenses change based on where you study and stay",
      ],
    },

  ],
  universities: [
    { id: 1, name: "Partner 1", logo: "/home/partner13.png" },
    { id: 2, name: "Partner 2", logo: "/home/partner2.png" },
    { id: 3, name: "Partner 3", logo: "/home/partner3.png" },
    { id: 4, name: "Partner 4", logo: "/home/partner4.png" },
    { id: 5, name: "Partner 5", logo: "/home/partner5.png" },
    { id: 6, name: "Partner 6", logo: "/home/partner6.png" },
    { id: 7, name: "Partner 7", logo: "/home/partner7.png" },
    { id: 8, name: "Partner 8", logo: "/home/partner8.png" },
    { id: 9, name: "Partner 9", logo: "/home/partner9.png" },
    { id: 10, name: "Partner 10", logo: "/home/partner10.png" },
    { id: 11, name: "Partner 11", logo: "/home/partner11.png" },
    { id: 12, name: "Partner 12", logo: "/home/partner12.png" },
  ],
};

export default uk;
