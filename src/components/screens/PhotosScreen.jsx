"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import { Mail } from "lucide-react"
import GradientButton from "../GradientButton"
import Polaroid3D from "../Polaroid3D"

export default function PhotosScreen({ onNext }) {
  const photos = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
  ]

  const polaroidPositions = [
    { 
      left: '10%',
      top: '80px',
      rotation: { rotateY: -8, rotateZ: -6 }
    },
    { 
      left: '32%',
      top: '120px',
      rotation: { rotateY: 10, rotateZ: 5 }
    },
    { 
      left: '54%',
      top: '60px',
      rotation: { rotateY: -5, rotateZ: -4 }
    },
    { 
      left: '76%',
      top: '100px',
      rotation: { rotateY: 8, rotateZ: 6 }
    },
  ]

  const particlePositions = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      left: `${20 + (i * 7) % 60}%`,
      top: `${20 + (i * 11) % 60}%`,
      delay: i * 0.5,
      xOffset: ((i * 13) % 100 - 50) / 2,
    }))
  }, [])

  return (
    <div className="px-4 md:px-6 py-10 min-h-screen relative">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow"
        >
          Sweet Moments
        </motion.h2>
        <motion.p 
          className="text-sm text-rose-100/90 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Click on any polaroid to focus ✨
        </motion.p>
      </div>

      {/* 3D Polaroid Hanger Container */}
      <div 
        className="relative mx-auto"
        style={{ 
          height: '600px',
          maxWidth: '1000px',
          perspective: '1200px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Clothesline/Hanger String */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-fuchsia-300/40 to-transparent" 
          style={{ 
            boxShadow: '0 0 10px rgba(232, 121, 249, 0.3)',
            top: '40px'
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
            }}
            animate={{
              y: [0, -100],
              x: [0, particle.xOffset],
              opacity: [0, 0.6, 0],
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
              top: '40px',
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

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-12 flex justify-center"
      >
        <GradientButton onClick={onNext}>
          <Mail size={20} className="mt-0.5" /> Open My Message
        </GradientButton>
      </motion.div>
    </div>
  )
}
