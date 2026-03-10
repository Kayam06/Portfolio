import { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    const sections = ['experience', 'projects', 'education', 'contact'];
    
    const handleScroll = () => {
      // Offset by a third of the window height to trigger earlier
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
          }
        }
      }
      
      // If we're at the very bottom, highlight contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSection = 'contact';
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-xl bg-obsidian/70 border border-white/10 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-8">
        <a href="#" className="font-display font-bold text-lg tracking-wide text-ghost">
          KAYAM
        </a>
        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-ghost/70">
          {['experience', 'projects', 'education', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative px-4 py-2 transition-colors duration-300 capitalize ${
                activeSection === section ? 'text-cyan' : 'hover:text-cyan'
              }`}
            >
              {activeSection === section && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-cyan/10 border border-cyan/20 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {section}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
