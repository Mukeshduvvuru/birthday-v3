import React from 'react'

export default function FloatingCube() {
  return (
    <div className="floating-cube-wrapper" aria-hidden>
      <div className="cube">
        <div className="face front" />
        <div className="face back" />
        <div className="face right" />
        <div className="face left" />
        <div className="face top" />
        <div className="face bottom" />
      </div>
    </div>
  )
}
