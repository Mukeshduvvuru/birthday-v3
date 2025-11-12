"use client"

import React from 'react'

export default function FloatingCube({ 
  size = 100, 
  top, 
  left, 
  right, 
  bottom,
  delay = 0,
  duration = 20 
}) {
  const style = {
    top,
    left,
    right,
    bottom,
    animationDelay: `${delay}s`,
    width: size,
    height: size,
  }

  const cubeStyle = {
    width: size,
    height: size,
    animationDuration: `${duration}s`,
  }

  const faceStyle = {
    width: size,
    height: size,
  }

  const half = size / 2

  return (
    <div className="floating-cube-wrapper" style={style} aria-hidden="true">
      <div className="cube" style={cubeStyle}>
        <div className="face front" style={{...faceStyle, transform: `rotateY(0deg) translateZ(${half}px)`}} />
        <div className="face back" style={{...faceStyle, transform: `rotateY(180deg) translateZ(${half}px)`}} />
        <div className="face right" style={{...faceStyle, transform: `rotateY(90deg) translateZ(${half}px)`}} />
        <div className="face left" style={{...faceStyle, transform: `rotateY(-90deg) translateZ(${half}px)`}} />
        <div className="face top" style={{...faceStyle, transform: `rotateX(90deg) translateZ(${half}px)`}} />
        <div className="face bottom" style={{...faceStyle, transform: `rotateX(-90deg) translateZ(${half}px)`}} />
      </div>
    </div>
  )
}
