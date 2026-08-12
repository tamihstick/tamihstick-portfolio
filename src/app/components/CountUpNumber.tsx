import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpNumberProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export default function CountUpNumber({
  target,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: CountUpNumberProps) {
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!numberRef.current) return;

    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent =
            prefix +
            obj.value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            suffix;
        }
      },
      scrollTrigger: {
        trigger: numberRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        markers: false,
        once: true, // Only animate once
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [target, duration, suffix, prefix, decimals]);

  return (
    <div ref={numberRef} className={className}>
      0{suffix}
    </div>
  );
}
