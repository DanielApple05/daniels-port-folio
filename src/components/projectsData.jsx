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
    tools: [VSCode, faReact, faFigma, faGithub, Vercel]
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
      "Dark mode with local storage persistence"
    ],
    tools: [faReact, faGithub, Vercel]
  },
  {
    id: 3,
    title: "Sneakers Ecommerce",
    image: "/images/project3.PNG",
    links: [
      { id: 5, name: "View Demo", link: "https://a-sneakers-ecommerce-page.vercel.app" },
      { id: 6, name: "View Code", link: "https://github.com/DanielApple05/A-sneakers-Ecommerce-page" }
    ],
    description: [
      "Product page with image gallery",
      "Add-to-cart functionality using React state",
      "Under development"
    ],
    tools: [faReact, faGithub, Vercel]
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
    tools: [faHtml5, faCss3, faGithub]
  }
];

export default projectsData;