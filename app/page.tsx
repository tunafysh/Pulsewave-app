"use client"
import { Page } from "@/components/defs";
// import { ModeToggle } from "@/components/themetoggle";
import { BellIcon, HomeIcon, MagnifyingGlassIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion"
import {  useState } from "react";
const isPhone =
  typeof window !== "undefined"
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    : false;

export default function Home(){
  const [page, setPage] = useState<number>(Page.Home)

  return (
    <div className="h-screen bg-background flex flex-col w-screen">
      <div className="w-full bg-background h-full">
      </div>
    {!isPhone ? ( 
            <motion.div className="fixed flex items-center justify-evenly w-full bg-background h-[9%] bottom-0 z-10 border-t-4 border-x-4 border-primary rounded-t-xl text-primary" initial={{ translateY: 999 }} animate={{ translateY: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              <motion.li className="list-none" transition={{delay: 0.55}} initial={{translateY: 64}} animate={{translateY: 0}}><HomeIcon width={32} height={32}/></motion.li>
            <motion.li className="list-none" transition={{delay: 0.60}} initial={{translateY: 64}} animate={{translateY: 0}}><MagnifyingGlassIcon width={32} height={32}/></motion.li>
            <motion.li className="list-none" transition={{delay: 0.65}} initial={{translateY: 64}} animate={{translateY: 0}}><PlusIcon width={32} height={32}/></motion.li>
            <motion.li className="list-none" transition={{delay: 0.70}} initial={{translateY: 64}} animate={{translateY: 0}}><BellIcon width={32} height={32}/></motion.li>
            <motion.li className="list-none" transition={{delay: 0.75}} initial={{translateY: 64}} animate={{translateY: 0}}><PersonIcon width={32} height={32}/></motion.li>
            </motion.div>
    ): (
      <motion.div className="fixed flex-col items-center justify-center w-20 bg-background h-full left-0 z-10 border-r-4 border-primary text-primary py-4" initial={{x: -100}} animate={{x: 0}} transition={{duration: 0.5, delay: 1}}>
        <motion.div className="w-full h-full flex flex-col items-center justify-center" transition={{duration: 0.5, delay: 0.5, staggerChildren: 2}}>

            <motion.li className="list-none" transition={{delay: 1.55, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><HomeIcon className="navbaricons mb-4" width={32} height={32}/></motion.li>
            <motion.li className="list-none" transition={{delay: 1.60, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><MagnifyingGlassIcon className="navbaricons mb-4" width={32} height={32}/></motion.li>
            <motion.li className="list-none" transition={{delay: 1.65, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><PlusIcon className="navbaricons mb-4 " width={32} height={32}/></motion.li>
            <motion.li className="list-none" transition={{delay: 1.70, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><BellIcon className="navbaricons mb-4 " width={32} height={32}/></motion.li>
            <motion.li className="list-none" transition={{delay: 1.75, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><PersonIcon className="navbaricons mb-4 " width={32} height={32}/></motion.li>
            </motion.div>
        </motion.div>
    )}
    </div>
  );
}
