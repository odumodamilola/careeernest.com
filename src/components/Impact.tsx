import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { impactStats, networkData } from '@/lib/constants';
import { fadeIn, slideUp, slideInLeft, slideInRight } from '@/lib/animations';

// Animation counter hook
const useCounter = (target: number, duration: number = 2000, startDelay: number = 0) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const inView = useInView(counterRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!inView || !counterRef.current) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const counter = counterRef.current;
    const startValue = 0;
    
    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      
      if (elapsedTime < startDelay) {
        animationFrameId = requestAnimationFrame(updateCounter);
        return;
      }
      
      const progress = Math.min((elapsedTime - startDelay) / duration, 1);
      const currentValue = Math.floor(progress * (target - startValue) + startValue);
      
      counter.textContent = currentValue.toString();
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toString();
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCounter);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, target, duration, startDelay]);
  
  return counterRef;
};

export default function Impact() {
  const counterRefs = impactStats.map((stat, index) => useCounter(stat.value, 2000, index * 200));
  
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact Across Africa</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Career Nest is empowering professionals across the continent through meaningful mentorship connections.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUp}
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 text-center shadow-lg"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl font-bold text-primary mb-2" ref={counterRefs[index]}>0</div>
              <div className="text-xl font-medium">{stat.label}</div>
              <p className="mt-4 text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="bg-indigo-50 rounded-3xl overflow-hidden shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Our Growing Network</h3>
                <p className="text-gray-600 mb-8">
                  Career Nest is expanding rapidly across Africa, building strong mentorship communities in key economic hubs and beyond.
                </p>
                <div className="space-y-4">
                  {networkData.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                      <span>{item.region}: {item.percentage}% of mentorships</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="relative"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=800&q=80" 
                  alt="Map of Africa showing Career Nest's presence" 
                  className="rounded-xl shadow-md"
                />
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <i className="fas fa-globe-africa text-2xl text-primary"></i>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
