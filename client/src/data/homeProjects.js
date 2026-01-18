import { 
  SiReact, SiNodedotjs, SiMongodb, 
  SiJavascript, SiTailwindcss, SiHtml5 
} from 'react-icons/si';

export const homeFeatured = [
  {
    id: "mern",
    category: "MERN Stack",
    title: "Full-Stack Applications",
    count: "4 Projects",
    description: "Scalable web apps with secure authentication, database management, and API integration.",
    icons: [SiMongodb, SiReact, SiNodedotjs]
  },
  {
    id: "frontend",
    category: "Frontend Only",
    title: "Creative Web Design",
    count: "12 Projects",
    description: "Modern, responsive websites focused on high-end UI/UX, animations, and performance.",
    icons: [SiReact, SiTailwindcss, SiJavascript]
  },
  {
    id: "mini-js",
    category: "Mini JS Projects",
    title: "Logic & Algorithms",
    count: "20+ Projects",
    description: "DOM manipulation and core JavaScript challenges that demonstrate problem-solving skills.",
    icons: [SiJavascript, SiHtml5]
  }
];