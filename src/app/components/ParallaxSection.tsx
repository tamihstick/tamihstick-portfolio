import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // 0.5 is slow, 1 is normal, 2+ is fast
  className?: string;
  backgroundImage?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
  backgroundImage,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bgRef.current) return;

    const animation = gsap.to(bgRef.current, {
      y: () => -ScrollTrigger.maxScroll(window) * speed * 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        onUpdate: (self) => {
          gsap.to(bgRef.current, {
            y: -self.getVelocity() * speed * 0.5,
            duration: 0.5,
            overwrite: false,
            ease: "power2.out",
          });
        },
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
