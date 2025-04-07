import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/constants';
import { fadeIn, staggerContainer, scaleUp, cardHover } from '@/lib/animations';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals building the future of career mentorship in Africa.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              variants={scaleUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              viewport={{ once: true }}
            >
              <motion.div className="relative overflow-hidden" variants={cardHover}>
                <img 
                  src={member.imageSrc} 
                  alt={`${member.name} - ${member.role}`} 
                  className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-gray-200">{member.role}</p>
                </div>
              </motion.div>
              <div className="p-6">
                <p className="text-gray-600">{member.bio}</p>
                <div className="mt-4 flex space-x-3">
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-primary hover:text-secondary" aria-label={`${member.name}'s LinkedIn`}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} className="text-primary hover:text-secondary" aria-label={`${member.name}'s Twitter`}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} className="text-primary hover:text-secondary" aria-label={`${member.name}'s GitHub`}>
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} className="text-primary hover:text-secondary" aria-label={`${member.name}'s Instagram`}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
