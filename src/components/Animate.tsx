"use client";

import { useInView } from "@/hooks/useInView";
import type { ReactNode, CSSProperties, ElementType } from "react";

type AnimType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "flip-up";
type Delay = 0 | 100 | 150 | 200 | 300 | 400 | 500 | 600 | 700 | 800;

interface AnimateProps {
  children: ReactNode;
  type?: AnimType;
  delay?: Delay;
  /** Extra Tailwind/class string to pass through */
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
  threshold?: number;
}

/**
 * Wraps any content and triggers a scroll-reveal animation
 * when the element enters the viewport.
 *
 * Usage:
 *   <Animate type="fade-up" delay={200}>
 *     <MyCard />
 *   </Animate>
 */
export default function Animate({
  children,
  type = "fade-up",
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
  threshold = 0.12,
}: AnimateProps) {
  const { ref, inView } = useInView(threshold);

  const animClass = `anim-${type}`;
  const delayClass = delay > 0 ? `anim-delay-${delay}` : "anim-delay-0";
  const visibleClass = inView ? "in-view" : "";

  return (
    <Tag
      ref={ref}
      className={`${animClass} ${delayClass} ${visibleClass} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
