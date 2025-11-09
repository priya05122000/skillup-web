import { CountryData } from "../countryData";

const usa: CountryData = {
  name: "United States",
  capital: "Washington, D.C.",
  overview:
    "The United States is a diverse and dynamic country known for its rich cultural heritage, technological innovation, and world-class educational institutions. It offers a wide range of opportunities for international students seeking quality education and vibrant campus life.",
  overviewImage: "/study-abroad/usa.png",
  general:
    "The United States of America (USA) is a federal republic consisting of 50 states, a federal district, five major self-governing territories, and various possessions.",
  noOfUniversities: 100,
  temp: "Varies by region, generally temperate.",
  languages: ["English", "Spanish"],
  currency: "USD",
  educationSystem: [
    "The education system in the United States is decentralized, with each state having its own system of public education.",
    "Higher education is offered by a mix of public and private institutions, including community colleges, liberal arts colleges, and research universities.",
    "The academic year typically runs from August to May, with a summer break in between.",
  ],
  quickFacts: [
    { label: "Population", value: "331 million" },
    { label: "Area", value: "9.8 million km²" },
    { label: "Time Zone", value: "UTC-5 to UTC-10" },
  ],
  tabData: [
    {
      id: "overview",
      label: "Overview",
      title: "Course Overview",
      subtitle: "An introduction to the course structure and objectives.",
      paragraphs: [
        "This section contains an overview of the course, its structure, and learning outcomes.",
        "Discover what you'll achieve at the end of this program and how it can help you grow professionally.",
      ],
    },
    {
      id: "curriculum",
      label: "Curriculum",
      title: "Courses Curriculum",
      subtitle: "A detailed look at the course content and structure.",
      paragraphs: [
        "Eed a little help from our friends from time to time. Although we offer the one-stop convenience of annery integrated range of legal, financial services under one roof, there are occasions when our clients areaneed specia-. That's why we've developed close working relationships with a number of strategic partner.",
        "When an unknown printer took a galley of type and scrambled it to make a type specimen bookhas a not only five centuries, but also the leap into electronic typesetting.",
      ],
    },
    {
      id: "instructor",
      label: "Instructor",
      title: "Instructor",
      subtitle: "Meet the experienced instructors guiding your learning.",
      paragraphs: [
        "Learn from industry professionals who bring real-world experience and insights into every lesson.",
        "Our instructors focus on practical knowledge that prepares you for real challenges.",
      ],
    },
    {
      id: "reviews",
      label: "Reviews",
      title: "Student Reviews",
      subtitle: "Hear from those who have taken this course.",
      paragraphs: [
        "See what past learners have to say about this course.",
        "Your feedback helps us improve and deliver the best learning experience possible.",
      ],
    },
    {
      id: "faqs",
      label: "FAQs",
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common queries about the course.",
      paragraphs: [
        "Find answers to the most common questions about this course.",
        "If you have any other questions, feel free to reach out to our support team.",
      ],
    },
    {
      id: "admission",
      label: "Admission",
      title: "Admission Process",
      subtitle: "Understand the steps to apply for this course.",
      paragraphs: [
        "Learn about the steps to apply for this course and the requirements you need to meet.",
        "Our admission team is here to guide you through the process and answer any questions you may have.",
      ],
    },
    {
      id: "scholarship",
      label: "Scholarship",
      title: "Scholarship Opportunities",
      subtitle: "Explore financial aid options for your studies.",
      paragraphs: [
        "Explore the various scholarship options available for this course.",
        "Our financial aid team can assist you in finding the right scholarship to support your studies.",
      ],
    },
    {
      id: "career",
      label: "Career",
      title: "Career Prospects",
      subtitle: "Discover the job opportunities after graduation.",
      paragraphs: [
        "Discover the career opportunities that await you after completing this course.",
        "Our career services team is here to support you in your job search and professional development.",
      ],
    },
  ],
};

export default usa;
