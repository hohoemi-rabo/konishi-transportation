"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  motion,
  useInView,
} from "framer-motion";

interface CountUpProps {
  target: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function CountUp({
  target,
  duration = 2,
  className,
  suffix,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, target, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, motionValue, target, duration]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
