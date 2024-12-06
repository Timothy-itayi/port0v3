'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

const Accordion = ({ project, isOpen, toggleAccordion }) => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    if (contentRef.current && containerRef.current) {
      // Get the natural height of the content
      const contentHeight = contentRef.current.scrollHeight;

      gsap.to(containerRef.current, {
        height: isOpen ? contentHeight : 0,
        duration: 0.5,
        ease: "power4.inOut",
        overflow: 'hidden'
      });
    }
  }, [isOpen]);

  return (
    <div className="mb-4 border-md text-gray-400 opacity-100 z-10 transition-all duration-300 hover:text-white  hover:opacity-100  overflow-hidden">
      <header
        ref={headerRef}
        className="title-container flex items-center justify-between cursor-pointer "
        onClick={toggleAccordion}
      >
        {project.title}
        <Image 
          src='/right-arrow.png'
          width='21'
          height='21'
          alt='arrow'
          className={` arrow filter invert ${isOpen ? 'rotate-90' : ''}`}
        />
      </header>
      
      <div 
        ref={containerRef}
        className="overflow-hidden"
        style={{ height: 0 }}
      >
        <div 
          ref={contentRef}
          className="p-4 bg-gray-100 text-black"
        >
          <p>Information about {project.title} goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;