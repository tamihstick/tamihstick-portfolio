import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import DiamondShape from "./DiamondShape";
import "tailwindcss/tailwind.css";
import DiamondShape2 from "./DiamondShape2";
import Logo from "./Logo";


const GreatSageAnimation: React.FC = () => {
  const diamondContainerRef = useRef<HTMLDivElement>(null);
  const diamond2ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (diamondContainerRef.current) {
        const diamonds = diamondContainerRef.current.children;
        gsap.fromTo(
          diamonds,
          { scale: 10, opacity: 0 },
          {
            scale: 2,
            opacity: 1,
            duration: .5,
            ease: "circ.in(1,0.3)",
            stagger: 0.3,
            repeat: 0,
            yoyo: true,
          }
        );
      }

    if (diamond2ContainerRef.current) {
      const diamonds2 = diamond2ContainerRef.current.children;
      const tl = gsap.timeline();
  
        tl.fromTo(
          diamonds2,
          { scale: 0, opacity: 0 },
          {
            scale: 2,
            opacity: 1,
            duration: 0.6,
            rotation: 90,
            transformOrigin: "50% 50%",
            stagger: 0.3,
            repeat: -0,
            yoyo: true,
          }
        )
        .to(".hide", { opacity: 0, duration: 0.3 })
        .to(".hide", { display: "none", duration: 0.3 })
        .to(".follow", {
          height: "100%",
          ease: Expo.easeInOut,
          duration: 0.7,
          delay: 0.5,
        })
        .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
        .to(".title-lines", { display: "block", duration: 0.1 })
        .to(".title-lines", {
          opacity: 1,
          stagger: 0.15,
          ease: Expo.easeInOut,
          duration: 0.6,
        });
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-midnight">
      <div className="hide relative w-32 h-32">
        <div ref={diamondContainerRef} className="absolute inset-0 m-auto">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 m-auto"
              style={{ width: "130px", height: "130px", zIndex: 5 - i }}
            >
              <DiamondShape />
            </div>
          ))}
        </div>
        <div ref={diamond2ContainerRef} className="absolute inset-0 m-auto">
          {[...Array(1)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 m-auto"
              style={{ width: "130px", height: "130px", zIndex: 5 - i }}
            >
              <DiamondShape2 />
            </div>
          ))}
        </div>
      </div>
      <div className="content h-full w-0 absolute left-0 top-0 bg-gray-900 flex items-center justify-center flex-col overflow-hidden text-white z-20">
        <Logo/>
      </div>
    </div>
  );
};

export default GreatSageAnimation;
