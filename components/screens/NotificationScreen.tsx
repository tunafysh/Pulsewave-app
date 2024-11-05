import { PersonIcon } from "@radix-ui/react-icons";

export default function NotificationScreen() {
    return (
        <div className="w-full h-16 p-4 flex flex-col justify-between ">
            <h1 className="text-2xl font-semibold">Notifications</h1>
            <div className="flex flex-row w-full h-[50px] items-center gap-2 my-2">
        <PersonIcon width={48} className="text-primary rounded-full border-2 border-primary" height={48}/>
        <p className="text-foreground font-semibold">username123 followed you </p><p className="dark:text-white/50 text-black/50 font-semibold">57m ago</p>
        </div>
        <hr />
        <div className="flex flex-row w-full h-[50px] items-center gap-2 my-2">
        <PersonIcon width={48} className="text-primary rounded-full border-2 border-primary" height={48}/>
        <p className="text-foreground font-semibold">username123 followed you </p><p className="dark:text-white/50 text-black/50 font-semibold">57m ago</p>
        </div>
        <hr />
        <div className="flex flex-row w-full h-[50px] items-center gap-2 my-2">
        <PersonIcon width={48} className="text-primary rounded-full border-2 border-primary" height={48}/>
        <p className="text-foreground font-semibold">username123 followed you </p><p className="dark:text-white/50 text-black/50 font-semibold">57m ago</p>
        </div>
        <hr />
        <div className="flex flex-row w-full h-[50px] items-center gap-2 my-2">
        <PersonIcon width={48} className="text-primary rounded-full border-2 border-primary" height={48}/>
        <p className="text-foreground font-semibold">username123 followed you </p><p className="dark:text-white/50 text-black/50 font-semibold">57m ago</p>
        </div>
            </div>
    );
}