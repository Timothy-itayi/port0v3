'use client'
import NavBar from "../components/nav";
import Landing from "../components/landing";
import Section from "@/components/section";
import Preloader from "@/components/preloader";

export default function Home() {
  return (
    <>
      <NavBar />
      <div style={{ height: "5vh" }}></div> {/* Spacer to add some space between NavBar and content */}
      
      {/* Main content container */}
      <div className="flex flex-col sm:px-4 lg:px-8 py-8">

        {/* Landing Section */}
        <div className="sm:col-span-1 lg:col-span-1 mb-8">
          <Landing />
        </div>

        {/* Projects Section */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h2 className="header-font text-4xl text-center mb-6">Projects</h2>
          <Section />
        </div>
      </div>
    </>
  );
}
