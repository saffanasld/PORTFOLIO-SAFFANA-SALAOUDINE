"use client";
import { useEffect, useRef } from "react";

export default function Curseur() {
  const circleRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: 0, y: 0 }); 
  const circlePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      const speed = 0.15;

      circlePos.current.x += (mouse.current.x - circlePos.current.x) * speed;
      circlePos.current.y += (mouse.current.y - circlePos.current.y) * speed;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-ivory mix-blend-difference rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{ willChange: "transform" }}
      />
      
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-12 h-12 border border-ivory/20 mix-blend-difference rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}