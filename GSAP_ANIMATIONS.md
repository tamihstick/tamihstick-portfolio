# GSAP ScrollTrigger Animation Components

A collection of reusable React components for scroll-triggered animations using GSAP (GreenSock Animation Platform).

## Components Overview

### 1. **ScrollTriggerAnimation**
Generic component for various scroll-triggered animations.

**Props:**
- `animationType`: `'fadeUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleUp' | 'rotateIn' | 'stagger'` (default: `'fadeUp'`)
- `duration`: Animation duration in seconds (default: `0.8`)
- `delay`: Initial delay before animation starts (default: `0`)
- `stagger`: Delay between staggered items (default: `0.1`)
- `className`: CSS classes for container styling

**Example Usage:**
```tsx
import ScrollTriggerAnimation from '@/components/ScrollTriggerAnimation';

export default function MyPage() {
  return (
    <ScrollTriggerAnimation 
      animationType="fadeUp" 
      duration={1}
      className="mx-auto max-w-4xl"
    >
      <h2>This content fades and slides up on scroll</h2>
    </ScrollTriggerAnimation>
  );
}
```

**Available Animation Types:**
- `fadeUp`: Fade in + slide up
- `fadeIn`: Simple fade in
- `slideInLeft`: Fade in + slide from left
- `slideInRight`: Fade in + slide from right
- `scaleUp`: Fade in + scale from smaller
- `rotateIn`: Fade in + slight rotation + scale
- `stagger`: Staggered animation for child elements with `data-stagger` attribute

---

### 2. **TextReveal**
Character-by-character or word-by-word text reveal animation.

**Props:**
- `text`: The text to animate (string)
- `duration`: Duration per character/word (default: `0.05`)
- `staggerDelay`: Delay between characters/words (default: `0.03`)
- `useWords`: If `true`, animates words; if `false`, animates characters (default: `false`)
- `className`: CSS classes for styling

**Example Usage:**
```tsx
import TextReveal from '@/components/TextReveal';

export default function Title() {
  return (
    <>
      {/* Character by character */}
      <TextReveal
        text="Animated Title"
        className="text-4xl font-bold"
        duration={0.05}
        staggerDelay={0.02}
      />

      {/* Word by word */}
      <TextReveal
        text="This reveals word by word"
        className="text-xl text-gray-600"
        duration={0.1}
        staggerDelay={0.05}
        useWords
      />
    </>
  );
}
```

---

### 3. **CountUpNumber**
Animates numbers counting up from 0 to target value.

**Props:**
- `target`: The target number to count to
- `duration`: Animation duration in seconds (default: `2`)
- `suffix`: Text to append after number (e.g., '%', '+')
- `prefix`: Text to prepend before number (e.g., '$')
- `decimals`: Number of decimal places (default: `0`)
- `className`: CSS classes for styling

**Example Usage:**
```tsx
import CountUpNumber from '@/components/CountUpNumber';

export default function Stats() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <CountUpNumber
          target={150}
          duration={2}
          className="text-5xl font-bold text-blue-600"
        />
        <p>Projects Completed</p>
      </div>

      <div>
        <CountUpNumber
          target={95}
          duration={2}
          suffix="%"
          className="text-5xl font-bold text-green-600"
        />
        <p>Client Satisfaction</p>
      </div>

      <div>
        <CountUpNumber
          target={50}
          duration={2}
          prefix="$"
          suffix="M+"
          className="text-5xl font-bold text-purple-600"
        />
        <p>Revenue Generated</p>
      </div>
    </div>
  );
}
```

---

### 4. **ParallaxSection**
Creates a parallax scrolling effect with background image.

**Props:**
- `speed`: Parallax speed multiplier (0.5 = slow, 1 = normal, 2+ = fast) (default: `0.5`)
- `backgroundImage`: URL to background image
- `className`: CSS classes for container
- `children`: Content to display over the parallax background

**Example Usage:**
```tsx
import ParallaxSection from '@/components/ParallaxSection';

export default function Hero() {
  return (
    <ParallaxSection
      speed={0.5}
      backgroundImage="https://images.unsplash.com/photo-..."
      className="h-96"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-4xl font-bold text-white">Your Title</h2>
      </div>
    </ParallexSection>
  );
}
```

---

### 5. **PinSection**
Pins an element to the viewport while scrolling. Useful for hero sections or important content.

**Props:**
- `duration`: How long the element stays pinned (in scroll units) (default: `3`)
- `className`: CSS classes for styling

**Example Usage:**
```tsx
import PinSection from '@/components/PinSection';

export default function StickyHero() {
  return (
    <PinSection duration={5} className="h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">This stays visible while scrolling</h1>
      </div>
    </PinSection>
  );
}
```

---

## Staggered Animation Example

For staggered animations, wrap items with `data-stagger` attribute:

```tsx
<ScrollTriggerAnimation animationType="stagger" stagger={0.2}>
  <div className="space-y-4">
    <div data-stagger>Item 1</div>
    <div data-stagger>Item 2</div>
    <div data-stagger>Item 3</div>
  </div>
</ScrollTriggerAnimation>
```

---

## Best Practices

1. **Performance**: Keep animation duration reasonable (0.5-1 second) for better performance
2. **Accessibility**: Ensure content is readable without animations
3. **Mobile**: Consider reducing animation complexity on mobile devices
4. **ScrollTrigger Cleanup**: All components automatically clean up ScrollTriggers on unmount
5. **Combining Animations**: Use multiple components in sequence for complex animations

---

## Advanced: Custom GSAP Animations

For more complex animations, you can directly use GSAP with ScrollTrigger:

```tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CustomAnimation() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 2,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1, // Scrub animation to scroll
        markers: false,
      },
    });
  }, []);

  return <div ref={boxRef}>Rotating Box</div>;
}
```

---

## GSAP ScrollTrigger Docs

For more advanced configurations, refer to the [GSAP ScrollTrigger Documentation](https://gsap.com/docs/Plugins/ScrollTrigger/)

Key properties:
- `trigger`: Element that triggers animation
- `start`: When animation starts (e.g., "top 80%")
- `end`: When animation ends
- `scrub`: Links animation to scrollbar (true/1-5 for smoothing)
- `pin`: Pins element in place while scrolling
- `onEnter/onLeave`: Callbacks for trigger events
