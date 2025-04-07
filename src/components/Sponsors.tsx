import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';

export default function Sponsors() {
  // Mock partner placeholders
  const partners = Array(6).fill(null).map((_, i) => `Partner ${i + 1}`);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-4">Supported By</h2>
          <p className="text-gray-600">Proud to partner with organizations committed to developing African talent.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="h-16 w-32 bg-gray-100 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
              variants={scaleUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-gray-400 font-medium">{partner}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
