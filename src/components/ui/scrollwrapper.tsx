import { useScroll } from 'motion/react';
import React, { useRef, useState, cloneElement } from 'react'
import { useNavInfo } from '@/app/navigationcontext';


type ScrollWrapperProps = {
  children: React.ReactElement<{ currnav?: string }>
};

const ScrollWrapper = ({children}: ScrollWrapperProps) => {
  const {navlogo, setnavlogo} = useNavInfo()
  const ref = useRef(null);
  const [currnav, setcurrnav] = useState<string>("")
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  scrollYProgress.on('change', (e)=>{
    if (e > 0)
    {
      const changedNav = ref.current.childNodes[0].getAttribute("data-section")
      if (navlogo != changedNav)
      {
        setnavlogo(changedNav)
      }
    }
  })

  return (
    <div ref={ref}>
        {cloneElement(children, { currnav })}
    </div>
  )
}

export default ScrollWrapper