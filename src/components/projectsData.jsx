import { faReact, faJs, faHtml5, faCss3, faTailwindCss, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import VSCode from '../images/vscode.svg?react'
import Vercel from '../images/vercel.svg?react'
import Express from '../images/express.svg?react'
import Node from '../images/node.svg?react'
import MongoDB from '../images/mongoDb.svg?react'
import { iconName } from '@fortawesome/free-brands-svg-icons/fa11ty';

const projectsData = [
  {
    id: 1,
    title: "Book Verse",
    type: "MERN Stack",
    overview: "BookVerse is a full-stack digital library application that lets users discover, track, and read books online. It combines the Google Books API with a custom MERN backend to deliver a personalized reading experience — complete with authentication, a reading progress tracker, favorites, and an embedded book viewer with theme and font customization.",
    image: "/images/project7.png",
    links: { name: "Live Demo", link: "https://leinads-book-verse.vercel.app/" },
    more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/Book-verse", icon: faGithub },
    description: [
      "Digital library app built with React, Tailwind CSS, and the Google Books API",
      "Full-stack MERN app with JWT-based user authentication and account management",
      "Browse books by category, search by title or author, and view detailed book info",
      "Personal library with reading progress tracking, favorites, and reading status",
      "Embedded Google Books viewer with font size and theme customization",
      "Responsive UI with dark mode, auto dark mode, and mobile navigation support",
      "Deployed on Vercel (frontend) and Render (backend) with MongoDB Atlas"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: MongoDB, isAwesome: false, style: '' },
      { logo: Express, isAwesome: false, style: 'bg-white' },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: Node, isAwesome: false, style: 'text-cyan-400' },
      { logo: faGithub, isAwesome: true, style: '' },
      { logo: Vercel, isAwesome: false, style: '' },
    ]
  },
  {
    id: 2,
    title: "Space Tourism",
    type: "Frontend",
    overview: "Space Tourism is a multi-page frontend application inspired by a Frontend Mentor challenge. It presents an immersive UI for exploring space destinations, crew members, and technology — with smooth page transitions, dynamic routing, and a fully responsive layout built to pixel-perfect design specs.",
    image: "/images/project1.PNG",
    links: { name: "Live Demo", link: "https://space-tourism-site-gamma.vercel.app/" },
     more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/Space-Tourism-site",icon: faGithub} , 
    description: [
      "Dynamic routing between pages",
      "Fully responsive UI built with React and Tailwind"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: faFigma, isAwesome: true, style: 'text-pink-500' },
      { logo: faGithub, isAwesome: true, style: 'text-white' },
      { logo: Vercel, isAwesome: false, style: '' },
    ]
  },
  {
    id: 3,
    title: "Weather App",
    type: "Frontend / API Integration",
    overview: "SkyView is a real-time weather forecast app powered by the OpenWeatherMap API. Users can search any city worldwide and instantly get current conditions alongside a 5-day forecast with hourly breakdowns. The app supports metric and imperial unit toggling and features a clean, minimal dark UI designed for quick at-a-glance readability.",
    image: "/images/project6.png",
    links: { name: "Live Demo", link: "https://sky-view-forecast.vercel.app/" },
    more: "Description",
    gitRepo:{host: "https://github.com/DanielApple05/weather-App/", icon: faGithub },
    description: [
      "Real-time weather conditions for any city worldwide",
      "5-day forecast with hourly breakdown by day",
      "Search by city with metric/imperial unit toggle",
      "Powered by OpenWeatherMap API with a clean dark UI"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: faGithub, isAwesome: true, style: "" },
      { logo: faTailwindCss, isAwesome: true, style: "text-sky-400" },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: Vercel, isAwesome: false, style: '' }
    ]
  },
  {
    id: 4,
    title: "Todo App",
    type: "MERN Stack",
    overview: "A full-stack task management app built on the MERN stack. Users can create, complete, and delete tasks with changes persisted to a MongoDB database via a Node/Express REST API. The app includes JWT-based authentication, protected routes, dark mode with local storage persistence, and a clear-completed feature powered by Promise.all for efficient batch operations.",
    image: "/images/project2.PNG",
    links: { name: "Live Demo", link: "https://todo-list-with-react-js-brown.vercel.app/" },
    more: "Description",
    gitRepo: {host:"https://github.com/DanielApple05/Todo-App/", icon: faGithub },
    description: [
      "Add, complete, and delete tasks",
      "Dark mode with local storage persistence",
      "A functional MERN Stack App"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: MongoDB, isAwesome: false, style: '' },
      { logo: Express, isAwesome: false, style: 'bg-white' },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: Node, isAwesome: false, style: 'text-cyan-400' },
      { logo: faGithub, isAwesome: true, style: '' },
      { logo: Vercel, isAwesome: false, style: '' },
    ]
  },
  {
    id: 5,
    title: "Sneakers Ecommerce",
    type: "MERN Stack",
    overview: "A sneaker-focused ecommerce demo app built with React. It features a product page with an interactive image gallery, add-to-cart functionality managed through React state, and a clean shopping UI. The project was built to demonstrate component-based architecture, state management patterns, and responsive product layout design.",
    image: "/images/project3.PNG",
    links: { name: "Live Demo", link: "https://leinads-sneaks.vercel.app/" },
    more: "Description",
    gitRepo: {host: "https://github.com/DanielApple05/Sneakers-frontEnd/", icon: faGithub },
    description: [
      "Product page with image gallery",
      "Add-to-cart functionality using React state",
      "A Demo App",
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: MongoDB, isAwesome: false, style: '' },
      { logo: Express, isAwesome: false, style: 'bg-white' },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: Node, isAwesome: false, style: 'text-cyan-400' },
      { logo: faGithub, isAwesome: true, style: '' },
      { logo: Vercel, isAwesome: false, style: '' },
    ]
  },
  {
    id: 6,
    title: "Furniro Furniture Ecommerce",
    type: "HTML & CSS",
    overview: "Furniro is a furniture ecommerce landing page built from scratch using HTML, CSS, and JavaScript. It showcases a modern retail UI with product listings, a structured layout, and responsive design across screen sizes. The project demonstrates strong foundational frontend skills and attention to visual detail without relying on any UI framework.",
    image: "/images/project5.PNG",
    links: { name: "Live Demo", link: "https://furniro-furniture-shop.netlify.app/" },
    more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/Furniro-ECommerce-frontend/", icon: faGithub },
    description: [
      "Built with HTML and CSS",
      "Responsive ecommerce layout with modern UI"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: faHtml5, isAwesome: true, style: 'text-orange-500' },
      { logo: faCss3, isAwesome: true, style: "text-blue-500" },
      { logo: faGithub, isAwesome: true, style: "" },
      { logo: faTailwindCss, isAwesome: true, style: "text-sky-400" },
      { logo: faJs, isAwesome: true, style: "text-yellow-400" },
    ]
  }
];

export default projectsData;