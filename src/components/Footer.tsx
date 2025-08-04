import { motion } from 'framer-motion';
import { staggerContainer, slideUp } from '@/lib/animations';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-gray-900 text-white pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Company Info */}
          <motion.div variants={slideUp} className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="text-2xl font-bold mb-4 sm:mb-6 flex items-center">
              {/* <i className="fas fa-layer-group mr-2"></i> */}
              <span>CareerNest</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Connecting mentees and mentors across Africa to supercharge career growth through personalized mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={slideUp} className="col-span-1">
            <h3 className="text-lg font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Features', id: 'features' },
                { name: 'How It Works', id: 'how-it-works' },
                { name: 'Our Team', id: 'team' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Blog', id: '' }
              ].map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Support */}
          <motion.div variants={slideUp} className="col-span-1">
            <h3 className="text-lg font-bold mb-4 sm:mb-6">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Help Center',
                'FAQs',
                'Privacy Policy',
                'Terms of Service',
                'Contact Us'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Download */}
          <motion.div variants={slideUp} className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 sm:mb-6">Download</h3>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 lg:block lg:space-y-4 lg:space-x-0">
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-xl p-3 sm:p-4 flex items-center transition duration-300 w-full">
                <i className="fab fa-google-play text-xl sm:text-2xl mr-3 sm:mr-4"></i>
                <div>
                  <div className="text-xs text-gray-400">Download on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-xl p-3 sm:p-4 flex items-center transition duration-300 w-full">
                <i className="fab fa-apple text-xl sm:text-2xl mr-3 sm:mr-4"></i>
                <div>
                  <div className="text-xs text-gray-400">Download on</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Career Nest. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
