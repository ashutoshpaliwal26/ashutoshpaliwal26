import { 
  ProjectType, 
  ExperienceType, 
  EducationType, 
  SkillType, 
  AchievementType, 
  SocialLinkType 
} from '../types';

export const projectData: ProjectType[] = [
  {
    id: 1,
    title: "Virtual Coworking Office Platform",
    description: "The Virtual Coworking Office Platform is an innovative project developed by Team Metaverse Realms during the CreateX competition held at M. L. V. Textile and Engineering College, Rajasthan. This platform is designed to transform remote work by creating an interactive 2D virtual office space where users can collaborate in real time.",
    detailedDescription: "The Virtual Coworking Office Platform is an innovative project developed by Team Metaverse Realms during the CreateX competition held at M. L. V. Textile and Engineering College, Rajasthan. This platform is designed to transform remote work by creating an interactive 2D virtual office space where users can collaborate in real time.",
    technologies: ["Reactjs", "Nodejs", "Expressjs", "Typescript", "Socket.io", "Figma", "Mongodb"],
    features: [
      "Interactive 2D Office: Move your avatar in a dynamic virtual workspace and interact with others.",
      "Real-Time Updates: Powered by Socket.IO for seamless communication and movement tracking.",
      "User Authentication: Secure and reliable login to manage user sessions.",
    ],
    github: "https://github.com/ashutoshpaliwal26/virtual-office.git",
    image : "../img/pngwing.png"
  },
  {
    id: 2,
    title: "Cloud Based Code Editor",
    description: "A Cloud Integrated Development Environment (IDE) is a web-based coding platform that allows developers to write, edit, debug, and run code directly from their browser without installing local development tools. It provides a complete development workspace in the cloud, accessible from anywhere, on any device, with just an internet connection.",
    detailedDescription: "A Cloud Integrated Development Environment (IDE) is a web-based coding platform that allows developers to write, edit, debug, and run code directly from their browser without installing local development tools. It provides a complete development workspace in the cloud, accessible from anywhere, on any device, with just an internet connection.",
    technologies: ["Nextjs", "Nodejs", "Expressjs", "Typescript", "Socket.io", "Github Action", "CI/CD", "Docker", "Monorepo", "Microservice", "Nginx", "Linux"],
    features: [
      "Multi-language support for popular programming languages like Java, Python, JavaScript, and more.",
      "Built-in terminals and integrated version control (e.g., Git) for seamless development workflows.",
      "Cloud-based execution so applications run on isolated container without consuming local resources.",
      "Instant environment setup, reducing configuration hassles and increasing productivity.",
    ],
    github: "https://github.com/ashutoshpaliwal26/codeai.git",
    image : "../img/pngwing.png"
  },
];

