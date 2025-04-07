import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { appScreens } from '@/lib/constants';
import { fadeIn, scaleUp } from '@/lib/animations';

export default function AppPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev === appScreens.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  const handlePrevious = () => {
    setActiveIndex(prev => (prev === 0 ? appScreens.length - 1 : prev - 1));
    setAutoplay(false);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === appScreens.length - 1 ? 0 : prev + 1));
    setAutoplay(false);
  };

  return (
    <section id="app-preview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Preview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the intuitive and powerful features of the Career Nest platform.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Phone frame */}
            <div className="relative max-w-xs mx-auto md:max-w-sm">
              <motion.div 
                className="relative z-10 pb-[200%] md:pb-[210%] overflow-hidden rounded-[40px] border-[14px] border-gray-900 shadow-xl bg-gray-900"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleUp}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeIndex}
                    className="absolute inset-0 bg-white rounded-[26px] overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={appScreens[activeIndex].imageSrc} 
                      alt={appScreens[activeIndex].title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white font-bold text-xl mb-1">
                        {appScreens[activeIndex].title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {appScreens[activeIndex].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-black rounded-b-xl z-20"></div>
              </motion.div>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {appScreens.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to screen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Feature highlights on sides (larger screens only) */}
            <div className="hidden lg:block">
              <div className="absolute top-1/4 left-0 max-w-xs transform -translate-x-1/2">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl mb-4">
                    <i className="fas fa-user-check"></i>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Perfect Matches</h4>
                  <p className="text-gray-600 text-sm">Our AI algorithm ensures you're matched with mentors who align with your goals and learning style.</p>
                </motion.div>
              </div>
              
              <div className="absolute top-2/4 right-0 max-w-xs transform translate-x-1/2">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl mb-4">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Track Progress</h4>
                  <p className="text-gray-600 text-sm">Monitor your growth with detailed analytics and milestone tracking throughout your journey.</p>
                </motion.div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 left-1/4 right-1/4 px-4">
              <button 
                onClick={handlePrevious} 
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Previous screen"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={handleNext} 
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Next screen"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <a 
              href="#download" 
              className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-full transition duration-300 inline-flex items-center shadow-md"
            >
              <i className="fas fa-arrow-down-to-bracket mr-2"></i>
              Download the App
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}