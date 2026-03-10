import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { GlowCard } from './ui/spotlight-card';

const projects = [
  {
    title: 'OtoNet',
    subtitle: 'Deep Learning Model for Otoscopic Images',
    description: 'Developed an AI-powered otoscopic disease detection system using PyTorch classifying five diseases including AOM, CSOM, Earwax, Normal, and Otitis Externa. Achieved 90% accuracy with EfficientNet-B0 and 85% with MobileNet V2. Used SE-ResNet architecture and Grad-CAM visualization to highlight pathology regions improving interpretability.',
    tags: ['Python', 'PyTorch', 'SE-ResNet', 'EfficientNet-B0'],
    link: 'https://github.com/Kayam06',
    colorClasses: {
      border: 'border-cyan/10',
      hoverBorder: 'hover:border-cyan/30',
      text: 'text-cyan/80',
      iconBorder: 'border-cyan/30',
      iconText: 'text-cyan',
      iconHoverBg: 'group-hover:bg-cyan',
      tagBorder: 'border-cyan/20',
      tagBg: 'bg-cyan/5',
      tagText: 'text-cyan'
    }
  },
  {
    title: 'Tesla Q4 & FY2025 Financial Intelligence Dashboard',
    subtitle: 'AI-Assisted Development',
    description: 'Built an AI-assisted financial intelligence dashboard analyzing Tesla\'s Q4 and FY2025 performance using modern vibe coding workflows. Analyzed metrics including $94.8B revenue, $6.2B free cash flow, 1.6M vehicle deliveries, and 46.7 GWh energy deployments. Identified Tesla\'s revenue shift with 10% automotive decline and 27% energy growth.',
    tags: ['Python', 'Cursor', 'Claude AI', 'Supabase', 'n8n'],
    link: 'https://tesla-report-gamma.vercel.app',
    colorClasses: {
      border: 'border-purple/10',
      hoverBorder: 'hover:border-purple/30',
      text: 'text-purple/80',
      iconBorder: 'border-purple/30',
      iconText: 'text-purple',
      iconHoverBg: 'group-hover:bg-purple',
      tagBorder: 'border-purple/20',
      tagBg: 'bg-purple/5',
      tagText: 'text-purple'
    }
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 10); // max 10 deg rotation
    y.set(yPct * -10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowColor = project.colorClasses.text.includes('cyan') ? 'cyan' : 'purple';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
      className="group relative"
    >
      <GlowCard 
        customSize 
        glowColor={glowColor}
        className={`w-full p-8 md:p-12 ${project.colorClasses.border} ${project.colorClasses.hoverBorder} transition-colors duration-500`}
      >
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10 transition-all duration-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-semibold text-ghost mb-2">
                {project.title}
              </h3>
              <p className={`font-mono text-sm uppercase tracking-widest ${project.colorClasses.text}`}>
                {project.subtitle}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 rounded-full border group-hover:text-obsidian transition-colors ${project.colorClasses.iconBorder} ${project.colorClasses.iconText} ${project.colorClasses.iconHoverBg}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <p className="font-heading text-lg text-ghost/70 leading-relaxed mb-10 max-w-4xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full border font-mono text-xs uppercase tracking-wider ${project.colorClasses.tagBorder} ${project.colorClasses.tagBg} ${project.colorClasses.tagText}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-16 max-w-7xl mx-auto" style={{ perspective: "1000px" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-20"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold text-ghost mb-4">
          Projects
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-purple/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
