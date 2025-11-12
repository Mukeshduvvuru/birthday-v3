"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import LoaderScreen from "@/components/screens/LoaderScreen"
import IntroScreen from "@/components/screens/IntroScreen"
import CakeAndPhotosScreen from "@/components/screens/CakeAndPhotosScreen"
import MessageScreen from "@/components/screens/MessageScreen"
import FloatingCube from "@/components/FloatingCube"
import Sphere3D from "@/components/Sphere3D"
import Pyramid3D from "@/components/Pyramid3D"

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    <LoaderScreen key="loader" onDone={() => setCurrentScreen(1)} />,
    <IntroScreen key="intro" onNext={() => setCurrentScreen(2)} />,
    <CakeAndPhotosScreen key="cake-photos" onNext={() => setCurrentScreen(3)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(4)} onBack={() => setCurrentScreen(2)} />,
  ]

  return (
    <main className="min-h-screen bg-gradient-to-tr from-rose-950/40 via-black to-rose-950/40 overflow-hidden relative">
      
      {/* 3D Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <FloatingCube size={120} top="10%" left="5%" delay={0} duration={25} />
        <FloatingCube size={80} top="60%" right="8%" delay={2} duration={18} />
        <FloatingCube size={60} bottom="15%" left="15%" delay={4} duration={22} />
        
        <Sphere3D size={100} top="25%" right="15%" delay={1} />
        <Sphere3D size={70} bottom="30%" right="25%" delay={3} />
        <Sphere3D size={90} top="50%" left="10%" delay={5} />
        
        <Pyramid3D size={80} top="40%" right="5%" delay={2.5} />
        <Pyramid3D size={60} bottom="20%" right="40%" delay={1.5} />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.8 }}
            className={`w-full ${currentScreen === 3 ? "max-w-7xl" : currentScreen === 2 ? "max-w-6xl" : "max-w-3xl md:max-w-4xl"}`}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light">
  @mukeshbuilds
      </motion.div>
    </main>
  )
}
