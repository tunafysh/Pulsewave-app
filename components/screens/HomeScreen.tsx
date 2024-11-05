import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Card from "../card";
import { Settings } from "../defs";

export default function HomeScreen({data, setSettings, refreshed}: {data: Settings, setSettings: Dispatch<SetStateAction<Settings>>, refreshed: boolean}) {
    const [titlebarText, setTitlebarText] = useState(["", ""])
    useEffect(() => {
        if(!data.homeloaded){
            setTitlebarText(["Welcome back ", data.name])
            setTimeout(() => {
                setTitlebarText(["Pulse", "wave"])
                setSettings({...data, homeloaded: true})
            }, 4500)
        }
        else{
            setTitlebarText(["Pulse", "wave"])
        }
    }, [data])
    
    return (
        <div className="p-4 flex items-center flex-col">
            <motion.h1  animate={{opacity: !data.homeloaded?[0, 1, 1, 0, 0, 1]: 1}} transition={{ duration: 7, delay: 1}} className="mb-6 text-3xl w-full font-semibold">{titlebarText[0]}<span className="text-primary">{titlebarText[1]}</span></motion.h1>
            <div id="card-container" className="min-h-full">
            {refreshed? (
                <Card data={{title: "This was not here before", image: false, description: "The page must've refreshed.", publisher: data.name, handle: data.handle}} />
            ):
            (
                <></>
            )}
            <Card data={{title: "test", image: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel libero laborum non aliquam doloremque, nam, esse voluptate obcaecati tenetur recusandae animi modi fugit neque veritatis ut quod, nemo totam quam.", publisher: data.name, handle: data.handle}} />
            <Card data={{title: "test", image: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel libero laborum non aliquam doloremque, nam, esse voluptate obcaecati tenetur recusandae animi modi fugit neque veritatis ut quod, nemo totam quam.", publisher: data.name, handle: data.handle}} />
            <Card data={{title: "test", image: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel libero laborum non aliquam doloremque, nam, esse voluptate obcaecati tenetur recusandae animi modi fugit neque veritatis ut quod, nemo totam quam.", publisher: data.name, handle: data.handle}} />
            </div>
        </div>
    )
}   