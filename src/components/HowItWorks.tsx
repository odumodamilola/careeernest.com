import { motion } from 'framer-motion';
import { steps } from '@/lib/constants';
import { fadeIn, slideInLeft, slideInRight } from '@/lib/animations';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Career Nest Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to launch your career growth journey with our mentorship platform.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-primary/20 -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0 relative max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                className={`md:flex items-center md:space-x-8 relative ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''} mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <motion.div 
                  className="absolute left-0 md:left-1/2 top-0 md:top-1/2 ml-4 md:ml-0 md:-translate-x-1/2 md:-translate-y-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </motion.div>
                <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <motion.img 
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    className="rounded-xl shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
