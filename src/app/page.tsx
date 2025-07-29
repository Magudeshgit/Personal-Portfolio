"use client"
import Image from "next/image";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Globe, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full"
        >
      <main className="px-6 md:px-12 flex flex-col w-full items-center">
      <div className="bg-white/35 w-full backdrop-blur-md rounded-md ring-2 ring-gray-200 mt-12 p-6 shadow-xl flex items-center justify-between flex-wrap max-w-[1200px]">
      <div className="w-full md:w-[50%] inline-flex justify-center">
        <div className="inline-flex justify-center w-[200px] h-[200px] md:min-w-[350px] md:min-h-[350px] rounded-full overflow-hidden relative drop-shadow-2xl ring-2 ring-gray-300">
          <Image
          src={"/mgHero.jpg"}
          fill={true}
          style={{objectFit: "cover"}}
          alt="heroimage"
          />
        </div>
      </div>


        <div className="max-w-full md:w-[50%] flex flex-col">
          <p className="text-xl font-semibold text-gray-400">I'M</p>
          <p className="text-[26.9px] md:text-5xl font-bold uppercase">Magudeshwaran K</p>
          <p className="font-light text-xs">Fullstack Engineer | System Design Thinker | UI Designer</p>
          <div className="inline-flex mt-2">
            <div className="ring-1 ring-gray-100 bg-gray-100 text-left rounded-md pl-3 pr-6 py-1 text-xs inline-flex items-center gap-2 text-gray-500 justify-start cursor-pointer">
              <div className="rounded-full p-1 bg-gray-200">
                <Globe className="w-3 h-3"/>
              </div>
              <p>Recent Blog: Advanced User Profiling Using Behavioral Pattern Analysis</p>
              <ChevronRight className="w-3 h-3"/>
            </div>
          </div>

          <p className="text-gray-500 text-sm/snug line mt-6 text-justify font-light">Self-driven web engineer with a disciplined and enthusiastic approach towards learning and implementing web technology, focused on 
            exploring complex system architectures and delivering customer-centric user experiences. </p>
          <div className="w-full">
          <Button className="mt-2 px-12 cursor-pointer w-full md:w-auto">
            Let's Connect
          </Button>
          </div>
        </div>
      </div>
      </main>
          
      </motion.div>
    </AuroraBackground>
  );
}
