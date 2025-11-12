"use client"

import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowLeft } from "lucide-react";

export default function MessageScreen({ onNext, onBack }) {
    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        

                        Happy Birthday, Rat! You deserve all the happiness, love, and smiles in the world today and always.
                        I hope your day is filled with laughter, surprises, and moments that make your heart happy. 
                        You’re truly one of a favorite person in my life, and I just want you to know how special you are.
                        Keep being the amazing person you are, spreading joy wherever you go   
                        and Wishing you endless happiness, success, and all the sweet things life has to offer. 💗

                         I just wanted to make this message more personal and special for you. Hope you understand.
                    </p>
                </motion.div>
            </div>

            {onBack && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-8 flex justify-center"
                >
                    <GradientButton onClick={onBack}>
                        <ArrowLeft size={20} className="mt-0.5" />
                        Back
                    </GradientButton>
                </motion.div>
            )}
        </div>
    )
}