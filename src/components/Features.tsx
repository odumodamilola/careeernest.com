import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { features } from '@/lib/constants';
import { fadeIn, slideUp, slideInLeft, slideInRight } from '@/lib/animations';

export default function Features() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeFeature = features.find(feature => feature.id === activeTab) || features[0];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how Career Nest helps connect mentees with the right mentors and accelerates professional growth.
          </p>
        </motion.div>

        {/* Feature Tabs */}
        <div className="mb-10">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUp}
          >
            {features.map((feature) => (
              <motion.button
                key={feature.id}
                className={`py-2 px-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === feature.id 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => handleTabChange(feature.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature.title.split(' ')[0]} {/* Displaying only the first word for tab labels */}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="feature-content"
            >
              <div className="flex flex-col md:flex-row items-center">
                <motion.div 
                  className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-2xl font-bold mb-4">{activeFeature.title}</h3>
                  <p className="text-gray-600 mb-6">{activeFeature.description}</p>
                  <ul className="space-y-3">
                    {activeFeature.benefits.map((benefit, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div 
                  className="md:w-1/2"
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={activeFeature.imageSrc}
                      alt={activeFeature.imageAlt}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
