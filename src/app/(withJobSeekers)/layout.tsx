"use client";

import CandidateDashboardNavbar from "@/components/candidate-dashboard/candidate-dashboard-navbar";
import Navbar from "@/components/main/Navbar";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "JobsBD",
//   description: "JobsBd is an online source for job opportunities.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // main section container
    <section className="relative">
      <Navbar />
      <div className="mt-28">
        <div className="h-[70px] bg-primary fixed -z-10 w-full"></div>
        <div className="flex flex-col lg:flex-row">
          {/* side nav */}
          <CandidateDashboardNavbar />
          {/* children */}
          <div className="relative top-9 p-5 flex-1">{children}</div>
          {/* right box */}
        </div>
      </div>
    </section>
  );
}