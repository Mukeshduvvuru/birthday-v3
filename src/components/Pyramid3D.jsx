"use client"

export default function Pyramid3D({ 
  size = 100, 
  top, 
  left, 
  right, 
  bottom,
  delay = 0 
}) {
  const wrapperStyle = {
    position: 'absolute',
    top,
    left,
    right,
    bottom,
    perspective: '1000px',
    animationDelay: `${delay}s`,
  }

  const pyramidStyle = {
    borderLeft: `${size / 2}px solid transparent`,
    borderRight: `${size / 2}px solid transparent`,
    borderBottom: `${size}px solid rgba(236, 72, 153, 0.2)`,
  }

  return (
    <div style={wrapperStyle} aria-hidden="true">
      <div className="pyramid" style={pyramidStyle} />
    </div>
  )
}
