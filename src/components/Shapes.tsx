import { motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

export function Shapes({ isHover, isPress, mouseX, mouseY }: {
  isHover: boolean;
  isPress: boolean;
  mouseX: any;
  mouseY: any;
}) {
  // Example: animate a circle and a square
  // You can expand this with more shapes and more complex animations
  const x = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!isHover) {
      x.set(0);
      y.set(0);
    }
  }, [isHover, x, y]);

  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="30"
        cy="30"
        r="12"
        fill="#f9a8d4"
        style={{
          translateX: x,
          translateY: y,
          scale: isPress ? 1.2 : isHover ? 1.1 : 1,
          opacity: isHover ? 1 : 0.7
        }}
      />
      <motion.rect
        x="10"
        y="10"
        width="12"
        height="12"
        fill="#93c5fd"
        rx="3"
        style={{
          translateX: x,
          translateY: y,
          scale: isPress ? 1.1 : isHover ? 1.05 : 1,
          opacity: isHover ? 1 : 0.7
        }}
      />
    </svg>
  );
} 