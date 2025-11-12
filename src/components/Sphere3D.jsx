"use client"

export default function Sphere3D({ 
  size = 80, 
  top, 
  left, 
  right, 
  bottom,
  delay = 0 
}) {
  const style = {
    top,
    left,
    right,
    bottom,
    width: size,
    height: size,
    animationDelay: `${delay}s`,
  }

  return (
    <div 
      className="sphere-3d" 
      style={style} 
      aria-hidden="true"
    />
  )
}
