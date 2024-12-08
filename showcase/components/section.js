// components/Section.js
import { useState } from "react";
import Accordion from "../components/ui/accordion";
import {projects} from './utils/projects'

const Section = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="py-9 col-span-1">
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
