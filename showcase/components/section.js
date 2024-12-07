import { useState } from "react";
import Accordion from "../components/ui/accordion";
import gsap from "gsap";

const Section = () => {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: "GrandPrix History",
      // Example color
    },
    {
      title: "Waitless",
     
    },
    {
      title: "Timothy's Blog",
     
    },
    {
      title: "F1-Heritage",
     
    },
  ];



  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="py-9">
      {projects.map((project, index) => (
        <Accordion
          key={index}
          project={project}
          isOpen={expanded === index}
          toggleAccordion={() => toggleAccordion(index)}
     
        />
      ))}
    </div>
  );
};

export default Section;
