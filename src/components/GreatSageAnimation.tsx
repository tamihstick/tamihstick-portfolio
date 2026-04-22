import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import DiamondShape from "./DiamondShape";
import "tailwindcss/tailwind.css";
import DiamondShape2 from "./DiamondShape2";
import Logo from "./Logo";

const GreatSageAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerStarRef = useRef<HTMLDivElement>(null);
  const innerStarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Initial pop-in (Raphael/Great Sage appearing)
    tl.fromTo(
      ".raphael-core",
      { scale: 0, opacity: 0, rotation: -90 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "expo.out",
      }
    );

    // 2. Start infinite spinning on the stars (using separate gsap.to calls so it doesn't block timeline)
    gsap.to(outerStarRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(innerStarRef.current, {
      rotation: -360,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });

    // 3. Optional pulsing effect on the core
    gsap.to(".raphael-glow", {
      opacity: 0.6,
      scale: 1.1,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 4. After computing for a few seconds, transition out and show Logo
    tl.to({}, { duration: 2.5 }) // Wait 2.5 seconds
      .to(".raphael-core", {
        scale: 0,
        opacity: 0,
        rotation: 90,
        duration: 0.6,
        ease: "expo.in",
      })
      .to(".hide-container", { display: "none" })
      .fromTo(".logo-reveal", 
        { opacity: 0, scale: 0, top: "50%", left: "50%", xPercent: -50, yPercent: -50 }, 
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
      )
      
      // 5. Cut out the screen with full screen black and white rectangles
      .to(".shutter-top", { height: "50vh", duration: 0.6, ease: "power3.inOut" }, "+=1.5")
      .to(".shutter-bottom", { height: "50vh", duration: 0.6, ease: "power3.inOut" }, "<")

      // 5.5 Invert colors while the screen is cut off!
      .set(containerRef.current, { backgroundColor: "#ffffff" })
      .set(".tamihstick-logo", { color: "#000000" })

      // 6. Open the shutters and move the tamihstick name to the left corner as a navbar logo
      .to(".logo-reveal", {
        left: "15%",
        top: "8%",
        scale: 0.4,
        duration: 1.2,
        ease: "power3.inOut"
      }, "+=0.2")
      .to(".shutter-top", { height: "0vh", duration: 1.2, ease: "power3.inOut" }, "<")
      .to(".shutter-bottom", { height: "0vh", duration: 1.2, ease: "power3.inOut" }, "<");

  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black relative overflow-hidden" ref={containerRef}>
      
      {/* Full Screen Black and White Rectangular Shutters */}
      <div className="shutter-top absolute top-0 left-0 w-full h-0 bg-white z-50"></div>
      <div className="shutter-bottom absolute bottom-0 left-0 w-full h-0 bg-white border-t-8 border-white z-50"></div>

      {/* The Raphael / Great Sage Core */}
      <div className="hide-container absolute inset-0 flex items-center justify-center z-20">
        <div className="raphael-core relative w-48 h-48 flex items-center justify-center">
          
          {/* Glowing aura */}
          <div className="raphael-glow absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-40"></div>
          
          {/* Outer Star (two diamonds overlapping) */}
          <div ref={outerStarRef} className="absolute inset-0 m-auto flex items-center justify-center" style={{ width: "140px", height: "140px" }}>
            <div className="absolute inset-0">
              <DiamondShape />
            </div>
            <div className="absolute inset-0 rotate-45">
              <DiamondShape />
            </div>
          </div>

          {/* Inner Star / Core */}
          <div ref={innerStarRef} className="absolute inset-0 m-auto flex items-center justify-center" style={{ width: "90px", height: "90px" }}>
            <div className="absolute inset-0">
              <DiamondShape2 />
            </div>
            <div className="absolute inset-0 rotate-45">
              <DiamondShape2 />
            </div>
          </div>

        </div>
      </div>

      {/* The Final Content to Reveal */}
      <div className="content h-full w-full absolute left-0 top-0 text-white z-30 pointer-events-none">
        <div className="logo-reveal absolute opacity-0">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default GreatSageAnimation;
