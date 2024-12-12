'use client'

import NavBar from "../components/nav";
import Landing from "../components/landing";
import Section from "@/components/section";


export default function Home() {

  return (
    <>
      <NavBar />
      <div style={{ height: "5vh" }}></div>
      
      <div className="flex flex-col sm:px-4 lg:px-8 py-8">
        <div className="sm:col-span-1 lg:col-span-1 mb-8">
          <Landing />
        </div>

        <div className="sm:col-span-1 lg:col-span-1 items-center">
          <h2 className="custom-font text-4xl text-center mb-6 tracking-[.15em]">Projects</h2>
          <Section />
        </div>
      </div>
    </>
  );
}