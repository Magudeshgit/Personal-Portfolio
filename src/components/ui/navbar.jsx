'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence, scale } from 'motion/react'
import Link from 'next/link'
import { Command } from 'lucide-react'
import { animate, delay } from 'motion'

const Navbar = () => {
    const [mobNav, setMobNav] = useState(false)
    const navitems = [
        {
          name: "About",
          link: "/",
          position: "right"
        },
        {
          name: "Projects",
          link: "/",
          position: "right"
        },
        {
          name: "Blog",
          link: "/",
          position: "left"
        },
        {
          name: "Achievements",
          link: "/",
          position: "left"
        },
      ]
  return (
    <nav className={`flex justify-between items-center w-full absolute top-0 left-0 z-50 py-6 p-6 md:px-12 transition-colors duration-300 ${mobNav?"bg-white":"transparent"}`}>
          <div className="list-none hidden md:flex font-semibold text-sm gap-6 text-gray-500 items-center">
            {
                navitems.map(item=>
                {
                    if (item.position === "left")
                    {
                        return (
                    <li className="p-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight">
                        <Link href={item.link}>{item.name}</Link>
                    </li>)               
                    }
                })
            }
          </div>
          <div>
            <p className={`font-bold text-xl uppercase`}>MG.</p>
          </div>
          <div className="list-none md:flex font-semibold text-sm gap-6 text-gray-500 items-center hidden">
            {
                navitems.map(item=>
                {
                    if (item.position === "right")
                    {
                        return (
                    <li className="p-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight">
                        <Link href={item.link}>{item.name}</Link>
                    </li>)               
                    }
                })
            }
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
            animate={{opacity: 1, translateY: 0, }}
            exit={{opacity: 1, translateY: "-150%"}}
            transition={{duration: .3, type: 'spring'}}
            key="item1"
            >
            {
            navitems.map(item=>
            {
                return (
                <li className="py-2 rounded-md transition-all delay-75 hover:bg-gray-200 font-semibold text-sm text-gray-500 tracking-tight" key={item.name}>
                    <Link href={item.link}>{item.name}</Link>
                </li>  ) 
            })
            }
            </motion.div>
            :<></>}
            </AnimatePresence>
          </div>
        </nav>
  )
}

export default Navbar