import { motion } from 'motion/react';
import { Github, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center pl-6 md:pl-16 z-10">
      {/* Heavy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 className="font-display font-bold text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight text-ghost uppercase mb-2">
            Kayam Pathan
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <h2 className="font-display font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-cyan mb-6">
            AI & Deep Learning <span className="italic font-serif text-purple">Engineer</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <p className="font-heading text-lg md:text-xl text-ghost/70 max-w-[540px] mb-10 leading-relaxed">
            Orchestrating AI driven development workflows, training advanced deep learning models, and shipping high performance systems at the speed of thought using modern vibe coding stacks.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan text-obsidian font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          
          <a
            href="https://github.com/Kayam06"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-ghost font-semibold rounded-full hover:bg-white/5 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
