import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AIBot() {
  const [isAwake, setIsAwake] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'prompt' | 'form' | 'submitting' | 'success' | 'error'>('prompt');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAwake(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('submitting');
    setErrorMessage('');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setStep('success');
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        setErrorMessage(data.error || 'Transmission failed.');
        setStep('error');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again.');
      setStep('error');
    }
  };

  if (!isAwake) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 bg-panel border border-cyan/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="bg-obsidian/80 p-4 border-b border-cyan/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-cyan" />
                <span className="font-heading font-semibold text-ghost text-sm">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-ghost/50 hover:text-ghost transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-5">
              {step === 'prompt' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <p className="font-heading text-sm text-ghost/80 leading-relaxed">
                    Hi! I'm Kayam's AI assistant. He's currently building the future, but would you like to get in touch with him?
                  </p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setStep('form')}
                      className="flex-1 py-2 bg-cyan/10 hover:bg-cyan/20 text-cyan border border-cyan/20 rounded-lg text-sm font-medium transition-colors"
                    >
                      Yes, let's connect
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 'form' && (
                <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-3">
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name" 
                    className="w-full bg-obsidian border border-white/10 rounded-lg px-3 py-2 text-sm text-ghost focus:outline-none focus:border-cyan/50"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Your Email" 
                    className="w-full bg-obsidian border border-white/10 rounded-lg px-3 py-2 text-sm text-ghost focus:outline-none focus:border-cyan/50"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  <textarea 
                    required
                    placeholder="Message" 
                    rows={3}
                    className="w-full bg-obsidian border border-white/10 rounded-lg px-3 py-2 text-sm text-ghost focus:outline-none focus:border-cyan/50 resize-none"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                  <button 
                    type="submit"
                    className="w-full py-2 bg-cyan text-obsidian rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-cyan/90 transition-colors"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </motion.form>
              )}

              {step === 'submitting' && (
                <div className="py-8 flex flex-col items-center justify-center gap-3">
                  <div className="w-6 h-6 border-2 border-cyan border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm font-mono text-cyan animate-pulse">Transmitting...</p>
                </div>
              )}

              {step === 'success' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-6 flex flex-col items-center text-center gap-2">
                  <CheckCircle2 className="w-10 h-10 text-green-400 mb-2" />
                  <p className="text-sm font-heading text-ghost">Message received!</p>
                  <p className="text-xs text-ghost/50">I've forwarded this to Kayam's personal inbox.</p>
                </motion.div>
              )}

              {step === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-6 flex flex-col items-center text-center gap-2">
                  <AlertCircle className="w-10 h-10 text-red-400 mb-2" />
                  <p className="text-sm font-heading text-ghost">Transmission failed.</p>
                  <p className="text-xs text-red-400/80 px-2">{errorMessage}</p>
                  <button onClick={() => setStep('form')} className="text-xs text-cyan underline mt-2">Try again</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-cyan rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center text-obsidian relative"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        {!isOpen && step === 'prompt' && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-obsidian animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
