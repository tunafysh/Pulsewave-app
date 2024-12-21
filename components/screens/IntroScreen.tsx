import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Page, Settings } from "../defs";
interface IntroScreenProps {
    settings: Settings;
    setPage: Dispatch<SetStateAction<number>>;
    setSettings: Dispatch<SetStateAction<Settings>>;
    setFirstTime: Dispatch<SetStateAction<boolean>>
}

export default function IntroScreen({ settings, setPage, setSettings, setFirstTime }: IntroScreenProps) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen ">
            <div className="flex flex-col justify-center items-center h-screen gap-2">
                <div className="flex-row">
                <h1 className="text-4xl font-bold text-white">Welcome to</h1>
                <h1 className="text-4xl font-bold text-primary">Pulsewave</h1>
                </div>
                <p className="font-bold text-white">The unopinionated twitter clone because Elon Musk ruined it.</p>
                <h4 className="text-xl font-bold text-white">Who are you?</h4>
                <Input className="w-fit border-2 text-primary" value={settings.name} onChange={(e) => setSettings(prev => ({ ...prev, name: e.target.value }))} />
                <Button className="bg-primary text-white" onClick={() => {
                    setFirstTime(false)
                    setPage(Page.Home)
                }}>Continue</Button>
            </div>
        </div>
    );
}