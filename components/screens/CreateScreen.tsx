import { PersonIcon } from "@radix-ui/react-icons";
import { Page, Settings } from "../defs";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Dispatch, SetStateAction } from "react";

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function CreateScreen({data, setPage, image}: {data: Settings, setPage: Dispatch<SetStateAction<number>>, image: boolean}) {
    if(image){

        return(
            <div className="w-full h-full">
            <div className="w-full h-16 p-4 flex flex-col">
                <h1 className="text-3xl font-semibold">Create</h1>
            </div>
                <div className="flex w-full h-full justify-center items-center">
                    <p className="text-[#F54B64] font-bold">Camera feed not implemented yet</p>
                </div>
            </div>
        )
    }
    else {

        return(
            <div className="w-full h-full">
        <div className="w-full h-16 p-4 flex flex-col">
            <h1 className="text-3xl font-semibold">Create</h1>
            <div className="flex w-full justify-center">
            <div className={`min-h-[300px] max-h-[400px] p-4 w-[400px] bg-accent rounded-md mb-5 mt-12`}>
            <div className="flex flex-col">
            <div className="flex flex-row">
                <PersonIcon className="text-primary rounded-full border-2 border-primary p-0.5" width={32} height={32} />
                    <div>
                        <h1 className="ml-3 text-md font-bold">{capitalizeFirstLetter(data.name)}<span className="dark:text-white/50 text-black/35">{" "}@{data.handle}</span></h1>
                        <h1 className="ml-3 font-bold text-sm dark:text-white/50 text-black/35">posted on {new Date().getMonth()}/{new Date().getDate()}/{ new Date().getFullYear()}</h1>
                    </div>
            </div>
                <h1 className="text-xl font-bold">test</h1>
                <p className="dark:text-white/50 text-black/45 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique sequi provident sit iusto at assumenda rem libero cupiditate, facere officia magnam tempore quaerat? Pariatur, accusantium. Odit illo mollitia nulla!</p>
            </div>
            <div id="actions" className=" h-[50px] mt-4 w-full bg-secondary rounded-md flex flex-row items-center justify-end  p-3 gap-2">
            <Button variant={"destructive"} onClick={() => setPage(Page.Home)} className="font-bold hover:bg-[#F54B64]/80 bg-[#F54B64]">Cancel</Button>
            <Button  onClick={() => {toast.warning("Posting is not implemented because there's no database :/")}} variant={"destructive"} className="font-bold bg-[#01C38D] hover:bg-[#01C38D]/80">Post</Button>
            </div>
            </div>
            </div>
            </div>
    </div>
    );
}
}