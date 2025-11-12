"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Polaroid3D({ 
  src, 
  alt, 
  index,
  position,
  rotation,
  delay = 0
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      className="polaroid-container cursor-pointer"
      style={{
        position: 'absolute',
        ...position,
        zIndex: isFocused ? 50 : index,
      }}
      initial={{ 
        opacity: 0, 
        scale: 0.5,
        rotateX: -90,
        y: -200
      }}
      animate={{ 
        opacity: 1, 
        scale: isFocused ? 1.3 : 1,
        rotateX: 0,
        rotateY: isFocused ? 0 : rotation.rotateY,
        rotateZ: isFocused ? 0 : rotation.rotateZ,
        y: 0,
        x: isFocused ? 0 : 0,
      }}
      transition={{ 
        delay,
        duration: 1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.15,
        rotateZ: 0,
        rotateY: 0,
        translateZ: 50,
        transition: { duration: 0.3 }
      }}
      onClick={() => setIsFocused(!isFocused)}
    >
      <motion.div 
        className="polaroid"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3
        }}
      >
        <div className="polaroid-frame">
          <div className="polaroid-image">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="polaroid-caption">
            <p className="text-gray-600 text-sm font-handwriting">
              Memory #{index + 1}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
