"use client";

import { useEffect, useState, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const animationRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = (currentTime: number) => {
      // Add to trail history every few milliseconds when mouse moves
      if (currentTime - lastUpdateRef.current > 16) { // ~60fps for trail updates
        setTrail(prevTrail => {
          const newTrail = [
            ...prevTrail,
            {
              x: mousePosition.x,
              y: mousePosition.y,
              timestamp: currentTime
            }
          ];
          
          // Keep only recent history and remove old points
          return newTrail
            .filter(point => currentTime - point.timestamp < 600)
            .slice(-20);
        });
        
        lastUpdateRef.current = currentTime;
      } else {
        // Even when not adding new points, clean up old ones for smooth fade
        setTrail(prevTrail => 
          prevTrail.filter(point => currentTime - point.timestamp < 600)
        );
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Trail effect */}
      {trail.map((point, index) => {
        const now = performance.now();
        const age = (now - point.timestamp) / 600; // 0 to 1 over 600ms
        const opacity = Math.max(0, (1 - age) * 0.6);
        const size = Math.max(0.3, 1 - age * 0.7);
        
        if (opacity <= 0) return null;
        
        return (
          <div
            key={`${point.timestamp}-${index}`}
            className="absolute rounded-full"
            style={{
              left: point.x - 2,
              top: point.y - 2,
              width: `${3 * size}px`,
              height: `${3 * size}px`,
              opacity: opacity,
              background: '#ffffff',
              boxShadow: `0 0 ${8 * opacity}px rgba(255, 255, 255, ${opacity * 0.8})`,
              transform: `scale(${size})`,
            }}
          />
        );
      })}
    </div>
  );
} 