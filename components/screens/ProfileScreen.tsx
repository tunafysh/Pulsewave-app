import { GearIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";
import { Page } from "../defs";

export default function ProfileScreen({setPage}: {setPage: Dispatch<SetStateAction<number>>}) {
    return (<div className="w-full h-full">
        <div className="w-full h-16 p-4 flex  justify-between ">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <GearIcon height={24} width={24} className="text-primary select-none" onClick={() => { setPage(Page.Settings) }} />
        </div>
    </div>);
}