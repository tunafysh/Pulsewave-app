import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../card";

export default function HomeScreen() {
    const [titlebarText, setTitlebarText] = useState(["", ""])
    useEffect(() => {
        setTitlebarText(["Welcome back ", "Hanan"])
        setTimeout(() => {
            setTitlebarText(["Pulse", "wave"])
        }, 4500)
    }, [])
    return (
        <div className="p-4 flex items-center flex-col">
            <motion.h1  animate={{opacity: [0, 1, 1, 0, 0, 1]}} transition={{ duration: 7, delay: 1}} className="mb-6 text-3xl w-full font-semibold">{titlebarText[0]}<span className="text-primary">{titlebarText[1]}</span></motion.h1>
            <div id="card-container" className="min-h-full">
            <Card data={{title: "test", image: false, description: "this is just a test to see if content is rendered properly. because i have no trust in myself. i'm just testing.", publisher: "Hanan", handle: "hanan"}} />
            </div>
        </div>
    )
}   