export const experienceData: ExperienceType[] = [
  {
    id: 1,
    company: "MLV Textile and Engineering College, Bhilwara",
    position: "Trainee",
    duration: "Jun 1, 2023 - Jun 30, 2023",
    description: "Completed industrial training in Programming Microcontroller fundamentals.",
    details: [
      "Learned basics of Programming",
      "Mastered the fundamentals of Internet of Things",
      "Created a sonar radar based on sonic sensor and aurdino uno",
      "Design a GUI for detect objects."
    ],
    technologies: ["Aurdino Programming", "Python", "Basic Algorithms"]
  },
  {
    id: 2,
    company: "CSRBOX Foundation in Collaboration with IBM SkillBuild",
    position: "Intern",
    duration: "Jun 3, 2024 - Aug 15, 2024",
    description: "Complet the internship in web development.",
    details: [
      "Learned basics of frontend development html, css, js, react js",
      "Mastered the fundamentals of Reactjs",
      "Created a static website for the Social Awareness"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Reactjs"]
  },
  {
    id: 3,
    company: "Diginfluence",
    position: "Intern",
    duration: "May 3, 2025 - Jun 15, 2025",
    description: "Complet the internship in django development.",
    details: [
      "Learned the concept Restfull API",
      "Learn the concept of Django",
      "Mastered the fundamentals Database and Backend Design",
      "Created a full stack applicatoin along with the Admin Panel for the client."
    ],
    technologies: ["Python", "Django", "Postgres SQL", "Postman", "Reactjs"]
  },
];

export const educationData: EducationType[] = [
  {
    id: 1,
    institution: "M. L. V. Textile and Engineering College (RTU)",
    degree: "Bachelor of Technology - Computer Science Engineering (IoT)",
    duration: "2022 - 2026",
    description: "Pursuing B.Tech with focus on Internet of Things and Computer Science fundamentals.",
    details: [
      "Coursework includes Data Structures, Algorithms, Database Management Systems, and IoT Technologies",
      "Active participant in college technical events and workshops",
    ]
  },
  {
    id: 2,
    institution: "Swami Vivekanand Govt Model School Barisadri Rajsthan",
    degree: "Senior Secondary Education",
    duration: "2021 - 2022",
    description: "Completed senior secondary education with focus on science and mathematics."
  },
  {
    id: 3,
    institution: "Vivekanand Acedmey Senior School Barisadri",
    degree: "Secondary Education",
    duration: "2019 - 2020",
    description: "Completed secondary education with distinction in core subjects."
  }
];

export const skillsData: SkillType[] = [
  { name: "HTML", level: 80, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
  { name: "Tailwind Css", level: 90, category: "frontend" },
  { name: "React.js", level: 92, category: "frontend" },
  { name: "React Native", level: 70, category: "frontend" },
  { name: "Next.js", level: 65, category: "frontend" },
  { name: "Redux Toolkit", level: 80, category: "frontend" },

  { name: "Node.js", level: 95, category: "backend" },
  { name: "Django", level: 80, category: "backend" },
  { name: "Spring", level: 75, category: "backend" },
  { name: "Spring Boot", level: 76, category: "backend" },
  { name: "Web Socket", level: 90, category: "backend" },
  { name: "GraphQL", level: 65, category: "backend" },
  { name: "Restfull APIs", level: 83, category: "backend" },

  { name: "MongoDB", level: 88, category: "database" },
  { name: "PostgresSQL", level: 85, category: "database" },
  { name: "Redis", level: 70, category: "database" },
  { name: "Prisma", level: 75, category: "database" },
  
  
  { name: "C++", level: 87, category: "language" },
  { name: "Java", level: 84, category: "language" },
  { name: "Python", level: 85, category: "language" },
  { name: "JavaScript", level: 98, category: "language" },
  { name: "TypeScript", level: 95, category: "language" },
  { name: "Yaml", level: 60, category: "language" },

  { name: "Git", level: 87, category: "other" },
  { name: "Github", level: 83, category: "other" },
  { name: "Docker", level: 88, category: "other" },
  { name: "Figma", level: 92, category: "other" },
  { name: "Postman", level: 92, category: "other" },
];

export const achievementsData: AchievementType[] = [
  {
    id: 1,
    title: "Creator of the Year",
    description: "Awarded 'Creator of the Year' for the Best Project at CreateX Intercollege Tech Event",
    date: "2023",
    icon: "Trophy"
  }
];

export const socialLinks: SocialLinkType[] = [
  {
    platform: "GitHub",
    url: "https://github.com/ashutoshpaliwal26",
    icon: "Github"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/ashutoshpaliwal26",
    icon: "Linkedin"
  },
  {
    platform: "Email",
    url: "mailto:ashutoshpaliwal26@gmail.com",
    icon: "Mail"
  }
];

export const personalInfo = {
  name: "Ashutosh Paliwal",
  title: "Software Developer",
  summary: "Passionate about creating innovative solutions and delivering high-quality software. Specialized in web and mobile application development.",
  address: "808 Metha Gali Nikumbh Chittorgarh, Rajasthan",
  phone: "+91 6367180418",
  email: "ashutoshpaliwal26@gmail.com",
  softSkills: ["Leadership", "Teamwork", "Critical Thinking"]
};