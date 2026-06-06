import { faReact, faJs, faHtml5, faCss3, faTailwindCss, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import VSCode from '../images/vscode.svg?react'
import Vercel from '../images/vercel.svg?react'
import Express from '../images/express.svg?react'
import Node from '../images/node.svg?react'
import MongoDB from '../images/mongoDb.svg?react'

const projectsData = [
  {
    id: 1,
    title: "Space Tourism",
    image: "/images/project1.PNG",
    links: [
      { id: 1, name: "View Demo", link: "https://space-tourism-site-gamma.vercel.app/" },
      { id: 2, name: "View Code", link: "https://github.com/DanielApple05/Space-Tourism-site" }
    ],
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
    id: 2,
    title: "Todo App",
    image: "/images/project2.PNG",
    links: [
      { id: 3, name: "View Demo", link: "https://todo-list-with-react-js-brown.vercel.app" },
      { id: 4, name: "View Code", link: "https://github.com/DanielApple05/Todo-list-with-React.js" }
    ],
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
    id: 3,
    title: "Sneakers Ecommerce",
    image: "/images/project3.PNG",
    links: [
      { id: 5, name: "View Demo", link: "https://leinads-sneaks.vercel.app" },
      { id: 6, name: "View Code", link: "https://github.com/DanielApple05/A-sneakers-Ecommerce-page" }
    ],
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
    id: 4,
    title: "Furniro Furniture Ecommerce",
    image: "/images/project5.PNG",
    links: [
      { id: 7, name: "View Demo", link: "https://furniro-furniture-shop.netlify.app" },
      { id: 8, name: "View Code", link: "https://github.com/DanielApple05/Furniro-ECommerce-frontend" }
    ],
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
  },
  {
    id: 5,
    title: "Weather App",
    image: "/images/project6.png",
    links: [
      { id: 9, name: "View Demo", link: "https://sky-view-forecast.vercel.app/" },
      { id: 10, name: "View Code", link: "https://github.com/DanielApple05/weather-App" }
    ],
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
    id: 6,
    title: "Book Verse",
    image: "/images/project7.png",
    links: [
      { id: 11, name: "View Demo", link: "https://leinads-book-verse.vercel.app/" },
      { id: 12, name: "View Code", link: "https://github.com/DanielApple05/Book-verse" }
    ],
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
  }
];

export default projectsData;