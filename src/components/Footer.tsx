import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-obsidian border-t border-cyan/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan/5 pointer-events-none" />
      
      <div className="py-32 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-[8vw] font-bold text-ghost leading-[0.9] tracking-tighter mb-8">
            Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">future.</span>
          </h2>
          
          <a
            href="mailto:kayampathan06@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ghost text-obsidian font-semibold rounded-full hover:scale-105 transition-transform"
          >
            <Mail className="w-5 h-5" />
            Initiate Contact
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end border-t border-white/10 pt-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-ghost/50 uppercase tracking-widest">
                System Operational
              </span>
            </div>
            <p className="font-mono text-xs text-ghost/30">
              © {currentYear} Kayam Pathan. All rights reserved.
            </p>
          </div>

          <div className="flex justify-start md:justify-end gap-6">
            <a href="https://www.linkedin.com/in/kayam06/" target="_blank" rel="noopener noreferrer" className="text-ghost/50 hover:text-cyan transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Kayam06" target="_blank" rel="noopener noreferrer" className="text-ghost/50 hover:text-cyan transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/kayam06/" target="_blank" rel="noopener noreferrer" className="text-ghost/50 hover:text-cyan transition-colors">
              <Code2 className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
