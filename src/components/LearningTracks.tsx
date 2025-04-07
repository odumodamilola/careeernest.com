import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { learningTracks } from '@/lib/constants';
import { fadeIn, staggerContainer, scaleUp, cardHover } from '@/lib/animations';

export default function LearningTracks() {
  const [activeTrack, setActiveTrack] = useState(learningTracks[0].id);

  const handleTrackChange = (trackId: string) => {
    setActiveTrack(trackId);
  };

  const activeTrackData = learningTracks.find(track => track.id === activeTrack) || learningTracks[0];

  return (
    <section id="tracks" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Tracks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our structured paths help you develop the skills and knowledge needed for your ideal career in tech.
          </p>
        </motion.div>
        
        {/* Track Selection */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {learningTracks.map((track) => (
            <motion.button
              key={track.id}
              className={`py-3 px-5 rounded-full font-medium flex items-center transition-all duration-300 ${
                activeTrack === track.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white hover:bg-gray-100 text-gray-700 shadow-sm'
              }`}
              onClick={() => handleTrackChange(track.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={scaleUp}
            >
              <i className={`fas ${track.icon} mr-2`}></i>
              {track.title}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Active Track Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTrack}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl mx-auto mb-4">
                  <i className={`fas ${activeTrackData.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">{activeTrackData.title}</h3>
                <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-6">{activeTrackData.description}</p>
                <h4 className="font-bold text-lg mb-3">Learning Outcomes:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeTrackData.outcomes.map((outcome, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gray-50 rounded-lg p-3 flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0">
                        <i className="fas fa-check text-xs"></i>
                      </div>
                      <span>{outcome}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 text-center md:text-left"
                  whileHover="hover"
                  initial="rest"
                >
                  <motion.button 
                    className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md"
                    variants={cardHover}
                  >
                    Explore This Track
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}