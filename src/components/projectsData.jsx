import { faReact, faJs, faHtml5, faCss3, faTailwindCss, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import VSCode  from '../images/vscode.svg?react'
import Vercel  from '../images/vercel.svg?react'
import Express from '../images/express.svg?react'
import Node    from '../images/node.svg?react'
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
      { logo: VSCode,   isAwesome: false, style: ''  },
      { logo: faReact,  isAwesome: true, style: 'text-cyan-400'   },
      { logo: faFigma,  isAwesome: true, style: 'text-pink-500'   },
      { logo: faGithub, isAwesome: true, style: 'text-white'   },
      { logo: Vercel,   isAwesome: false, style: ''  },
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
       { logo: VSCode,   isAwesome: false, style: ''  },
      { logo: MongoDB,  isAwesome: false, style: '' },
       { logo: Express,  isAwesome: false, style: 'bg-white'},
      
       { logo: faReact,  isAwesome: true, style: 'text-cyan-400' },
       { logo: Node,  isAwesome: false, style: 'text-cyan-400' },
      { logo: faGithub, isAwesome: true, style: ''   },
      { logo: Vercel, isAwesome: false, style: ''  },
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
       "A functional MERN Stack App",
      "Under development"
    ],
     tools: [
       { logo: VSCode,   isAwesome: false, style: ''  },
      { logo: MongoDB,  isAwesome: false, style: '' },
       { logo: Express,  isAwesome: false, style: 'bg-white'},
       { logo: faReact,  isAwesome: true, style: 'text-cyan-400' },
       { logo: Node,  isAwesome: false, style: 'text-cyan-400' },
      { logo: faGithub, isAwesome: true, style: ''   },
      { logo: Vercel, isAwesome: false, style: ''  },
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
       { logo: VSCode,   isAwesome: false, style: ''  },
      { logo: faHtml5,  isAwesome: true, style: 'text-orange-500'  },
      { logo: faCss3,   isAwesome: true, style: "text-blue-500"  },
      { logo: faGithub, isAwesome: true, style: ""  },
        { logo: faTailwindCss, isAwesome: true, style: "text-sky-400"  },
        { logo: faJs, isAwesome: true, style: "text-yellow-400"  },
    ]
  },
   {
    id: 5,
    title: "Weather App",
    image: "/images/project6.PNG",
    links: [
      { id: 7, name: "View Demo", link: "https://sky-view-forecast.vercel.app/" },
      { id: 8, name: "View Code", link: "https://github.com/DanielApple05/weather-App" }
    ],
    description: [
      "A responsive weather forecasting web app that gives you real-time weather conditions and forecasts for any city in the world. Built with React and powered by the OpenWeatherMap API, it features current weather conditions including temperature, humidity, wind speed, and precipitation, a 5-day daily forecast, and an hourly breakdown by day. Users can search any city, switch between metric and imperial units, with a dynamic hourly panel with day selector. Designed with a clean dark UI built on Tailwind CSS."
      
    ],
    tools: [
       { logo: VSCode,   isAwesome: false, style: ''  },
      { logo: faGithub, isAwesome: true, style: ""  },
        { logo: faTailwindCss, isAwesome: true, style: "text-sky-400"  },
          { logo: faReact,  isAwesome: true, style: 'text-cyan-400' },
           { logo: Vercel, isAwesome: false, style: ''  }
    ]
  }
];

export default projectsData;