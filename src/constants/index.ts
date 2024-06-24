import type { Experience, Project, Skill } from "@/types";
import {
  ansarusunna,
  antdesign,
  aws,
  bootstrap,
  boqolsoon,
  c_plus_plus,
  css,
  docker,
  expressjs,
  figma,
  firebase,
  galmart,
  git,
  githubSvg,
  googlecloud,
  hoobal,
  html,
  javascript,
  jquery,
  materialui,
  mongodb,
  mysql,
  nextjs,
  nodejs,
  python,
  reactjs,
  reactrouter,
  redux,
  soolai,
  sql,
  tailwind,
  typescript,
  vuejs,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    description: "Responsive websites with React.",
  },
  {
    title: "React Native Developer",
    description: "Cross-platform mobile apps.",
  },
  {
    title: "Backend Developer",
    description: "Scalable server-side solutions.",
  },
  {
    title: "Content Creator",
    description: "Technical blogs and tutorials.",
  },
];

export const skills: Skill[] = [
  {
    title: "Frontend Development",
    technologies: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Typescript", icon: typescript },
      { name: "JavaScript", icon: javascript },
      { name: "JQuery", icon: jquery },
      { name: "React.JS", icon: reactjs },
      { name: "Material UI", icon: materialui },
      { name: "Ant Design", icon: antdesign },
      { name: "React-router", icon: reactrouter },
      { name: "Redux", icon: redux },
      { name: "Next.JS", icon: nextjs },
      { name: "Vue.JS", icon: vuejs },
    ],
  },
  {
    title: "Backend Development",
    technologies: [
      { name: "Node.JS", icon: nodejs },
      { name: "Express.JS", icon: expressjs },
      { name: "MongoDB", icon: mongodb },
      { name: "SQL", icon: sql },
      { name: "MySQL", icon: mysql },
      { name: "Firebase", icon: firebase },
    ],
  },
  {
    title: "Programming Languages",
    technologies: [
      { name: "Python", icon: python },
      { name: "C++", icon: c_plus_plus },
    ],
  },
  {
    title: "Cloud Services",
    technologies: [
      { name: "AWS", icon: aws },
      { name: "Google Cloud", icon: googlecloud },
      { name: "Firebase", icon: firebase },
    ],
  },
  {
    title: "Version Controll \n and Containarization",
    technologies: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: githubSvg },
      { name: "Docker", icon: docker },
    ],
  },
  {
    title: "UI Design",
    technologies: [{ name: "Figma", icon: figma }],
  },
];

