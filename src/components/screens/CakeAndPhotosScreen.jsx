"use client"

import { useState, useMemo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import confetti from "canvas-confetti"
import GradientButton from "../GradientButton"
import { ArrowRight, Flame } from "lucide-react"
import Polaroid3D from "../Polaroid3D"

const confettiColors = ["#FF3CAC", "#F687B3", "#D8B4FE", "#C084FC", "#F472B6"];

export default function CakeAndPhotosScreen({ onNext }) {
  const [lit, setLit] = useState(false)

  const photos = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
  ]

  const polaroidPositions = [
    { 
      left: '5%',
      top: '100px',
      rotation: { rotateY: -8, rotateZ: -6 }
    },
    { 
      left: '75%',
      top: '140px',
      rotation: { rotateY: 10, rotateZ: 5 }
    },
    { 
      left: '8%',
      top: '400px',
      rotation: { rotateY: -5, rotateZ: -4 }
    },
    { 
      left: '78%',
      top: '380px',
      rotation: { rotateY: 8, rotateZ: 6 }
    },
  ]

  const particlePositions = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      left: `${15 + (i * 9) % 70}%`,
      top: `${15 + (i * 13) % 70}%`,
      delay: i * 0.5,
      xOffset: ((i * 13) % 100 - 50) / 2,
    }))
  }, [])

  const lightCandle = () => {
    if (lit) return
    setLit(true)
    setTimeout(() => burst(), 500);
    setTimeout(() => burst(), 1000);
  }

  const burst = () => {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: confettiColors,
    })
  }

  return (
    <div className="relative min-h-screen py-10">
      {/* Background Layer: Photos with Clothesline */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          perspective: '1200px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Clothesline/Hanger String */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-fuchsia-300/30 to-transparent" 
          style={{ 
            boxShadow: '0 0 10px rgba(232, 121, 249, 0.2)',
            top: '60px'
          }}
        />
        
        {/* Ambient particles */}
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="polaroid-particle"
            style={{
              left: particle.left,
              top: particle.top,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -80],
              x: [0, particle.xOffset],
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Hanging Polaroid Photos */}
        {photos.map((src, index) => (
          <div 
            key={index}
            className="absolute"
            style={{
              left: polaroidPositions[index].left,
              top: '60px',
              opacity: 0.7,
              filter: 'brightness(0.8)',
            }}
          >
            {/* Hanging String */}
            <motion.div 
              className="absolute left-1/2 w-[1px] bg-fuchsia-200/30"
              style={{
                height: polaroidPositions[index].top,
                transformOrigin: 'top center',
              }}
              animate={{
                rotateZ: [
                  polaroidPositions[index].rotation.rotateZ - 2,
                  polaroidPositions[index].rotation.rotateZ + 2,
                  polaroidPositions[index].rotation.rotateZ - 2
                ]
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3
              }}
            />
            
            {/* Photo with swing animation */}
            <motion.div
              style={{
                position: 'relative',
                top: polaroidPositions[index].top,
                transformOrigin: 'top center',
              }}
              animate={{
                rotateZ: [
                  polaroidPositions[index].rotation.rotateZ - 2,
                  polaroidPositions[index].rotation.rotateZ + 2,
                  polaroidPositions[index].rotation.rotateZ - 2
                ]
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3
              }}
            >
              <Polaroid3D
                src={src}
                alt={`Memory ${index + 1}`}
                index={index}
                position={{left: '0', top: '0'}}
                rotation={polaroidPositions[index].rotation}
                delay={index * 0.2}
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Foreground Layer: Cake Section */}
      <div className="relative z-10 px-4 md:px-6 text-center flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-8">
          {lit && (
            <motion.div className="text-center text-[40px] md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow leading-tight px-4 mb-8"
              style={{ filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))" }}
              initial={{ opacity: 0, scale: 0.8, }}
              animate={{ opacity: 1, scale: 1, }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            >
              Happy Birthday, Cutiepie!
            </motion.div>
          )}
          
          <div className="relative mb-6">
            <Cake lit={lit} />
          </div>
          
          <AnimatePresence mode="wait">
            {!lit ? (
              <motion.div
                key="light"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <GradientButton onClick={lightCandle}>
                  <Flame size={20} />
                  Light the Candle
                </GradientButton>
              </motion.div>
            ) : (
              <motion.div
                key="next"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 2 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <GradientButton onClick={onNext}>
                  Next
                  <ArrowRight size={20} className="mt-0.5" />
                </GradientButton>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function Cake({ lit }) {
  return (
    <div className="flex flex-col items-center">
      <div className="cake">
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div className="candle">
          {lit && <motion.div
            initial={{ opacity: 0, scaleY: 0.2, y: 10 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
            className="flame"></motion.div>}
        </div>
      </div>
    </div>
  )
}
