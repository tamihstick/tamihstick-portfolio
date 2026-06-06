import { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

function Animation() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) => {
        if (counter < 100) {
          return counter + 1;
        }

        clearInterval(count);
        reveal();
        return 100;
      });
    }, 25);

    return () => clearInterval(count);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
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
  };

  return (
    <div className="w-screen h-screen text-black relative">
      <div className="h-full w-full bg-gray-900 flex justify-center items-center absolute top-0">
        <div className="follow absolute bg-orange-500 h-0.5 w-0 left-0 z-20"></div>
        <div
          className="hide absolute left-0 bg-white h-0.5 transition duration-400 ease-out"
          style={{ width: `${counter}%` }}
        ></div>
        <p className="hide absolute text-[130px] text-white transform -translate-y-4 font-medium">
          {counter}%
        </p>
      </div>

      <div className="content h-full w-0 absolute left-0 top-0 bg-gray-900 flex items-center justify-center flex-col overflow-hidden text-white z-20">
        <p className="title-lines text-center text-[104px] opacity-0 hidden font-medium m-0">
          The greatest glory in living lies
        </p>
        <p className="title-lines text-center text-[104px] opacity-0 hidden font-medium m-0">
          not in never falling,
        </p>
        <p className="title-lines text-center text-[104px] opacity-0 hidden font-medium m-0">
          but in rising every time we fall.
        </p>
        <p className="title-lines text-center text-[104px] opacity-0 hidden font-medium m-0">
          -Nelson Mandela
        </p>
      </div>
    </div>
  );
}

export default Animation;
