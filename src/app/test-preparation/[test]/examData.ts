export interface ExamData {
  name: string;
  subName?: string;
  bannerImage: string;
  bannerSubtitle: string;
  description: string;
  preparation: {
    id: string;
    title: string;
  }[];
  aboutDescription?: string;
  tableTitle: string;
  tableData: {
    title: string;
    values: string;
  }[];
  training:{
    title: string;
    values: string;
  }[];
  note?: string;
  purpose?: string;
  details?:{
    id: string;
    title: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}
