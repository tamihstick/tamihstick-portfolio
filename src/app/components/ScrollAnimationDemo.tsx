import ScrollTriggerAnimation from "./ScrollTriggerAnimation";
import ParallaxSection from "./ParallaxSection";
import TextReveal from "./TextReveal";
import CountUpNumber from "./CountUpNumber";

export default function ScrollAnimationDemo() {
  return (
    <div className="space-y-20 py-20">
      {/* Fade Up Animation */}
      <section className="px-6">
        <ScrollTriggerAnimation
          animationType="fadeUp"
          className="mx-auto max-w-4xl"
        >
          <h2 className="text-4xl font-bold">Fade Up Animation</h2>
          <p className="mt-4 text-lg text-gray-600">
            This content fades in and slides up when it enters the viewport.
          </p>
        </ScrollTriggerAnimation>
      </section>

      {/* Slide In Left */}
      <section className="px-6">
        <ScrollTriggerAnimation
          animationType="slideInLeft"
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-lg bg-blue-50 p-8">
            <h3 className="text-2xl font-bold">Slide In From Left</h3>
            <p className="mt-2 text-gray-700">
              This element slides in from the left side.
            </p>
          </div>
        </ScrollTriggerAnimation>
      </section>

      {/* Slide In Right */}
      <section className="px-6">
        <ScrollTriggerAnimation
          animationType="slideInRight"
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-lg bg-purple-50 p-8">
            <h3 className="text-2xl font-bold">Slide In From Right</h3>
            <p className="mt-2 text-gray-700">
              This element slides in from the right side.
            </p>
          </div>
        </ScrollTriggerAnimation>
      </section>

      {/* Scale Up Animation */}
      <section className="px-6">
        <ScrollTriggerAnimation
          animationType="scaleUp"
          duration={1}
          className="mx-auto max-w-4xl"
        >
          <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-red-500 p-16">
            <p className="text-2xl font-bold text-white">Scale Up Animation</p>
          </div>
        </ScrollTriggerAnimation>
      </section>

      {/* Text Reveal */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <TextReveal
            text="Your portfolio title reveals character by character"
            className="text-4xl font-bold leading-tight"
            duration={0.05}
            staggerDelay={0.02}
          />
          <TextReveal
            text="This is word by word reveal animation"
            className="mt-6 text-xl text-gray-600"
            duration={0.1}
            staggerDelay={0.05}
            useWords
          />
        </div>
      </section>

      {/* Count Up Numbers */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Projects Completed</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <ScrollTriggerAnimation animationType="fadeUp">
              <div className="rounded-lg bg-slate-100 p-8 text-center">
                <CountUpNumber
                  target={150}
                  duration={2}
                  className="text-5xl font-bold text-blue-600"
                />
                <p className="mt-2 text-gray-600">Projects</p>
              </div>
            </ScrollTriggerAnimation>

            <ScrollTriggerAnimation animationType="fadeUp" delay={0.1}>
              <div className="rounded-lg bg-slate-100 p-8 text-center">
                <CountUpNumber
                  target={95}
                  duration={2}
                  suffix="%"
                  className="text-5xl font-bold text-green-600"
                />
                <p className="mt-2 text-gray-600">Client Satisfaction</p>
              </div>
            </ScrollTriggerAnimation>

            <ScrollTriggerAnimation animationType="fadeUp" delay={0.2}>
              <div className="rounded-lg bg-slate-100 p-8 text-center">
                <CountUpNumber
                  target={50}
                  duration={2}
                  prefix="$"
                  suffix="M+"
                  className="text-5xl font-bold text-purple-600"
                />
                <p className="mt-2 text-gray-600">Revenue Generated</p>
              </div>
            </ScrollTriggerAnimation>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section>
        <ParallaxSection
          speed={0.5}
          backgroundImage="https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600"
          className="h-96"
        >
          <div className="flex h-full items-center justify-center">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">
              Parallax Background
            </h2>
          </div>
        </ParallaxSection>
      </section>

      {/* Staggered Animation */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Staggered List Items</h2>
          <ScrollTriggerAnimation animationType="stagger" stagger={0.2}>
            <div className="space-y-4">
              <div data-stagger className="rounded bg-gray-100 p-4">
                <p className="font-semibold">Item 1 - Appears first</p>
              </div>
              <div data-stagger className="rounded bg-gray-100 p-4">
                <p className="font-semibold">Item 2 - Appears second</p>
              </div>
              <div data-stagger className="rounded bg-gray-100 p-4">
                <p className="font-semibold">Item 3 - Appears third</p>
              </div>
              <div data-stagger className="rounded bg-gray-100 p-4">
                <p className="font-semibold">Item 4 - Appears last</p>
              </div>
            </div>
          </ScrollTriggerAnimation>
        </div>
      </section>
    </div>
  );
}
