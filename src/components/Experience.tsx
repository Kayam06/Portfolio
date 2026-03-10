import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setIsTyping(true);
        let i = 0;
        const interval = setInterval(() => {
          setDisplayedText(text.substring(0, i + 1));
          i++;
          if (i === text.length) {
            clearInterval(interval);
            setIsTyping(false);
          }
        }, 50);
        return () => clearInterval(interval);
      }, delay);
    }
  }, [isInView, text, delay]);

  return (
    <div ref={ref} className="font-mono text-sm md:text-base text-cyan/80">
      {displayedText}
      {isTyping && <span className="animate-pulse text-cyan">|</span>}
    </div>
  );
}

function ProgressRing({ percentage }: { percentage: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="relative flex items-center justify-center w-40 h-40">
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-white/10"
        />
        <motion.circle
          cx="80"
          cy="80"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="text-purple drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="font-display text-3xl font-bold text-ghost">{percentage}%</span>
        <span className="font-mono text-[10px] text-ghost/50 uppercase tracking-widest">Accuracy</span>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-20"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold text-ghost mb-4">
          Experience
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-cyan/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1: YCX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative bg-panel rounded-[2rem] p-8 md:p-12 border border-cyan/10 hover:border-cyan/30 shadow-xl overflow-hidden transition-colors duration-500"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.05) 0%, transparent 70%)' }} />
          
          <div className="relative z-10">
            <div className="absolute top-0 right-0 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span className="font-mono text-xs text-cyan uppercase tracking-widest">LIVE</span>
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-ghost mb-2">
              AI & Data Intern
            </h3>
            <p className="font-mono text-sm text-ghost/50 mb-8">@ YCX | Remote/London, UK | May 2025 - Aug 2025</p>

            <div className="bg-obsidian/50 rounded-xl p-6 border border-white/5 font-mono text-sm space-y-4 mb-8">
              <TypingText text=">> init telemetry_stream..." delay={500} />
              <TypingText text=">> pipeline_efficiency: +40%" delay={1500} />
              <TypingText text=">> processing_time: minutes (prev: hours)" delay={2500} />
              <TypingText text=">> status: automated_enrichment_active" delay={4000} />
            </div>

            <ul className="space-y-4 text-ghost/70 font-heading leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">▹</span>
                Built automated AI-agent-based pipelines to extract and validate multi-source company intelligence data.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">▹</span>
                Resolved inconsistencies across AI outputs and Google Sheets while automating dataset refreshes using the Google Sheets API.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Card 2: App Square */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="group relative bg-panel rounded-[2rem] p-8 md:p-12 border border-purple/10 hover:border-purple/30 shadow-xl overflow-hidden transition-colors duration-500"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.05) 0%, transparent 70%)' }} />
          
          <div className="relative z-10">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-ghost mb-2">
              AI/ML Research Intern
            </h3>
            <p className="font-mono text-sm text-ghost/50 mb-8">@ Application Square Infotech | Nashik, India | Mar 2022 - Aug 2022</p>

            <div className="flex justify-center mb-10">
              <ProgressRing percentage={88} />
            </div>

            <ul className="space-y-4 text-ghost/70 font-heading leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-purple mt-1">▹</span>
                Developed machine learning models for classification tasks achieving up to 88% accuracy.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple mt-1">▹</span>
                Applied NLP techniques to analyze customer feedback and identify key product improvement insights.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple mt-1">▹</span>
                Automated data preprocessing workflows using Python reducing preparation time by 50%.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
