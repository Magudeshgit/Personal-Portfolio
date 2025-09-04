"use client"
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { div } from 'motion/react-client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'

const Smoothscroll:React.FC<{children: ReactNode}> = ({children}) => {
    
    const contentRef = useRef<HTMLDivElement>(null)
    const [contentHeight, setcontentHeight] = useState(0)
    const [winHeight, setwinHeight] = useState(0)

    useEffect(()=>{
        const handleSize = ()=>{
            if (contentRef.current != null)
            {
                setcontentHeight(contentRef.current.scrollHeight)
            }
            setwinHeight(window.innerHeight)
        };

        handleSize()
        window.addEventListener("resize", handleSize)
        return () => {
            window.removeEventListener("resize", handleSize)
        }
    }, [contentRef])

    const {scrollYProgress} = useScroll()
    const smoothprog = useSpring(scrollYProgress,
        {
            mass: 0.1,
            stiffness: 50,
            damping: 10,
            restDelta: 0.001
        }
    )
    const y = useTransform(smoothprog, (value)=>{
        return value * -(contentHeight - winHeight);
    })
  return (
    <div style={{height: contentHeight}}>
        <motion.div className='w-screen' ref={contentRef} style={{y: y}}>
            {children}
        </motion.div>
    </div>
  )
}

export default Smoothscroll