const experiences: Experience[] = [
  {
    title: "React.js Developer",
    company_name: "Galmart supermarket",
    icon: galmart,
    icon_bg: "orange",
    date: "Aug 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Galmart supermarket",
    icon: galmart,
    icon_bg: "skyblue",
    date: "Feb 2022 - July 2022",
    points: [
      "Developing and maintaining cross-platform apps using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Boqolsoon Academy",
    icon: boqolsoon,
    icon_bg: "#383E56",
    date: "July 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Ansaru Sunnah Trust Group of Schools",
    icon: ansarusunna,
    icon_bg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abdurezak proved me wrong.",
    name: "Anab ali",
    designation: "Manager",
    company: "Galmart Supermarket",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about his clients' success like Abdurezak does.",
    name: "Nicholas Umawenda",
    designation: "Princible",
    company: "Boqolsoon Academy",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abdurezak optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "David Wanjela",
    designation: "Manager",
    company: "Ansaru Sunnah Trust Group of Schools",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const projects: Project[] = [
  {
    title: "Hoobal",
    description:
      "Hoobal is a responsive music website built with ReactJS, Tailwind CSS, and Redux Toolkit, offering genre-based music discovery, search, and playback using the Shazam API.",
    technologies: [
      {
        name: "Javascript",
        color: "text-yellow-300",
      },
      {
        name: "Tailwind CSS",
        color: "text-cyan-300",
      },
      {
        name: "React.JS",
        color: "text-amber-500",
      },
      {
        name: "Swiper",
        color: "pink-text-gradient",
      },
      {
        name: "Redux toolkit",
        color: "text-violet-500",
      },
      {
        name: "Shazam api",
        color: "text-orange-600",
      },
    ],
    image: hoobal,
    source_code: "https://github.com/awelrisak/hoobal",
    demo: "https://hoobal.netlify.app",
  },
  {
    title: "Sool AI",
    description:
      "SoolAI is a powerful AI image generator inspired by MidJourney & DALL·E, offering a seamless Full Stack MERN experience. Create stunning AI-generated images from prompts, share your creations with the community, and explore the artistic wonders of artificial intelligence. ",
    technologies: [
      {
        name: "Typescript",
        color: "text-blue-300",
      },
      {
        name: "Tailwind CSS",
        color: "text-cyan-400",
      },
      {
        name: "React",
        color: "text-amber-500",
      },
      {
        name: "Node.JS",
        color: "text-green-600",
      },
      {
        name: "MongoDB",
        color: "text-lime-300",
      },
      {
        name: "Mongoose",
        color: "text-indigo-600",
      },
      {
        name: "Express.JS",
        color: "text-slate-100",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: soolai,
    source_code: "https://github.com/awelrisak/soolai",
    demo: "https://soolai.netlify.app",
  },
  /*{
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code: "https://github.com/",
    demo: "https://hoobal.netlify.app"
  },*/
];

const posts = [
  {
    id: "1",
    title: "Exploring the Bustling Markets of Nairobi",
    description:
      "Immerse yourself in the vibrant atmosphere of Nairobi's markets, where you can find everything from fresh produce and handcrafted souvenirs to local delicacies and colorful textiles. This blog explores some of the must-visit markets in the Kenyan capital, offering a glimpse into the city's rich culture and commerce.",
    image: "https://source.unsplash.com/random/804x452?random=1",
    publishedDate: "2024-06-20T00:00:00.000Z",
  },
  {
    id: "2",
    title: "A Hike Up Mount Kenya: A Challenge Worth Taking",
    description:
      "For the adventurous spirit, Mount Kenya offers a thrilling climb with breathtaking views. This blog details the different routes, the necessary preparations, and what to expect on your trek to the peak of Kenya's highest mountain.",
    image: "https://source.unsplash.com/random/804x452?random=1",
    publishedDate: "2024-06-19T00:00:00.000Z",
  },
  {
    id: "3",
    title: "The Wildlife Spectacle: A Kenyan Safari Adventure",
    description:
      "Embark on an unforgettable safari experience in Kenya and witness the majestic wildlife roaming free across the savannas. This blog explores the different safari options, the diverse animals you might encounter, and tips for making the most of your African adventure.",
    image: "https://source.unsplash.com/random/804x452?random=1",
    publishedDate: "2024-06-18T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Unveiling the History of Nairobi National Museum",
    description:
      "Step back in time and delve into Kenya's rich history at the Nairobi National Museum. This blog explores the museum's exhibits, from ancient artifacts and fossils to cultural displays and wildlife presentations, offering a window into Kenya's past and present.",
    image: "https://source.unsplash.com/random/804x452?random=1",
    publishedDate: "2024-06-17T00:00:00.000Z",
  },
  {
    id: "5",
    title: "The Culinary Delights of Kenyan Cuisine",
    description:
      "Tantalize your taste buds with the unique flavors of Kenyan cuisine. This blog explores the traditional dishes you must try, the fresh ingredients used, and the cultural significance of food in Kenya.",
    image: "https://source.unsplash.com/random/804x452?random=1",
    publishedDate: "2024-06-16T00:00:00.000Z",
  },
  {
    id: "6",
    title: "The Artistic Tapestry: Exploring Kenyan Crafts and Markets",
    description:
      "Discover the vibrant world of Kenyan crafts and immerse yourself in the artistic heritage of the country. This blog explores the different types of crafts, the traditional techniques used, and the best places to find unique souvenirs in Nairobi's markets.",
    image: "https://source.unsplash.com/random/804x452?random=1",
    publishedDate: "2024-06-15T00:00:00.000Z",
  },
  {
    id: "7",
    title: "Nairobi's Bustling Coffee Scene: A Caffeinated Adventure",
    description:
      "Kenya is renowned for its high-quality coffee, and Nairobi offers a vibrant coffee scene to explore. This blog dives into the city's cafes, the different coffee brewing methods, and the perfect cup of Kenyan coffee to savor.",
    image: "https://source.unsplash.com/random/804x452?random=1",
    publishedDate: "2024-06-14T00:00:00.000Z",
  },
];

export { experiences, projects, services, testimonials, posts };
