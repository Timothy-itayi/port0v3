'use client'
import NavBar from "../components/nav";
import Landing from "../components/landing"
import Section from "@/components/section";
import Preloader from "@/components/preloader";

export default function Home() {
  return (

    <>


    <NavBar />
        <div style={{height: "5vh"}}></div>
        <Landing />
    <Section/>

    
 </>
  );
}
