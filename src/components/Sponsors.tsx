import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';

export default function Sponsors() {
  const partners = [
    {
      name: 'Google',
      logo: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png'
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',

    },{
      name: 'Bolt',
      logo: 'https://miro.medium.com/v2/resize:fit:1400/1*8JkXPJ1jQyeQRskRArptXQ.jpeg'
    },{
      name: '3MTT',
      logo: 'https://nitda.gov.ng/wp-content/uploads/2023/10/Group-5-300x168.png'
    },{
      name: 'The Founders Hub',
      logo: 'https://pbs.twimg.com/profile_images/1813916783285338112/rfwXcLiK_200x200.jpg'
    },{
      name: 'MTN Foundation',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRvQPkTv81CJPUnZzdfL6lZEaNVq_RY1vKA&s'
    },{
      name: 'NACOS FUO',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdfOHymdaQc2jjntyiofDzMSw8lr-ukFFKg&s'
    },
    {
      name: 'Hult Prize Foundation',
      logo: 'https://pgsr.mans.edu.eg/images/2024/01/06/.png'
    },{
      name: 'Youtube',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png'
    }
  ];

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
          <p className="text-gray-600">
            Proud to partner with organizations committed to developing African talent.
          </p>
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
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
