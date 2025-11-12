"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoaderScreen({ onDone }) {
    const [count, setCount] = useState(3)

    useEffect(() => {
        const t = setInterval(() => {
            setCount((c) => {
                if (c <= 1) {
                    clearInterval(t)
                    setTimeout(() => onDone?.(), 420)
                    return 0
                }
                return c - 1
            })
        }, 900)
        return () => clearInterval(t)
    }, [])

    return (
        <div className="w-full grid place-items-center">
            <motion.div 
                className="relative"
                style={{ perspective: '1000px' }}
                animate={{ 
                    rotateY: [0, 5, 0, -5, 0],
                    rotateX: [0, -5, 0, 5, 0]
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
            >
                <div className="spinner">
                    <div className="spinner1"></div>
                </div>

                {/* 3D Depth Particles */}
                {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * (Math.PI / 180)
                    const radius = 140
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius
                    
                    return (
                        <motion.div
                            key={i}
                            className="absolute particle-3d"
                            style={{
                                left: '50%',
                                top: '50%',
                                '--tx': `${x}px`,
                                '--ty': `${y}px`,
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.25,
                                ease: "easeInOut"
                            }}
                        />
                    )
                })}

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <motion.div
                        key={count}
                        initial={{ scale: 0.3, opacity: 0, rotateY: -180 }}
                        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="text-[110px] md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.25)] p-0.5 pt-7"
                    >
                        {count}
                    </motion.div>
                </div>
            </motion.div>
            <motion.h1
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-400 mt-14 text-center py-1.5"
                animate={{ 
                    opacity: [0.8, 1, 0.8],
                    y: [0, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                Crafting your special moment...
            </motion.h1>
        </div>
    )
}
