import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PinSectionProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

/**
 * PinSection: Pins an element to the viewport while scrolling
 * Useful for hero sections or important content you want to keep visible
 */
export default function PinSection({
  children,
  duration = 3,
  className = "",
}: PinSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${duration * 100}`,
        pin: true,
        scrub: 1,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [duration]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
