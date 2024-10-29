import { motion } from "framer-motion";

export default function HomeScreen() {
    return (
        <div className="p-4">
            <motion.h1 className="text-2xl font-semibold">Welcome back <span className="text-primary">Hanan</span></motion.h1>
        </div>
    )
}