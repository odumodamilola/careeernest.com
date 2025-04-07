import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';

export default function CTA() {
  return (
    <section id="download" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Supercharge Your Career?</h2>
          <p className="text-xl text-indigo-100 mb-10">
            Join thousands of professionals across Africa who are accelerating their growth through structured mentorship.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              href="#" 
              className="bg-white hover:bg-gray-100 text-primary font-semibold py-4 px-8 rounded-full transition duration-300 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-google-play text-xl mr-3"></i>
              <div>
                <div className="text-xs">Download on</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </motion.a>
            <motion.a 
              href="#" 
              className="bg-white hover:bg-gray-100 text-primary font-semibold py-4 px-8 rounded-full transition duration-300 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-apple text-xl mr-3"></i>
              <div>
                <div className="text-xs">Download on</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </motion.a>
          </motion.div>
          
          <motion.div 
            id="become-mentor" 
            className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Become a Mentor</h3>
            <p className="text-indigo-100 mb-6">Share your expertise and help shape the next generation of African professionals.</p>
            <motion.a 
              href="#" 
              className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply as Mentor
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
