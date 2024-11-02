import { PersonIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react"

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
}

let isPhone: boolean;

export default function Card({data}: {data: CardData}){
    const [actions, setActions] = useState<CardActions>({saved: false, liked: false})

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        isPhone =
            typeof window !== "undefined"
            ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent,
            )
    : false;
    })

    return(
        <div className={`min-h-[150px] max-h-[300px] p-4 w-[400px] bg-accent rounded-md`}>
            <div className="flex flex-row">
            <PersonIcon className="text-primary rounded-full border-2 border-primary p-0.5" width={32} height={32} />
            <div>
            <h1 className="ml-3 text-md font-bold">{capitalizeFirstLetter(data.publisher)}<span className="text-white/50">{" "}@{data.handle}</span></h1>
            <h1 className="ml-3 font-bold text-sm text-white/50">uploaded on {new Date().getMonth()}/{new Date().getDate()}/{ new Date().getFullYear()}</h1>
            </div>
            </div>
            <h1 className="text-xl font-bold">{capitalizeFirstLetter(data.title)}</h1>
            <p className="text-white/50 font-semibold">{data.description}</p>
        </div>
    )
}