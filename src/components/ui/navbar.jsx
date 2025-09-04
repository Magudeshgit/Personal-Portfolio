'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, scale } from 'motion/react'
import Link from 'next/link'
import { Command } from 'lucide-react'
import { animate, delay } from 'motion'
import { useNavInfo } from '@/app/navigationcontext'

const Navbar = () => {
    const {navlogo} = useNavInfo()
    const [mobNav, setMobNav] = useState(false)
    const [navColor, setnavColor] = useState("transparent")
    useEffect(()=>{
      window.addEventListener('scroll', changeNavColor)
    })
    function changeNavColor()
    {
      if (window.scrollY > 50)
      {
        setnavColor("bg-white/35 backdrop-blur-md shadow-sm ring-1 ring-gray-200");
      }
      else
      {
        setnavColor("transparent")
      }
    }
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
    <nav className={`w-full fixed top-0 left-0 z-50 py-2 p-2 md:px-12 ${mobNav?"!bg-white":"transparent"} `}>
      <div className={`w-full transition-colors duration-300 px-4 py-4 flex justify-between ${navColor} rounded-md`}>
          <div className="list-none hidden md:flex font-semibold text-sm gap-6 text-gray-500 items-center">
            {
                navitems.map(item=>
                {
                    if (item.position === "left") 
                    {
                        return (
                    <li className="p-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight" key={item.name}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>)               
                    }
                })
            }
          </div>
          <div className='overflow-hidden'>
          <motion.div
          key={navlogo}
            initial={{translateY: "100%", opacity: 0}}
            animate={{translateY: "0", opacity: 1}}


          >
            <p className={`font-bold text-xl uppercase`}>{navlogo}</p>
          </motion.div>
          </div>
          <div className="list-none md:flex font-semibold text-sm gap-6 text-gray-500 items-center hidden">
            {
                navitems.map(item=>
                {
                    if (item.position === "right")
                    {
                        return (
                    <li className="p-2 rounded-md transition-all delay-75 hover:bg-gray-200 tracking-tight" key={item.name}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>)               
                    }
                })
            }
          </div>
          <div className="flex md:hidden items-center justify-center">
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
          </div>
        </nav>
  )
}

export default Navbar