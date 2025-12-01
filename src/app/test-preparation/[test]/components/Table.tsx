
"use client";

import React from "react";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import { ExamData } from "../examData";

type TableRow = {
  title: string;
  values: string;
};

interface TableProps {
  data: ExamData;
}

interface CustomTableProps {
  title: string;
  rows: TableRow[];
}

const CustomTable: React.FC<CustomTableProps> = ({ title, rows }) => (
  <table className="w-full border-collapse text-sm md:text-base">
    <thead>
      <tr className="text-base md:text-xl">
        <th
          className="text-left py-4 px-4 font-medium border-b-2 border-(--ice-gray)"
          colSpan={2}
        >
          {title}
        </th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, idx) => (
        <tr
          key={idx}
          className={"hover:bg-(--teal)/10 transition border-b border-(--light-gray)"}
        >
          <td className="py-4 px-4 w-1/2 align-top font-semibold">{row.title}</td>
          <td className="py-4 px-4 w-1/2 text-(--teal) font-semibold align-top">{row.values}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <Section className="py-10 md:py-20">
      <Heading level={4} className="mb-2">
        About the {data.subName || data.name}
      </Heading>
      <Paragraph size="lg" className="my-4">
        {data.aboutDescription}
      </Paragraph>
      <div>
        <CustomTable title={data.tableTitle} rows={data.tableData} />
      </div>
      <div className="mt-8">
        <CustomTable title="Training Programme" rows={data.training} />
      </div>
      {data.note && (
        <Paragraph size="sm" className="mt-4 italic text-(--black)/70">
          Note: {data.note}
        </Paragraph>
      )}
    </Section>
  );
};

export default Table;
