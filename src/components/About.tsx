import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Career Nest</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bridging the gap between aspiring professionals and industry experts through structured mentorship.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Mentorship for Africa, by Africa</h3>
              <p className="text-gray-700 mb-6">
                Career Nest is built to address the unique challenges faced by African professionals, from secondary school to established careers. We believe in the power of local knowledge combined with global best practices.
              </p>
              <p className="text-gray-700">
                Our platform connects mentees with mentors who understand the African context while bringing world-class expertise to help navigate career paths in tech and beyond.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            {[
              {
                icon: "fa-handshake",
                title: "Personalized Matches",
                description: "AI-powered algorithm connects mentees with the perfect mentor"
              },
              {
                icon: "fa-comment-dots",
                title: "Direct Communication",
                description: "Secure in-app messaging and session scheduling"
              },
              {
                icon: "fa-road",
                title: "Structured Learning",
                description: "Follow defined paths with clear milestones and goals"
              },
              {
                icon: "fa-chart-line",
                title: "Progress Tracking",
                description: "Monitor your career growth with detailed analytics"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl mx-auto mb-4">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}