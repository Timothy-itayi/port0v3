'use client'
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

const Accordion = ({ project, isOpen, toggleAccordion }) => {
  // Create refs for the header and content elements
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  // Use useGSAP hook for animations
  useGSAP(() => {
 
    // Animate content height
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: isOpen ? 'auto' : 0,
        duration: 0.4,
        ease: 'spring',
        // Ensure content is visible when open
        onComplete: () => {
          if (isOpen) {
            gsap.set(contentRef.current, { height: 'auto' });
          }
        }
      });
    }
  }, [isOpen]); // Dependency array ensures animation runs when isOpen changes

  return (
    <div className="mb-4   rounded overflow-hidden">
      {/* Header with ref and click handler */}
      <header
        ref={headerRef}
        className="p-4 cursor-pointer  text-white"
        onClick={toggleAccordion}
      >
        {project.title}
      </header>
      
      {/* Content div with conditional rendering and ref */}
      {isOpen && (
        <div
          ref={contentRef}
          className="p-4 bg-gray-100 text-black overflow-hidden"
          style={{ height: 0 }} // Start with closed height
        >
          <p>Information about {project.title} goes here.</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;