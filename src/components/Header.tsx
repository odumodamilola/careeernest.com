import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DarkModeToggle from './ui/dark-mode-toggle';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800/30' 
        : 'bg-transparent dark:bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.div 
            className="text-2xl font-bold text-primary flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* <i className="fas fa-layer-group mr-2"></i> */}
            <span className="dark:text-white">Career Nest</span>
          </motion.div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['about', 'features', 'tracks', 'how-it-works', 'app-preview', 'impact', 'team', 'testimonials'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition"
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </nav>
        
        {/* Mobile Navigation & Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        
          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('download')}
              className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-full transition duration-300"
            >
              Download App
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-2 ${!mobileMenuOpen && 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-3 py-3">
          {['about', 'features', 'tracks', 'how-it-works', 'app-preview', 'impact', 'team', 'testimonials'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition py-2 text-left"
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('download')}
            className="bg-primary hover:bg-secondary text-white text-center font-medium py-3 px-6 rounded-full transition duration-300 mt-2"
          >
            Download App
          </button>
        </div>
      </motion.div>
    </header>
  );
}
