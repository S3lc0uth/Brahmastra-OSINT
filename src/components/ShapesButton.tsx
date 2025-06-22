import "../index.css";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";

const transition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 1.5
};

export default function ShapesButton() {
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MotionConfig transition={transition}>
      <motion.button
        type="button"
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.15 },
          press: { scale: 1.1 }
        }}
        className="ml-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold shadow-lg relative overflow-hidden"
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={e => {
          const bounds = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - bounds.left - bounds.width / 2);
          mouseY.set(e.clientY - bounds.top - bounds.height / 2);
        }}
      >
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
        >
          <Suspense fallback={null}>
            <Shapes
              isHover={isHover}
              isPress={isPress}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          </Suspense>
        </motion.div>
        <motion.span
          className="relative z-10 label"
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
        >
          play
        </motion.span>
      </motion.button>
    </MotionConfig>
  );
} 