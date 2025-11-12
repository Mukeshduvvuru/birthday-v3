"use client"

import { motion } from "framer-motion"
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
      top: '10%', 
      left: '15%',
      rotation: { rotateY: -12, rotateZ: -8 }
    },
    { 
      top: '15%', 
      right: '18%',
      rotation: { rotateY: 15, rotateZ: 6 }
    },
    { 
      bottom: '25%', 
      left: '20%',
      rotation: { rotateY: 8, rotateZ: -5 }
    },
    { 
      bottom: '20%', 
      right: '15%',
      rotation: { rotateY: -10, rotateZ: 7 }
    },
  ]

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

      {/* 3D Polaroid Wall Container */}
      <div 
        className="relative mx-auto"
        style={{ 
          height: '600px',
          maxWidth: '1000px',
          perspective: '1200px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Ambient particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="polaroid-particle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Polaroid Photos */}
        {photos.map((src, index) => (
          <Polaroid3D
            key={index}
            src={src}
            alt={`Memory ${index + 1}`}
            index={index}
            position={polaroidPositions[index]}
            rotation={polaroidPositions[index].rotation}
            delay={index * 0.2}
          />
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
