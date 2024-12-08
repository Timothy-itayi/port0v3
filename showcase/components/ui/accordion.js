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
    <div className=" col-span-1 mb-4 border-md text-gray-400 opacity-100 z-10 transition-all duration-300 hover:text-white  hover:opacity-100  overflow-hidden">
    
   
      <header
        ref={headerRef}
        className=" header-font title-container flex items-center justify-between cursor-pointer "
        onClick={toggleAccordion}
      >
        <span className="text-sm">{project.title}</span>
        
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
        className="overflow-hidden "
        style={{ height: 0 }}
      >
        <div 
          ref={contentRef}
          className="p-4 bg-gray-100 text-black"
        >
        <p>{project.description}</p>
          {/* Render each image in the array */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {project.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${project.title} image ${index + 1}`}
                width={500}  // You can adjust these values
                height={500} // or set them dynamically if needed
                className="rounded-lg object-cover"
              />
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-600 hover:underline">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accordion;