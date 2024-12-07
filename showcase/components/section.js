import { useState } from "react";
import Accordion from "./accordion";

const Section = () => {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: "GrandPrix History",
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
    <div className="">
  
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
