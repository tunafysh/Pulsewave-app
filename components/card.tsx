import { BookmarkIcon, PersonIcon, ThickArrowDownIcon, ThickArrowUpIcon } from "@radix-ui/react-icons";

interface CardData {
    title: string,
    image: string | false,
    description: string,
    publisher: string,
    handle: string
}

// interface CardActions {
//     saved: boolean
//     liked: boolean
// }

export default function Card({data}: {data: CardData}){
    //const [actions, setActions] = useState<CardActions>({saved: false, liked: false})

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <div className={`min-h-[150px] max-h-[300px] p-4 w-[450px] bg-accent rounded-md mb-5`}>
            <div className="flex flex-row">
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
            <div id="actions" className="min-h-[150px] max-h-[300px] w-[100px] bg-secondary rounded-md flex flex-col items-center justify-evenly">
            <ThickArrowUpIcon width={32} height={32}/>
            <hr />
            <BookmarkIcon width={32} height={32}/>
            <hr />
            <ThickArrowDownIcon width={32} height={32}/>
            </div>
            </div>
        </div>
    )
}