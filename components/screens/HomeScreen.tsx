import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../card";
import { Settings } from "../defs";

export default function HomeScreen({data}: {data: Settings}) {
    const [titlebarText, setTitlebarText] = useState(["", ""])
    useEffect(() => {
        setTitlebarText(["Welcome back ", data.name])
        setTimeout(() => {
            setTitlebarText(["Pulse", "wave"])
        }, 4500)
    }, [data])
    return (
        <div className="p-4 flex items-center flex-col">
            <motion.h1  animate={{opacity: [0, 1, 1, 0, 0, 1]}} transition={{ duration: 7, delay: 1}} className="mb-6 text-3xl w-full font-semibold">{titlebarText[0]}<span className="text-primary">{titlebarText[1]}</span></motion.h1>
            <div id="card-container" className="min-h-full">
            <Card data={{title: "test", image: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel libero laborum non aliquam doloremque, nam, esse voluptate obcaecati tenetur recusandae animi modi fugit neque veritatis ut quod, nemo totam quam.", publisher: data.name, handle: data.handle}} />
            <Card data={{title: "test", image: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel libero laborum non aliquam doloremque, nam, esse voluptate obcaecati tenetur recusandae animi modi fugit neque veritatis ut quod, nemo totam quam.", publisher: data.name, handle: data.handle}} />
            <Card data={{title: "test", image: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel libero laborum non aliquam doloremque, nam, esse voluptate obcaecati tenetur recusandae animi modi fugit neque veritatis ut quod, nemo totam quam.", publisher: data.name, handle: data.handle}} />
            </div>
        </div>
    )
}   