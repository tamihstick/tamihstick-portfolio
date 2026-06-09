import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  duration?: number;
  staggerDelay?: number;
  useWords?: boolean; // If true, animates words. If false, animates characters
}

export default function TextReveal({
  text,
  className = "",
  duration = 0.05,
  staggerDelay = 0.03,
  useWords = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const splitText = useWords
      ? text.split(" ").map((word) => `<span>${word}</span>`)
      : text.split("").map((char) => {
          if (char === " ") return "<span>&nbsp;</span>";
          return `<span>${char}</span>`;
        });

    containerRef.current.innerHTML = splitText.join("");

    const chars = containerRef.current.querySelectorAll("span");

    gsap.from(chars, {
      opacity: 0,
      y: 10,
      duration,
      stagger: staggerDelay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [text, duration, staggerDelay, useWords]);

  return <div ref={containerRef} className={className} />;
}
