import { motion } from 'framer-motion';
import { slideUp, slideInLeft, slideInRight } from '@/lib/animations';

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBecomeMentor = () => {
    const mentorSection = document.getElementById('become-mentor');
    if (mentorSection) {
      mentorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Career, <span className="text-primary">Supercharged</span> by Mentorship
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Career Nest connects aspiring professionals with experienced mentors across Africa, providing personalized guidance to accelerate your career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-center shadow-lg hover:shadow-xl flex items-center justify-center"
                onClick={scrollToDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-arrow-down-to-bracket mr-2"></i>
                Download the App
              </motion.button>
              <motion.button
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-primary border-2 border-primary font-semibold py-3 px-8 rounded-full transition duration-300 text-center flex items-center justify-center"
                onClick={scrollToBecomeMentor}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-user-tie mr-2"></i>
                Become a Mentor
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative w-full max-w-md lg:max-w-none mx-auto"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="relative bg-gradient-to-br from-indigo-100 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/20 rounded-3xl p-4 shadow-xl md:ml-8">
              <img 
                src="https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c9?auto=format&fit=crop&w=800&q=80" 
                alt="Career Nest App Interface" 
                className="rounded-2xl shadow-inner border border-gray-100 dark:border-gray-700 w-full"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold dark:text-white">500+</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Mentored Students</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hidden sm:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold dark:text-white">100+</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Active Mentors</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12 sm:mt-20 text-center"
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ delay: 1 }}
        >
          <button 
            onClick={scrollToFeatures}
            className="inline-block text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors duration-300"
            aria-label="Scroll to features section"
          >
            <span className="block text-sm uppercase tracking-wider mb-2">Discover More</span>
            <i className="fas fa-chevron-down animate-bounce"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
