import { Fragment } from 'react';

const topRow = [
  'Python', 'PyTorch', 'C++', 'Deep Learning', 'NLP', 'Machine Learning', 'Data Analysis', 'Feature Engineering', 'C', 'JavaScript'
];

const bottomRow = [
  'Cursor', 'Claude AI', 'Supabase', 'n8n', 'Antigravity AI', 'Google AI Studio', 'Prompt Engineering', 'AI-Assisted Development', 'Git', 'Power BI', 'SQL'
];

export default function Ticker() {
  return (
    <section className="relative py-20 overflow-hidden bg-obsidian border-y border-white/5">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-8">
        {/* Top Row */}
        <div className="flex w-max animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 px-4 items-center">
              {topRow.map((tech, j) => (
                <Fragment key={j}>
                  <span className="font-mono text-xl md:text-3xl font-medium text-ghost/40 uppercase tracking-widest whitespace-nowrap">
                    {tech}
                  </span>
                  <span className="text-cyan/50 text-2xl">•</span>
                </Fragment>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Row (Reverse direction) */}
        <div className="flex w-max animate-scroll" style={{ animationDirection: 'reverse' }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 px-4 items-center">
              {bottomRow.map((tech, j) => (
                <Fragment key={j}>
                  <span className="font-mono text-xl md:text-3xl font-medium text-purple/40 uppercase tracking-widest whitespace-nowrap">
                    {tech}
                  </span>
                  <span className="text-cyan/50 text-2xl">•</span>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
