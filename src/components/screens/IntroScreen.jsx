"use client"

import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { Gift } from "lucide-react"

export default function IntroScreen({ onNext }) {
    return (
        <div className="py-10 md:py-14 text-center" style={{ perspective: '1000px' }}>
            <div className="flex flex-col items-center gap-6">
                <motion.img
                    src="/gifs/intro.gif"
                    alt="Cute birthday animation topper"
                    className="w-[140px] md:w-[180px]  object-cover"
                    initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotateY: 0,
                        y: [0, -10, 0]
                    }}
                    transition={{ 
                        opacity: { duration: 0.8 },
                        scale: { duration: 0.8 },
                        rotateY: { duration: 1.2, type: "spring" },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <motion.h1 
                        className="text-pretty text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow leading-tight"
                        style={{
                            filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))",
                        }}
                        animate={{
                            scale: [1, 1.02, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        A Cutiepie was born today, 20 years ago!
                    </motion.h1>
                    <motion.p 
                        className="mt-4 text-xl text-pink-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Yes, it's YOU! A little surprise awaits...
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.6, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <GradientButton
                        onClick={() => { onNext?.() }}
                    >
                        <Gift size={20} />
                        Start the surprise
                    </GradientButton>
                </motion.div>
            </div>
        </div>
    )
}
