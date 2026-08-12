"use client";

import { useEffect, useState } from "react";

const COUNT_INTERVAL_MS = 25;
const LINE_EXPAND_DELAY_MS = 700;
const LINE_EXPAND_MS = 1200;
const CORE_EXIT_MS = 600;
const LOGO_REVEAL_MS = 1000;
const SHUTTER_CLOSE_MS = 600;
const SHUTTER_HOLD_MS = 1500;
const SHUTTER_OPEN_MS = 1200;

type IntroPhase =
  | "count"
  | "line"
  | "logo"
  | "shutter-close"
  | "shutter-open"
  | "done";

export function IntroAnimation({ onComplete }: { onComplete?: () => void }) {
  const [counter, setCounter] = useState(0);
  const [phase, setPhase] = useState<IntroPhase>("count");

  useEffect(() => {
    const count = window.setInterval(() => {
      setCounter((current) => {
        if (current >= 100) {
          window.clearInterval(count);
          return 100;
        }

        return current + 1;
      });
    }, COUNT_INTERVAL_MS);

    return () => {
      window.clearInterval(count);
    };
  }, []);

  useEffect(() => {
    if (counter < 100) {
      return;
    }

    setPhase("line");

    const timers = [
      window.setTimeout(() => setPhase("logo"), LINE_EXPAND_DELAY_MS + LINE_EXPAND_MS + CORE_EXIT_MS),
      window.setTimeout(
        () => setPhase("shutter-close"),
        LINE_EXPAND_DELAY_MS + LINE_EXPAND_MS + CORE_EXIT_MS + LOGO_REVEAL_MS + SHUTTER_HOLD_MS,
      ),
      window.setTimeout(
        () => setPhase("shutter-open"),
        LINE_EXPAND_DELAY_MS + LINE_EXPAND_MS + CORE_EXIT_MS + LOGO_REVEAL_MS + SHUTTER_HOLD_MS + SHUTTER_CLOSE_MS,
      ),
      window.setTimeout(
        () => setPhase("done"),
        LINE_EXPAND_DELAY_MS +
          LINE_EXPAND_MS +
          CORE_EXIT_MS +
          LOGO_REVEAL_MS +
          SHUTTER_HOLD_MS +
          SHUTTER_CLOSE_MS +
          SHUTTER_OPEN_MS,
      ),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [counter]);

  useEffect(() => {
    if (phase !== "done") {
      return;
    }

    onComplete?.();
  }, [onComplete, phase]);

  if (phase === "done") {
    return null;
  }

  const showCounter = phase === "count" || phase === "line";
  const showLogo = phase === "logo" || phase === "shutter-close" || phase === "shutter-open";
  const shuttersClosed = phase === "shutter-close";
  const shuttersOpening = phase === "shutter-open";

  return (
    <div
      className="great-sage-intro pointer-events-none fixed inset-0 z-[140] overflow-hidden"
      data-inverted={shuttersOpening ? "true" : "false"}
    >
      <div className="great-sage-intro__bg" />

      <div className="great-sage-intro__shutter great-sage-intro__shutter--top" data-closed={shuttersClosed ? "true" : "false"} />
      <div className="great-sage-intro__shutter great-sage-intro__shutter--bottom" data-closed={shuttersClosed ? "true" : "false"} />

      <div className="great-sage-intro__stage">
        <div className="great-sage-counter" data-visible={showCounter ? "true" : "false"} data-line={phase === "line" ? "true" : "false"}>
          <div className="great-sage-counter__progress" style={{ width: `${counter}%` }} />
          <div className="great-sage-counter__value">
            <span>{counter}%</span>
          </div>
        </div>

        <div className="great-sage-logo" data-visible={showLogo ? "true" : "false"} data-docked={shuttersOpening ? "true" : "false"}>
          <span className="great-sage-logo__title">archive_01</span>
          <span className="great-sage-logo__subtitle font">TAMIHSTICK</span>
        </div>
      </div>
    </div>
  );
}
