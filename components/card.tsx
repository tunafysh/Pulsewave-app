import { BookmarkFilledIcon, BookmarkIcon, PersonIcon, TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";

interface CardData {
    title: string,
    image: string | false,
    description: string,
    publisher: string,
    handle: string
}

interface CardActions {
    saved: boolean
    liked: boolean
    disliked: boolean
}

export default function Card({data}: {data: CardData}){
    const [actions, setActions] = useState<CardActions>({saved: false, liked: false, disliked: false})

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return(
        <div className={`min-h-[150px] max-h-[300px] p-4 w-[400px] bg-accent rounded-md mb-5`}>
            
            <div className="flex flex-col">
            <div className="flex flex-row">
            <PersonIcon className="text-primary rounded-full border-2 border-primary p-0.5" width={32} height={32} />
            <div>
            <h1 className="ml-3 text-md font-bold">{capitalizeFirstLetter(data.publisher)}<span className="dark:text-white/50 text-black/35">{" "}@{data.handle}</span></h1>
            <h1 className="ml-3 font-bold text-sm dark:text-white/50 text-black/35">uploaded on {new Date().getMonth()}/{new Date().getDate()}/{ new Date().getFullYear()}</h1>
            </div>
            </div>

            <h1 className="text-xl font-bold">{capitalizeFirstLetter(data.title)}</h1>
            <p className="dark:text-white/50 text-black/45 font-semibold">{data.description}</p>
            </div>
            <div id="actions" className=" h-[50px] mt-4 w-full bg-secondary rounded-md flex flex-row items-center justify-between  p-2">
                <div className="flex flex-row">
            <motion.div transition={{duration: 1}} onClick={() => setActions({...actions, liked: !actions.liked, disliked: false})}>
            <TriangleUpIcon width={38} height={50} className={`mt-1 ${actions.liked? "text-[#53ab8b]": "text-white"}`}/>
            </motion.div>
            <hr />
            <motion.div transition={{duration: 1}} onClick={() => setActions({...actions, disliked: !actions.disliked, liked: false})}>
            <TriangleDownIcon width={38} height={50} className={`mb-1 ${actions.disliked? "text-[#f8687a]": "text-white"}`}/>
            </motion.div>
                </div>
            <motion.div transition={{duration: 1}} onClick={() => setActions({...actions, saved: !actions.saved})}>
            {actions.saved == true? <BookmarkFilledIcon width={32} height={32}/>: <BookmarkIcon width={32} height={32}/>}
            </motion.div>
            </div>
        </div>
    )
}