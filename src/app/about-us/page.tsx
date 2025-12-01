import React from "react";
import Banner from "./components/Banner";
import AcademicSupportSection from "./components/AcademicSupportSection";
import ExploreProgramsSection from "./components/ExploreProgramsSection";
import VisionMission from "./components/VisionMission";
import Intake from "./components/Intake";

const page = () => {
  return (
    <>
      <Banner />
      <AcademicSupportSection />
      <VisionMission />
      <ExploreProgramsSection />
      {/* <Intake /> */}
    </>
  );
};

export default page;
