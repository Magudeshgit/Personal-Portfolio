'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence, scale } from 'motion/react'
import Link from 'next/link'
import { Command } from 'lucide-react'
import { animate, delay } from 'motion'

const Navbar = () => {
    const [mobNav, setMobNav] = useState(false)
  return (
    <nav className={`flex justify-between items-center w-full absolute top-0 left-0 z-50 py-6 p-6 md:px-12 ${mobNav?"bg-white":"transparent"}`}>
          <div className="list-none hidden md:flex font-semibold text-sm gap-6 text-gray-500 items-center">
            <li className="p-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight">
              <Link href={"/"}>Blog</Link>
            </li>            

            <li className="p-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight">
              <Link href={"/"}>Achievements</Link>
            </li>            
          </div>
          <div>
            <p className={`font-bold text-xl uppercase`}>MG.</p>
          </div>
          <div className="list-none md:flex font-semibold text-sm gap-6 text-gray-500 items-center hidden">
            <li className="p-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight">
              <Link href={"/"}>About</Link>
            </li>            

            <li className="p-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight">
              <Link href={"/"}>Projects</Link>
            </li> 
          </div>
          <div className="flex md:hidden">
            <motion.div
            whileTap={{scale: 0.85}}
            onClick={()=>setMobNav(!mobNav)}
            >
            <Command className="w-4 h-4 cursor-pointer"/>
            </motion.div>
            
            <AnimatePresence>
            {mobNav?
            <motion.div 
            className='w-full bg-white absolute left-0 top-[100%] list-none text-sm p-6 -z-10'
            initial={{opacity: 1, translateY: "-100%"}}
            animate={{opacity: 1, translateY: 0}}
            exit={{opacity: 1, translateY: "-100%"}}
            transition={{duration: .3}}
            key="item1"
            >
            <li className="md:px-2 py-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight border-b-2 border-gray-50">
              <Link href={"/"}>Blog</Link>
            </li>            
            <li className="md:px-2 py-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight border-b-2 border-gray-50">
              <Link href={"/"}>Achievements</Link>
            </li>   
            <li className="md:px-2 py-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight border-b-2 border-gray-50">
              <Link href={"/"}>About</Link>
            </li>            
            <li className="md:px-2 py-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight border-b-2 border-gray-50">
              <Link href={"/"}>Projects</Link>
            </li> 
            </motion.div>
            :<></>}
            </AnimatePresence>
          </div>
        </nav>
  )
}

export default Navbar