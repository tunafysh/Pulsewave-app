import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Page } from "../defs";
import { Dispatch, SetStateAction } from "react";

export default function SettingsScreen({setPage}: {setPage: Dispatch<SetStateAction<number>>}) {
    return (
        <div className="flex flex-row p-4 text-primary">
            <ArrowLeftIcon width={32} height={32} onClick={() => setPage(Page.Profile)}/>
            <h1 className="text-2xl font-semibold ml-4 text-foreground"> Settings</h1>
        </div>
    );
}