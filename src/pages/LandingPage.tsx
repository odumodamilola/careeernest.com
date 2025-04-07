import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import LearningTracks from '../components/LearningTracks';
import HowItWorks from '../components/HowItWorks';
import AppPreview from '../components/AppPreview';
import Impact from '../components/Impact';
import Team from '../components/Team';
import Sponsors from '../components/Sponsors';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

interface LandingPageProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function LandingPage({ theme, toggleTheme }: LandingPageProps) {
  useEffect(() => {
    document.title = "Career Nest - Your Career, Supercharged by Mentorship";
    
    // Add smooth scrolling behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Features />
        <LearningTracks />
        <HowItWorks />
        <AppPreview />
        <Impact />
        <Team />
        <Sponsors />
        <Testimonials />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
