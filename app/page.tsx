"use client"
import { Page } from "@/components/defs";
import CreateScreen from "@/components/screens/CreateScreen";
import HomeScreen from "@/components/screens/HomeScreen";
import NotificationScreen from "@/components/screens/NotificationScreen";
import ProfileScreen from "@/components/screens/ProfileScreen";
import SearchScreen from "@/components/screens/SearchScreen";
import SettingsScreen from "@/components/screens/SettingsScreen";
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
    <div className="h-screen bg-background flex flex-row w-screen">
    {isPhone && page != Page.Settings ? ( 
            <motion.div className="fixed flex items-center justify-evenly w-full bg-background h-[9%] bottom-0 z-10 border-t-4 border-x-4 border-primary rounded-t-xl text-primary" initial={{ translateY: 999 }} animate={{ translateY: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
            <motion.li onClick={() => setPage(Page.Home)} className="list-none select-none" transition={{delay: 0.55}} initial={{translateY: 64}} animate={{translateY: 0}}><HomeIcon width={32} height={32}/></motion.li>
            <motion.li onClick={() => setPage(Page.Search)} className="list-none select-none" transition={{delay: 0.60}} initial={{translateY: 64}} animate={{translateY: 0}}><MagnifyingGlassIcon width={32} height={32}/></motion.li>
            <motion.li onClick={() => setPage(Page.Add)} className="list-none select-none" transition={{delay: 0.65}} initial={{translateY: 64}} animate={{translateY: 0}}><PlusIcon width={32} height={32}/></motion.li>
            <motion.li onClick={() => setPage(Page.Notifications)} className="list-none select-none" transition={{delay: 0.70}} initial={{translateY: 64}} animate={{translateY: 0}}><BellIcon width={32} height={32}/></motion.li>
            <motion.li onClick={() => setPage(Page.Profile)} className="list-none select-none" transition={{delay: 0.75}} initial={{translateY: 64}} animate={{translateY: 0}}><PersonIcon width={32} height={32}/></motion.li>
            </motion.div>
    ): page != Page.Settings? (
      <motion.div className="flex-col items-center justify-center w-20 bg-background h-full left-0 z-10 border-r-4 border-primary text-primary py-4" initial={{x: -100}} animate={{x: 0}} transition={{duration: 0.5, delay: 0.2 }}>
        <motion.div className="w-full h-full flex flex-col items-center justify-center" transition={{duration: 0.5, delay: 0.5, staggerChildren: 2}}>

            <motion.li onClick={() => setPage(Page.Home)} className="list-none" transition={{delay: 0.55, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><HomeIcon className="navbaricons mb-4 select-none" width={32} height={32}/></motion.li>
            <motion.li onClick={() => setPage(Page.Search)} className="list-none" transition={{delay: 0.60, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><MagnifyingGlassIcon className="navbaricons mb-4 select-none" width={32} height={32}/></motion.li>
            <motion.li onClick={() => setPage(Page.Add)} className="list-none" transition={{delay: 0.65, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><PlusIcon className="navbaricons mb-4 select-none" width={32} height={32}/></motion.li>
            <motion.li onClick={() => setPage(Page.Notifications)} className="list-none" transition={{delay: 0.70, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><BellIcon className="navbaricons mb-4 select-none" width={32} height={32}/></motion.li>
            <motion.li onClick={() => setPage(Page.Profile)} className="list-none" transition={{delay: 0.75, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><PersonIcon className="navbaricons mb-4 select-none" width={32} height={32}/></motion.li>
            </motion.div>
        </motion.div>
    ): <></>}
          <motion.div className=" float-right w-full bg-background h-full" transition={{duration: 0.5, ease: 'easeInOut'}}>
        {page === Page.Add? (<CreateScreen/>): page === Page.Profile? (<ProfileScreen setPage={setPage}/>): page === Page.Search? (<SearchScreen/>): page === Page.Notifications? (<NotificationScreen/>): page === Page.Settings? (<SettingsScreen setPage={setPage}/>): <HomeScreen/>}
      </motion.div>
    </div>
  );
}
