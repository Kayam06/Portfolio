import { motion } from 'motion/react';

const education = [
  {
    degree: 'MSc Artificial Intelligence',
    specialization: 'NLP and Deep Learning Specialization - Merit',
    institution: 'Queen Mary University of London (Russell Group University)',
    location: 'London, UK',
    period: '2024 - 2025'
  },
  {
    degree: 'Bachelors in Computer Science & Engineering',
    specialization: 'Distinction',
    institution: 'Savitribai Phule University',
    location: 'Nashik, India',
    period: '2020 - 2024'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-20"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold text-ghost mb-4">
          Education
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-cyan/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="group relative p-6 rounded-2xl hover:bg-white/[0.02] transition-colors duration-500"
          >
            <div className="absolute left-2 top-6 bottom-6 w-px bg-white/10 group-hover:bg-cyan/50 transition-colors" />
            <div className="absolute left-[0.35rem] top-8 w-3 h-3 rounded-full border-2 border-obsidian bg-cyan/50 group-hover:bg-cyan transition-colors shadow-[0_0_10px_rgba(6,182,212,0)] group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            
            <div className="pl-8">
              <span className="font-mono text-sm text-cyan tracking-widest mb-4 block">
                {item.period}
              </span>
              <h3 className="font-heading text-2xl font-semibold text-ghost mb-2 group-hover:text-white transition-colors">
                {item.degree}
              </h3>
              <p className="font-heading text-lg text-purple/80 italic mb-4">
                {item.specialization}
              </p>
              <p className="font-heading text-ghost/70">
                {item.institution}
              </p>
              <p className="font-mono text-xs text-ghost/40 mt-2 uppercase tracking-wider">
                {item.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
