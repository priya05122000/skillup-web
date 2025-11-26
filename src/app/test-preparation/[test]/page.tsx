import { use } from "react";
import Banner from "./components/Banner";
import testData from "./data";
import EnquireForm from "./components/EnquireForm";
import Preparation from "./components/Preparation";
import Table from "./components/Table";
import FAQAccordion from "./components/FAQAccordion";
import DetailSection from "./components/DetailSection";

interface PageProps {
  params: Promise<{ test: string }>;
}

const page = ({ params }: PageProps) => {
  const { test } = use(params);
  const testKey = test?.toLowerCase?.();
  const data = testKey ? testData[testKey] : undefined;

  if (!data) {
    return <div>Test not found.</div>;
  }

  return (
    <div>
      <Banner data={data} />
      <EnquireForm description={data.description} aboutImage={data.aboutImage} />
      <Preparation data={data} />
      <Table data={data} />
      <DetailSection data={data} />
      <FAQAccordion data={data} />  
    </div>
  );
};

export default page;
