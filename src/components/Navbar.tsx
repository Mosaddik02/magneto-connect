
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 px-6 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-bold gradient-text">Growth Magnet AI</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
            <a href="#benefits" className="text-foreground/80 hover:text-primary transition-colors">Benefits</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary">Login</a>
            <CTAButton>Get Started</CTAButton>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-lg mt-4 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col p-4">
            <a href="#features" className="py-3 text-foreground/80 hover:text-primary">Features</a>
            <a href="#benefits" className="py-3 text-foreground/80 hover:text-primary">Benefits</a>
            <a href="#testimonials" className="py-3 text-foreground/80 hover:text-primary">Testimonials</a>
            <a href="#pricing" className="py-3 text-foreground/80 hover:text-primary">Pricing</a>
            <a href="#" className="py-3 text-foreground/80 hover:text-primary">Login</a>
            <CTAButton className="mt-3">Get Started</CTAButton>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
