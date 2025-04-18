import mentorMatchingImg from '../assets/images/1551434678-e076c223a692.jpg';
import chatSystemImg from '../assets/images/1579389083078-4e7018379f7e.jpg';
import bookingEngineImg from '../assets/images/1552581234-26160f608093.jpg';

// Feature data
export const features = [
  {
    id: 'smart-matching',
    title: 'AI-Driven Mentor Matching',
    description: 'Our advanced algorithm pairs you with mentors based on your career goals, skills gaps, and personality traits - ensuring the perfect match for your career journey.',
    benefits: [
      'Personality and communication style compatibility',
      'Industry and experience-based matching',
      'Goal-oriented mentor suggestions'
    ],
    imageSrc: mentorMatchingImg,
    imageAlt: 'AI Mentor Matching Interface'
  },
  {
    id: 'chat-system',
    title: 'Real-Time Chat System',
    description: 'Stay connected with your mentor or mentee through our secure and intuitive messaging platform. Share resources, ask questions, and get timely feedback.',
    benefits: [
      'End-to-end encrypted messages',
      'File and resource sharing',
      'Message read receipts and typing indicators'
    ],
    imageSrc: chatSystemImg,
    imageAlt: 'Chat Interface'
  },
  {
    id: 'booking-engine',
    title: 'Intelligent Booking Engine',
    description: 'Schedule and manage mentorship sessions with an easy-to-use calendar interface. Set your availability and find the perfect time slot that works for both parties.',
    benefits: [
      'Calendar integration with popular providers',
      'Automated reminders and notifications',
      'Time zone intelligent scheduling'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Booking Calendar Interface'
  },
  {
    id: 'learning-tracks',
    title: 'Personalized Learning Tracks',
    description: 'Follow structured pathways designed for your specific career goals. Each track provides step-by-step guidance and resources to help you advance.',
    benefits: [
      'Industry-specific learning paths',
      'Progress tracking and milestones',
      'Recommended resources and assignments'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Learning Tracks Interface'
  },
  {
    id: 'multi-role',
    title: 'Multi-Role Support',
    description: 'Whether you\'re a mentor, mentee, or both, our platform adapts to your needs with role-specific dashboards and features.',
    benefits: [
      'Tailored onboarding for each role',
      'Switch between mentor and mentee modes',
      'Role-specific tools and resources'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Multi-Role Dashboard'
  },
  {
    id: 'secure-sign-in',
    title: 'Secure Authentication',
    description: 'Your data and privacy are protected with advanced security measures. Access your personalized dashboard with confidence and peace of mind.',
    benefits: [
      'Multi-factor authentication',
      'Data encryption and privacy controls',
      'Secure session management'
    ],
    imageSrc: bookingEngineImg,
    imageAlt: 'Secure Authentication Interface'
  }
];

// How it works steps
export const steps = [
  {
    number: 1,
    title: 'Sign Up',
    description: 'Create your profile and specify your goals, interests, and experience.',
    imageSrc: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Sign Up Process'
  },
  {
    number: 2,
    title: 'Choose Track',
    description: 'Select your career path and learning track from our diverse options.',
    imageSrc: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Choose Track Process'
  },
  {
    number: 3,
    title: 'Get Matched',
    description: 'Our AI algorithm connects you with the perfect mentor based on your needs.',
    imageSrc: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Matching Process'
  },
  {
    number: 4,
    title: 'Book Sessions',
    description: 'Schedule one-on-one meetings with your mentor at times that work for both of you.',
    imageSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Booking Process'
  },
  {
    number: 5,
    title: 'Grow Career',
    description: 'Apply insights, track progress, and achieve your professional goals.',
    imageSrc: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Career Growth'
  }
];

// Stats for Impact section
export const impactStats = [
  {
    value: 500,
    label: 'Mentored Students',
    description: 'Young professionals advancing their careers with personalized guidance'
  },
  {
    value: 100,
    label: 'Active Mentors',
    description: 'Industry experts sharing knowledge and experience to guide the next generation'
  },
  {
    value: 10,
    label: 'African Countries',
    description: 'Building a continent-wide network of professional mentorship'
  }
];

// Team members
export const teamMembers = [
  {
    name: 'Sarah Okonkwo',
    role: 'CEO & Founder',
    bio: 'Former Google executive passionate about unlocking Africa\'s talent potential through mentorship.',
    imageSrc: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'David Mutua',
    role: 'CTO',
    bio: 'Tech innovator with 10+ years experience building scalable platforms that connect communities.',
    imageSrc: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Amina Diallo',
    role: 'Head of Mentorship',
    bio: 'Career development expert who has helped hundreds of professionals find their career path.',
    imageSrc: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
    instagram: '#'
  }
];

// Testimonials
export const testimonials = [
  {
    name: 'Chioma E.',
    role: 'Software Engineer',
    testimonial: 'Career Nest matched me with a senior developer who helped me overcome my coding challenges and guided me through interview preparation. Within 3 months, I landed my dream job at a top tech company. The personalized mentorship made all the difference!',
    imageSrc: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    outcomes: ['Landed Tech Job', 'Technical Growth', 'Interview Skills']
  },
  {
    name: 'Michael K.',
    role: 'Marketing Specialist',
    testimonial: 'As someone transitioning from a different industry, I was struggling to find my footing in marketing. My mentor provided practical insights and helped me build a portfolio that showcased my transferable skills. Now I\'m confidently leading campaigns!',
    imageSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    outcomes: ['Career Transition', 'Portfolio Development', 'Leadership Skills']
  },
  {
    name: 'Grace N.',
    role: 'Product Manager',
    testimonial: 'The structured approach to mentorship at Career Nest is unlike anything else. My mentor helped me navigate the complexities of product management through real-world scenarios and challenges. The learning tracks were perfectly tailored to my needs.',
    imageSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    outcomes: ['Product Strategy', 'Stakeholder Management', 'Decision Making']
  }
];

// Network data for Impact section
export const networkData = [
  { region: 'Nigeria & West Africa', percentage: 40, color: 'bg-primary' },
  { region: 'Kenya & East Africa', percentage: 30, color: 'bg-secondary' },
  { region: 'South Africa & Southern Africa', percentage: 20, color: 'bg-accent' },
  { region: 'Other regions', percentage: 10, color: 'bg-gray-400' }
];

// Learning tracks data
export const learningTracks = [
  {
    id: 'software-dev',
    title: 'Software Development',
    icon: 'fa-code',
    description: 'Learn to build applications, websites and systems with guidance from experienced developers.',
    outcomes: ['Full-stack development skills', 'Portfolio of projects', 'Technical interview readiness']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    icon: 'fa-paint-brush',
    description: 'Master the art of creating beautiful, functional interfaces and exceptional user experiences.',
    outcomes: ['Design thinking methodology', 'Prototyping skills', 'User research techniques']
  },
  {
    id: 'product-mgmt',
    title: 'Product Management',
    icon: 'fa-tasks',
    description: 'Develop the skills to guide products from conception to market success.',
    outcomes: ['Product roadmapping', 'Stakeholder management', 'Market analysis skills']
  },
  {
    id: 'qa-testing',
    title: 'QA & Testing',
    icon: 'fa-vial',
    description: 'Learn to ensure software quality through systematic testing and quality assurance protocols.',
    outcomes: ['Test automation', 'Quality control processes', 'Bug tracking and reporting']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'fa-shield-alt',
    description: 'Protect systems and data with cutting-edge security practices and threat prevention.',
    outcomes: ['Security assessment skills', 'Threat detection', 'Security implementation']
  }
];

// App preview screens
export const appScreens = [
  {
    id: 'sign-up',
    title: 'Simple Sign-Up',
    description: 'Create your profile in minutes and start your mentorship journey.',
    imageSrc: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'browse-mentors',
    title: 'Browse Mentors',
    description: 'Explore our diverse community of experienced industry professionals.',
    imageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'match-ai',
    title: 'AI Matching',
    description: 'Get paired with the perfect mentor based on your goals and preferences.',
    imageSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'in-app-chat',
    title: 'Secure Messaging',
    description: 'Communicate directly with your mentor through our encrypted platform.',
    imageSrc: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'session-booking',
    title: 'Easy Scheduling',
    description: 'Book mentorship sessions that fit perfectly into your calendar.',
    imageSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
  },
];