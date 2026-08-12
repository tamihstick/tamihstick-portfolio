import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  children: React.ReactNode;
  animationType?:
    | "fadeUp"
    | "fadeIn"
    | "slideInLeft"
    | "slideInRight"
    | "scaleUp"
    | "rotateIn"
    | "stagger";
  duration?: number;
  delay?: number;
  stagger?: number;
  className?: string;
}

export default function ScrollTriggerAnimation({
  children,
  animationType = "fadeUp",
  duration = 0.8,
  delay = 0,
  stagger = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animationConfig = {
      fadeUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideInLeft: {
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
      },
      slideInRight: {
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
      },
      scaleUp: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      rotateIn: {
        from: { opacity: 0, rotation: -10, scale: 0.9 },
        to: { opacity: 1, rotation: 0, scale: 1 },
      },
      stagger: {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
      },
    };

    const config = animationConfig[animationType];

    if (animationType === "stagger") {
      // For staggered animations, target child elements
      const children = containerRef.current.querySelectorAll("[data-stagger]");
      gsap.from(children, {
        ...config.from,
        duration,
        delay,
        stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          markers: false,
        },
      });
    } else {
      gsap.from(containerRef.current, {
        ...config.from,
        duration,
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          markers: false,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animationType, duration, delay, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
