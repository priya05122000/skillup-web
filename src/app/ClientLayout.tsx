"use client";

import React, { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import AOSInit from "@/components/AOSInit";
import Footer from "@/components/Footer";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <AOSInit />

      <Navbar />

      <main className={`relative z-10 pt-20 }`}>{children}</main>

      <Footer />
    </>
  );
};

export default ClientLayout;
