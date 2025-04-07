import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '@/lib/animations';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    if (email && name) {
      setSubscribed(true);
      setEmail('');
      setName('');
      
      // Reset the subscribed state after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <section id="newsletter" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/80 to-secondary/90 rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <motion.div 
                className="md:w-1/2 p-8 md:p-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInLeft}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay in the loop
                </h3>
                <p className="text-white/90 mb-6">
                  Subscribe to our newsletter for the latest mentorship tips, success stories, and platform updates.
                </p>
                
                {subscribed ? (
                  <motion.div 
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fas fa-check-circle text-2xl mb-2"></i>
                    <p>Thanks for subscribing! We'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-3">
                      <div>
                        <label htmlFor="name" className="sr-only">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name" 
                          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email" 
                          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                          required
                        />
                      </div>
                      <motion.button 
                        type="submit" 
                        className="w-full bg-white text-primary font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <i className="fas fa-paper-plane mr-2"></i>
                        Get Mentorship Tips & Updates
                      </motion.button>
                    </div>
                  </form>
                )}
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 bg-white p-8 md:p-10 flex items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInRight}
              >
                <div>
                  <h4 className="text-xl font-bold mb-4">
                    What You'll Get:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Weekly mentorship tips and resources',
                      'Success stories from our community',
                      'New features and platform updates',
                      'Exclusive mentorship opportunities',
                      'Career development workshops'
                    ].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}