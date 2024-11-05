"use client"
import { Page, Settings } from "@/components/defs";
import CreateScreen from "@/components/screens/CreateScreen";
import HomeScreen from "@/components/screens/HomeScreen";
import NotificationScreen from "@/components/screens/NotificationScreen";
import ProfileScreen from "@/components/screens/ProfileScreen";
import IntroScreen from "@/components/screens/IntroScreen";
import SearchScreen from "@/components/screens/SearchScreen";
import { BellIcon, HomeIcon, MagnifyingGlassIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion"
import { useState } from "react";
import { useTheme } from "next-themes"

const isPortrait = () => window.matchMedia("(max-width: 768px) and (max-height: 1024px)").matches;

interface pageActions {
  Refreshed: boolean
  Focused: boolean
  image: boolean
  clearnotifs: boolean
  easter: boolean
}

export default function Home(){
  const [page, setPage] = useState<number>(Page.Home)
  const { theme } = useTheme()
  const [settings, setSettings] = useState<Settings>({darkmode: theme == "dark"? true: false, name: "Hanan", handle: "hanan", homeloaded: false})  
  const [pageActions, setPageActions] = useState<pageActions>({Refreshed: false, Focused: false, image: false, clearnotifs: false, easter: false});
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);

  function handleMouseDown(page: number) {
    const timer = setTimeout(() => {
      console.log('Long press detected '+page);

      switch(page){
        case Page.Add:
          setPageActions({...pageActions, image: true})
          navigator.vibrate(100);
          setPage(Page.Add)
          break;
        case Page.Search:
          setPageActions({...pageActions, Focused: true})
          navigator.vibrate(100);
          setPage(Page.Search)
          break;
        case Page.Notifications:
          setPageActions({...pageActions, clearnotifs: true})
          navigator.vibrate(100);
          setPage(Page.Notifications)
          break;
        case Page.Home:
          setPageActions({...pageActions, Refreshed: true})
          navigator.vibrate(100);
          setPage(Page.Home)
          break;
          case Page.Profile:
          setPageActions({...pageActions, easter: true})
          navigator.vibrate(100);
          setPage(Page.Profile)
          break;
      }

    }, 1000); // 1000 ms for a 1-second long press
    setPressTimer(timer);
  };


  function handleMouseUp(page: number) {
    if(pressTimer){
      clearTimeout(pressTimer);
      setPressTimer(null);
      switch(page){
        case Page.Add:
          setPageActions({...pageActions, Focused: false, easter: false})
          break;
        case Page.Search:
          setPageActions({...pageActions, image: false, easter: false})
          break;
          case Page.Profile:
          setPageActions({...pageActions, image: false, Focused: false})
          break;
      }
    }else{
      setPage(page)
    }
  };

  const handleMouseLeave = () => {
    if(pressTimer){
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };  

  return (
    <div className="h-screen bg-background flex flex-row w-screen overflow-x-hidden">
    {isPortrait() && page != (Page.Settings || Page.Intro) ? ( 
            <motion.div className="fixed flex items-center justify-evenly w-full bg-background h-[9%] bottom-0 z-10 border-t-4 border-x-4 border-primary rounded-t-xl text-primary" initial={{ translateY: 999 }} animate={{ translateY: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
            <motion.li onMouseDown={() => handleMouseDown(Page.Home)} onMouseUp={() => handleMouseUp(Page.Home)} onMouseLeave={handleMouseLeave} className="list-none select-none cursor-pointer" transition={{delay: 0.55}} initial={{translateY: 64}} animate={{translateY: 0}}><HomeIcon width={32} height={32}/></motion.li>
            <motion.li onMouseDown={() => handleMouseDown(Page.Search)} onMouseUp={() => handleMouseUp(Page.Search)} onMouseLeave={handleMouseLeave} className="list-none select-none cursor-pointer" transition={{delay: 0.60}} initial={{translateY: 64}} animate={{translateY: 0}}><MagnifyingGlassIcon width={32} height={32}/></motion.li>
            <motion.li onMouseDown={() => handleMouseDown(Page.Add)} onMouseUp={() => handleMouseUp(Page.Add)} onMouseLeave={handleMouseLeave} className="list-none select-none cursor-pointer" transition={{delay: 0.65}} initial={{translateY: 64}} animate={{translateY: 0}}><PlusIcon width={32} height={32}/></motion.li>
            <motion.li onMouseDown={() => handleMouseDown(Page.Notifications)} onMouseUp={() => handleMouseUp(Page.Notifications)} onMouseLeave={handleMouseLeave} className="list-none select-none cursor-pointer" transition={{delay: 0.70}} initial={{translateY: 64}} animate={{translateY: 0}}><BellIcon width={32} height={32}/></motion.li>
            <motion.li onMouseDown={() => handleMouseDown(Page.Profile)} onMouseUp={() => handleMouseUp(Page.Profile)} onMouseLeave={handleMouseLeave} className="list-none select-none cursor-pointer" transition={{delay: 0.75}} initial={{translateY: 64}} animate={{translateY: 0}}><PersonIcon width={32} height={32}/></motion.li>
            </motion.div>
    ): page != Page.Settings? (
      <motion.div className="fixed flex-col items-center justify-center w-20 bg-background h-full left-0 z-10 border-r-4 border-primary text-primary py-4" initial={{x: -100}} animate={{x: 0}} transition={{duration: 0.5, delay: 0.2 }}>
        <motion.div className="w-full h-full flex flex-col items-center justify-center" transition={{duration: 0.5, delay: 0.5, staggerChildren: 2}}>

            <motion.li onMouseDown={() => handleMouseDown(Page.Home)} onMouseUp={() => handleMouseUp(Page.Home)} onMouseLeave={handleMouseLeave} onClick={() => setPage(Page.Home)} className="list-none" transition={{delay: 0.55, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><HomeIcon className="navbaricons mb-4 select-none cursor-pointer" width={32} height={32}/></motion.li>
            <motion.li onMouseDown={() => handleMouseDown(Page.Search)} onMouseUp={() => handleMouseUp(Page.Search)} onMouseLeave={handleMouseLeave} onClick={() => setPage(Page.Search)} className="list-none" transition={{delay: 0.60, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><MagnifyingGlassIcon className="navbaricons mb-4 select-none cursor-pointer" width={32} height={32}/></motion.li>
            <motion.li onMouseDown={() => handleMouseDown(Page.Add)} onMouseUp={() => handleMouseUp(Page.Add)} onMouseLeave={handleMouseLeave} onClick={() => setPage(Page.Add)} className="list-none" transition={{delay: 0.65, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><PlusIcon className="navbaricons mb-4 select-none cursor-pointer" width={32} height={32}/></motion.li>
            <motion.li onMouseDown={() => handleMouseDown(Page.Notifications)} onMouseUp={() => handleMouseUp(Page.Notifications)} onMouseLeave={handleMouseLeave} onClick={() => setPage(Page.Notifications)} className="list-none" transition={{delay: 0.70, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><BellIcon className="navbaricons mb-4 select-none cursor-pointer" width={32} height={32}/></motion.li>
            <motion.li onMouseDown={() => handleMouseDown(Page.Profile)} onMouseUp={() => handleMouseUp(Page.Profile)} onMouseLeave={handleMouseLeave} onClick={() => setPage(Page.Profile)} className="list-none" transition={{delay: 0.75, ease: 'easeInOut'}} initial={{marginRight: 999}} animate={{marginRight: 0}}><PersonIcon className="navbaricons mb-4 select-none cursor-pointer" width={32} height={32}/></motion.li>
            </motion.div>
        </motion.div>
    ): <></>}
          <motion.div className={`float-right w-full bg-background h-full ${isPortrait() || page == Page.Settings? "": "pl-20"} `} transition={{duration: 0.5, ease: 'easeInOut'}}>
        {page === Page.Add? (<CreateScreen setPage={setPage} image={pageActions.image} data={settings}/>): page === Page.Profile? (<ProfileScreen settings={settings} easter={pageActions.easter} setSettings={setSettings}/>): page === Page.Search? (<SearchScreen focused={pageActions.Focused}/>): page === Page.Notifications? (<NotificationScreen clearnotifs={pageActions.clearnotifs}/>): page === Page.Intro? (<IntroScreen/>): <HomeScreen refreshed={pageActions.Refreshed} setSettings={setSettings} data={settings}/>}
      </motion.div>
    </div>
  );
}
