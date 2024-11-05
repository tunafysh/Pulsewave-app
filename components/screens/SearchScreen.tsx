import { CountdownTimerIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";

export default function SearchScreen() {
    return <div className="w-full h-full p-4">
        <div className="w-full h-14 rounded-md px-2 relative text-accent">
            <MagnifyingGlassIcon className="absolute left-4 top-[26%] transform -translate-y-1/3 h-5 w-5" />
            <Input placeholder="Search anything" className="border-primary border-2 placeholder:text-accent placeholder:font-semibold pl-8 font-semibold"/>
        </div>
        <div className="px-2 w-full">

        <p className="mt-2 text-lg font-bold">Recent searches</p>
        <div className="flex flex-row w-full h-[50px] items-center gap-2 mt-2">
        <CountdownTimerIcon width={24} className="text-primary" height={24}/>
        <p className="font-semibold">[insert original search query here]</p>
        </div>
        <hr />
        <div className="flex flex-row w-full h-[50px] items-center gap-2 mt-2">
        <CountdownTimerIcon width={24} className="text-primary" height={24}/>
        <p className="font-semibold">[insert original search query here]</p>
        </div>
        <hr />
        <div className="flex flex-row w-full h-[50px] items-center gap-2 mt-2">
        <CountdownTimerIcon width={24} className="text-primary" height={24}/>
        <p className="font-semibold">[insert original search query here]</p>
        </div>
        <hr />
        <div className="flex flex-row w-full h-[50px] items-center gap-2 mt-2">
        <CountdownTimerIcon width={24} className="text-primary" height={24}/>
        <p className="font-semibold">[insert original search query here]</p>
        </div>
        </div>
    </div>;
}