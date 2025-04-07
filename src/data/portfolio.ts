export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  tags: { text: string; color: string }[];
  image: string;
  liveDemo?: string;
  codeLink?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  status: string;
  statusColor: string;
}

export interface Skill {
  id: number;
  name: string;
  percentage: number;
}

export interface SkillCategory {
  id: number;
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EduFlow",
    description: "AI-powered student registration & document verification system designed to streamline university admissions processes.",
    technologies: ["React.js", "Node.js", "MongoDB", "AI/ML"],
    tags: [
      { text: "AI", color: "bg-primary-500" },
      { text: "React", color: "bg-secondary-500" }
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    liveDemo: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Career Nest",
    description: "Mentorship platform connecting students with professionals in various fields to facilitate career guidance and knowledge sharing.",
    technologies: ["React.js", "Laravel", "MySQL", "Tailwind"],
    tags: [
      { text: "Mentorship", color: "bg-primary-500" }
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    liveDemo: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "NGO Website",
    description: "Website for a non-profit organization focused on supporting community entrepreneurship initiatives and skill development programs.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress"],
    tags: [
      { text: "Community", color: "bg-accent-500" }
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    liveDemo: "#",
    codeLink: "#"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Frontend & Backend Development",
    company: "React & Laravel",
    date: "Present",
    description: "Working on full-stack development projects, creating responsive user interfaces with React.js and building robust backend systems with Laravel. Implemented modern UI/UX practices and RESTful API development.",
    status: "Present",
    statusColor: "bg-blue-100 dark:bg-blue-900/30 text-primary-600 dark:text-primary-400"
  },
  {
    id: 2,
    title: "Mentorship & Teaching",
    company: "CPS 203, 3MTT Program",
    date: "Ongoing",
    description: "Teaching HTML, CSS, and JavaScript to colleagues in CPS 203, providing guidance and mentorship. Also participated in the 3MTT program, inspiring peers through knowledge sharing and collaborative projects.",
    status: "Ongoing",
    statusColor: "bg-purple-100 dark:bg-purple-900/30 text-secondary-600 dark:text-secondary-400"
  },
  {
    id: 3,
    title: "Tech Communities & Training",
    company: "Various Programs",
    date: "Active Participant",
    description: "Active participation in tech communities and training programs to enhance skills and stay updated with industry trends. Engaged in collaborative learning environments and contributed to community projects.",
    status: "Active Participant",
    statusColor: "bg-green-100 dark:bg-green-900/30 text-accent-600 dark:text-accent-400"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Frontend",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "bg-blue-100 dark:bg-blue-900/30 text-primary-600 dark:text-primary-400",
    skills: [
      { id: 1, name: "React.js", percentage: 90 },
      { id: 2, name: "Tailwind CSS", percentage: 85 },
      { id: 3, name: "JavaScript", percentage: 88 }
    ]
  },
  {
    id: 2,
    name: "Backend",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    color: "bg-purple-100 dark:bg-purple-900/30 text-secondary-600 dark:text-secondary-400",
    skills: [
      { id: 1, name: "Node.js", percentage: 82 },
      { id: 2, name: "Laravel", percentage: 78 },
      { id: 3, name: "Express.js", percentage: 80 }
    ]
  },
  {
    id: 3,
    name: "Databases",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    color: "bg-green-100 dark:bg-green-900/30 text-accent-600 dark:text-accent-400",
    skills: [
      { id: 1, name: "MySQL", percentage: 85 },
      { id: 2, name: "MongoDB", percentage: 80 }
    ]
  }
];

export const otherSkills = [
  "API Development",
  "Software Engineering Principles",
  "C Programming",
  "Regression Analysis",
  "Arduino",
  "Pictoblox",
  "Git",
  "Responsive Design",
  "UI/UX Principles"
];

export const personalInfo = {
  name: "ODUMO DAMILOLA PEACE",
  title: "Software Engineer",
  bio: "I am a 200-level Computer Science student at Fountain University, passionate about software engineering and problem-solving. I specialize in full-stack development using React and Laravel, with experience in building scalable web applications.",
  careerGoals: "Aspiring to become a Software Engineer Lead at Microsoft and obtain a PhD in Computer Science.",
  email: "odumodamilolapeacejamb2020@gmail.com",
  phone: "07019087355",
  profileImage: "https://iili.io/35CCMXV.jpg",
  aboutImage: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  linkedIn: "https://linkedin.com",
  github: "https://github.com",
  twitter: "https://twitter.com",
  certifications: [
    "Cisco Networking Academy: English for IT 2",
    "LinkedIn Learning: Career Essentials in Software Development",
    "3MTT Software Development Training (Nigeria)"
  ],
  mentorship: [
    "Inspired peers through the 3MTT program",
    "Teaching HTML, CSS, JavaScript to colleagues in CPS 203"
  ]
};

export const typingPhrases = [
  "Software Engineer",
  "React.js Developer",
  "Node.js Developer",
  "Laravel Developer",
  "Full-stack Developer"
];
