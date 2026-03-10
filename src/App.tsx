import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import AIBot from './components/AIBot';
import Background from './components/Background';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Internal Reasoning Block */}
      {/*
        1.1 Brand Profile: Targeting Technical Recruiters, Lead AI Engineers, CTOs. Vibe is highly technical, competent, results-driven.
        1.2 Core Psychological Lever: ROI / Efficiency. Emphasizing 40% manual prep reduction, hours to minutes processing.
        1.3 Copy Tone Rules: No exclamation marks. Lead with impact and metrics. Short sentences.
        1.4 Animation Intensity Calibration: Moderate to Technical. Purposeful reveals, medium stagger. Easing: power2.out.
        1.5 3D Element Selection: Abstract particle field reacting to mouse to symbolize neural networks/data points.
      */}
      
      <div className="noise-overlay" />
      <Cursor />
      <Navbar />
      <AIBot />
      <Background />
      
      <main className="relative z-10 overflow-x-hidden">
        <Hero />
        <Ticker />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </main>
    </>
  );
}
