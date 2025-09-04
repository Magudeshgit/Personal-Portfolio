"use client"
import Image from "next/image";
import { motion, useInView, useMotionValueEvent, useScroll } from "motion/react";
import { Globe, ChevronRight, FileUser, University, GraduationCap, School, ExternalLink, LinkIcon} from "lucide-react";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";

// Components
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { useEffect, useRef, useState } from "react";

// Hooks
import { useNavInfo } from "./navigationcontext";
import ScrollWrapper from "@/components/ui/scrollwrapper";

interface rootProps{
  navLogo: React.Dispatch<React.SetStateAction<String>>,
  
}

export default function Home(props: rootProps) {
  const {navlogo, setnavlogo} = useNavInfo()
  const sectionref = useRef<HTMLDivElement>(null)
  const mainref = useRef<HTMLDivElement>(null)


  // const {scrollYProgress, scrollY} = useScroll({
  //   target: mainref,
  // })
 



  function handleNavLogoReplacement(e: any) {
    console.log("asdad",e)
  }
  return (
    <AuroraBackground>

      <main className="flex flex-col items-center justify-center p-2 snap-y snap-mandatory">
      {/* Hero Card */}
      <ScrollWrapper>
        <div className="w-full !h-screen flex flex-col justify-center items-center" data-section="MG.">
          <div className="bg-white/35 w-full backdrop-blur-md rounded-md ring-2 ring-gray-200 p-6 shadow-xl inline-flex items-center justify-between flex-wrap max-w-[1200px]">
            <div className="w-full md:w-[50%] inline-flex justify-center">
              <div className="inline-flex justify-center w-[200px] h-[200px] md:min-w-[350px] md:min-h-[350px] rounded-full overflow-hidden relative drop-shadow-2xl ring-2 ring-gray-300">
                <Image
                src={"/mgHero2.png"}
                fill={true}
                style={{objectFit: "cover"}}
                alt="heroimage"
                />
              </div>
            </div>

            <div className="max-w-full md:w-[50%] inline-flex flex-col">
              <p className="text-xl md:text-3xl font-semibold text-gray-400">I'M</p>
              <p className="text-[26.9px] md:text-5xl font-bold uppercase">Magudeshwaran K</p>
              <p className="font-light text-xs md:text-base tracking-widest">Fullstack Engineer | System Design Thinker | UI Designer</p>
              <div className="inline-flex flex-wrap mt-2 gap-2">
                <Link href="https://github.com/Magudeshgit" target="_blank">
                <div className="ring-1 ring-gray-100 bg-gray-100 text-left p-1 rounded-md pl-3 pr-6 text-xs inline-flex items-center gap-2 text-gray-500 justify-start cursor-pointer">
                  <div className="rounded-full p-1 bg-gray-200">
                    <SiGithub className="w-4 h-4"/>
                  </div>
                  <p>Github</p>
                </div>
                </Link>

                <Link href="https://www.linkedin.com/in/magudesh-k-9325852b6/" target="_blank">
                <div className="ring-1 ring-gray-100 bg-gray-100 text-left p-1 rounded-md pl-3 pr-6 text-xs inline-flex items-center gap-2 text-gray-500 justify-start cursor-pointer">
                  <div className="rounded-full p-1 bg-gray-200">
                    <img src="linkedin.svg" alt="" className="w-4 h-4 text-gray-200 bg-gray-200 "/>
                  </div>
                  <p>LinkedIn</p>
                </div>
                </Link>
                {/* <div className="ring-1 ring-gray-100 bg-gray-100 text-left p-1 rounded-md pl-3 pr-6 text-xs inline-flex items-center gap-2 text-gray-500 justify-start cursor-pointer">
                  <div className="rounded-full p-1 bg-gray-200">
                    <SiInstagram className="w-4 h-4"/>
                  </div>
                  <p>Instagram</p>
                </div> */}
                <div className="ring-1 ring-gray-100 bg-gray-100 text-left p-1 rounded-md pl-3 pr-6 text-xs inline-flex items-center gap-2 text-gray-500 justify-start cursor-pointer">
                  <div className="rounded-full p-1 bg-gray-200">
                    <FileUser className="w-4 h-4"/>
                  </div>
                  <p>Download Resume</p>
                </div>
              </div>

              <p className="text-gray-500 text-sm/snug line mt-6 text-justify font-light">
                Self-driven web engineer with a disciplined and enthusiastic approach towards learning and implementing web technology, focused on exploring complex system architectures and delivering customer-centric user experiences. 
              </p>
              <div className="w-full">
              <Button className="mt-2 px-12 cursor-pointer w-full md:w-auto font-medium tracking-tight">
                Let's Connect
              </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollWrapper>
      
      {/* About Section */}
      <ScrollWrapper>
      <div 
      className="w-full flex items-center flex-col relative" 
      data-section="About MG."
      >
          <div className="w-full flex text-center justify-center mb-12">
            <p className="font-bold text-xl uppercase">ABOUT</p>
          </div>
          <Timeline data={[
            {
              title: "Quick Overview",
              content: 
              <div>
                <p className="text-justify">
                  I'm a self-driven web engineer with a disciplined yet enthusiastic approach to learning and applying web technologies. My work often bridges hands-on development and deeper architectural thinking, allowing me to contribute meaningfully across both frontend and backend systems. I’m especially drawn to building clean, scalable structures that prioritize performance and maintainability. Whether I’m designing user interfaces or integrating with complex systems, I focus on creating experiences that are purposeful, intuitive, and aligned with user needs. I'm constantly exploring new ideas, patterns, and workflows to sharpen my craft and deliver value through thoughtful engineering. <br/><br/> I'm a self-driven web engineer with a disciplined yet enthusiastic approach to learning and applying web technologies. My work often bridges hands-on development and deeper architectural thinking, allowing me to contribute meaningfully across both frontend and backend systems. I’m especially drawn to building clean, scalable structures that prioritize performance and maintainability. Whether I’m designing user interfaces or integrating with complex systems, I focus on creating experiences that are purposeful, intuitive, and aligned with user needs. I'm constantly exploring new ideas, patterns, and workflows to sharpen my craft and deliver value through thoughtful engineering.
                </p>
                <Link href={"/"} className="group transition-all duration-150 flex gap-1 mt-4 items-center font-medium text-sm hover:decoration-dotted text-violet-700">
                  Read Detailed Bio 
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-all"/>
                </Link>
              </div>,
            },
            {
              title: "Education",
              content: 
              <div className="inline-flex flex-col gap-y-16">
                <div className="inline-flex flex-col">
                  <div className="flex gap-2 items-center">
                    <GraduationCap className="w-4 h-4"/>
                    <p className="font-semibold">Pursuing Bachelor's in Technology - Artificial Intelligence & Data Science</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-light text-sm group transition-all group flex">From&nbsp;
                    <Link 
                    className="flex transition-all group-hover:backdrop-blur-md group-hover:rounded-xs group-hover:ring-1 group-hover:ring-gray-200 group-hover:shadow-xl group-hover:px-4 group-hover:font-medium" 
                    href="https://www.jsspsooty.com/" 
                    target="_blank" 
                    passHref={true}>
                      <div className="flex items-center gap-x-1">
                      Dr. Mahalingam College of Engineering & Technology, Pollachi, India(TN)
                      <LinkIcon className="w-3 h-3 group-hover:block hidden"/>
                      </div>
                      </Link>
                    </p>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <p className="font-semibold text-sm group transition-all">Score: 7.92 CGPA</p>
                    <p className="font-semibold group text-sm transition-all">5th Semester | 2023 - 2027</p>
                  </div>
                </div>

                <div className="flex flex-col">
                  {/* <p className="font-light group text-sm transition-all text-gray-400">2022-2023</p> */}
                  <div className="flex gap-2 items-center">
                    <University className="w-4 h-4"/>
                    <p className="font-semibold">Higher Secondary Education - Central Board of Secondary Education</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-light text-sm group transition-all group flex">From&nbsp;
                    <Link 
                    className="flex transition-all group-hover:backdrop-blur-md group-hover:rounded-xs group-hover:ring-1 group-hover:ring-gray-200 group-hover:shadow-xl group-hover:px-4 group-hover:font-medium" 
                    href="https://www.jsspsooty.com/" 
                    target="_blank" 
                    passHref={true}>
                      <div className="flex items-center gap-x-1">
                        J.S.S Public School, The Nilgris, India(TN)
                        <LinkIcon className="w-3 h-3 group-hover:block hidden"/>
                      </div>
                      </Link>
                    </p>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <p className="font-semibold text-sm group transition-all">Score: 68.2%</p>
                    <p className="font-semibold group text-sm transition-all">2022-2023</p>
                  </div>
                </div>

                <div className="flex flex-col">
                  {/* <p className="font-light group text-sm transition-all text-gray-400">2020-2021</p> */}
                  <div className="flex gap-2 items-center">
                    <School className="w-4 h-4"/>
                    <p className="font-semibold">Secondary School Education - Central Board of Secondary Education</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-light text-sm group transition-all group flex">From&nbsp;
                    <Link 
                    className="flex transition-all group-hover:backdrop-blur-md group-hover:rounded-xs group-hover:ring-1 group-hover:ring-gray-200 group-hover:shadow-xl group-hover:px-4 group-hover:font-medium" 
                    href="https://www.jsspsooty.com/" 
                    target="_blank" 
                    passHref={true}>
                      <div className="flex items-center gap-x-1">
                      J.S.S Public School, The Nilgris, India(TN)
                      <LinkIcon className="w-3 h-3 group-hover:block hidden"/>
                      </div>
                      </Link>
                    </p>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <p className="font-semibold text-sm group transition-all">Score: 60.2%</p>
                    <p className="font-semibold group text-sm transition-all">2023 - 2027</p>
                  </div>
                </div>
              </div>,
            },
            {
              title: "Internship",
              content: 
              <div>
                <div className="inline-flex flex-col">
                  <div className="flex gap-2 items-center">
                    {/* <GraduationCap className="w-4 h-4"/> */}
                    <p className="font-semibold">E-Governance Cell, Dr. Mahalingam College of Engineering & Technology, Pollachi, India(TN)</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-light text-sm group transition-all group flex">From&nbsp;
                    <Link 
                    className="flex transition-all group-hover:backdrop-blur-md group-hover:rounded-xs group-hover:ring-1 group-hover:ring-gray-200 group-hover:shadow-xl group-hover:px-4 group-hover:font-medium" 
                    href="https://www.jsspsooty.com/" 
                    target="_blank" 
                    passHref={true}>
                      <div className="flex items-center gap-x-1">
                      Dr. Mahalingam College of Engineering & Technology, Pollachi, India(TN)
                      <LinkIcon className="w-3 h-3 group-hover:block hidden"/>
                      </div>
                      </Link>
                    </p>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <p className="font-semibold text-sm group transition-all">Score: 7.92 CGPA</p>
                    <p className="font-semibold group text-sm transition-all">5th Semester | 2023 - 2027</p>
                  </div>
                </div>
              </div>,
            },
          ]}/>


      </div>
      </ScrollWrapper>

      </main>
    </AuroraBackground>
  );
}
