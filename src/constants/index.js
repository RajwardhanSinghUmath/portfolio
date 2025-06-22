import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bluestock,
  dsc,

  fintractImg,
  outreachAgentImg,
  contentAgentImg,
  reachsureImg,
  looplearnImg,
  threejs,
  chzztImg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "AI Agent Development",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Data Structures and Algorithm",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Software Development Intern (Team Lead)",
    company_name: "Bluestock Fintech",
    icon: bluestock, // replace with actual path or import
    iconBg: "#1A202C",
    date: "June 2025 – July 2025",
    points: [
      "Led the development of IPO listing and tracking features using Django, Django REST Framework, and PostgreSQL.",
      "Implemented secure authentication using JWT and built scalable, modular APIs for investor workflows.",
      "Improved internal admin tools with templated dashboards and streamlined CRUD operations for financial data.",
      "Managed sprints, GitHub workflows, and pull requests while coordinating team deliverables using Notion."
    ],
  },
  {
    title: "Analyst",
    company_name: "180 Degrees Consulting, NIT Warangal",
    icon: dsc, // replace with actual path or import
    iconBg: "#2D3748",
    date: "Aug 2024 – Present",
    points: [
      "Developed AI agents in n8n using OpenAI, Gmail, Google Sheets, and Apify (Apollo.io) to automate lead generation.",
      "Built a LinkedIn content agent using Notion API, OpenAI, and RSS feeds for automated post creation and curation.",
      "Streamlined outreach workflows by integrating client research, content scheduling, and email sequences.",
      "Worked cross-functionally with consulting teams to deliver automation as part of real-world client solutions."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fintract",
    description:
      "AI-powered finance platform that tracks income, manages budgets, visualizes trends, and sends monthly reports via email using Google Generative AI.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "clerk", color: "pink-text-gradient" },
    ],
    image: fintractImg,
    link: "https://fintractai.vercel.app/",
    source_code_link: "https://github.com/RajwardhanSinghUmath/fintract",
  },
  {
    name: "Chzzt",
    description:
      "Real-time chat app with public/private messaging built using MERN stack, Socket.IO, JWT authentication, TailwindCSS and daisyUI.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
      { name: "daisyui", color: "pink-text-gradient" },
    ],
    image: chzztImg,
    link: "https://chzzt.onrender.com/",
    source_code_link: "https://github.com/RajwardhanSinghUmath/chzzt",
  },
  {
    name: "Client Outreach Agent",
    description:
      "n8n automation agent for B2B lead gen using OpenAI, Google Sheets, Gmail, Apollo.io (via Apify), and Notion for client data pipelines.",
    tags: [
      { name: "n8n", color: "blue-text-gradient" },
      { name: "openai", color: "green-text-gradient" },
      { name: "apify", color: "pink-text-gradient" },
    ],
    image: outreachAgentImg,
    link: "https://github.com/RajwardhanSinghUmath", // fallback
    source_code_link: "https://github.com/RajwardhanSinghUmath",
  },
  {
    name: "Content Creator Agent",
    description:
      "Automated LinkedIn content generation pipeline using OpenAI, Notion API, Gmail API, and RSS feeds for auto-posting and scheduling.",
    tags: [
      { name: "n8n", color: "blue-text-gradient" },
      { name: "notionapi", color: "green-text-gradient" },
      { name: "rss", color: "pink-text-gradient" },
    ],
    image: contentAgentImg,
    link: "https://github.com/RajwardhanSinghUmath", // fallback
    source_code_link: "https://github.com/RajwardhanSinghUmath",
  },
  {
    name: "ReachSure",
    description:
      "Ambulance tracking MVP built with live maps, location sharing via WhatsApp API, and real-time tracking using OpenStreetMap & Leaflet.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "leaflet", color: "pink-text-gradient" },
    ],
    image: reachsureImg,
    link: "https://reach-sure.vercel.app/",
    source_code_link: "https://github.com/RajwardhanSinghUmath/ReachSure",
  },
  {
    name: "LoopLearn",
    description:
      "Short-video-based microlearning app delivering bite-sized tutorials via a scrollable video feed. Designed with a mobile-first approach.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "videojs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: looplearnImg,
    link: "https://looplearn-sepia.vercel.app/",
    source_code_link: "https://github.com/RajwardhanSinghUmath",
  },
];


export { services, technologies, experiences, testimonials, projects };