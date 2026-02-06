import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollReveal({ children }) {
  const ref = useRef(null);
  const MotionDiv = motion.div;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  return (
    <div
      ref={ref}
      style={{ overflow: "hidden", position: "relative" }}
    >
      <MotionDiv style={{ y }}>
        {children}
      </MotionDiv>
    </div>
  );
}
