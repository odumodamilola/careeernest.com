import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/constants';
import { fadeIn, slideInLeft, slideInRight } from '@/lib/animations';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from mentees and mentors who've experienced career breakthroughs with Career Nest.
          </p>
        </motion.div>

        <div className="testimonial-slider relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <motion.div 
                  className="md:w-1/3 mb-6 md:mb-0 md:pr-8"
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <img 
                    src={testimonials[activeIndex].imageSrc}
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="text-center mt-4">
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                    <div className="flex justify-center mt-2">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400"></i>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="md:w-2/3"
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                >
                  <i className="fas fa-quote-left text-4xl text-primary/20 mb-4"></i>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {testimonials[activeIndex].testimonial}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="font-semibold">Key Outcomes:</p>
                    <div className="flex flex-wrap mt-2 gap-2">
                      {testimonials[activeIndex].outcomes.map((outcome, i) => (
                        <span key={i} className="bg-primary/10 text-primary rounded-full text-xs py-1 px-3">
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
            <button 
              onClick={handlePrevious} 
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={handleNext} 
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Testimonial navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
