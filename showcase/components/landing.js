import {motion , useScroll, useTransform } from 'motion/react'
import React, {useRef } from 'react';

 
const Landing = ( ) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll ({
        targert: container, 
        offset: ["start 0.9", "start 0.25"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const paragraph = "Timothy Itayi Front End Developer Based in Melbourne Portfolio@2024"
    return (
        <motion.p 
        ref={container}         
        className="paragraph  flex flex-col items-center justify-center  text-[5.5vw] uppercase w-[80vw] items-start leading-tight" 
        style={{opacity}}
      >
     
     {paragraph}
      </motion.p>
    )
}
export default Landing;