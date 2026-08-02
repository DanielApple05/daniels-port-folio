import { faReact, faJs, faHtml5, faCss3, faTailwindCss, faFigma, faGithub, faTypescript } from '@fortawesome/free-brands-svg-icons';
import VSCode from '../images/vscode.svg?react'
import Vercel from '../images/vercel.svg?react'
import Express from '../images/express.svg?react'
import Node from '../images/node.svg?react'
import MongoDB from '../images/mongoDb.svg?react'
import Shadcn from "../images/shadcn.svg?react";
import Vite from '../images/vite.svg?react';

const projectsData = [
  {
    id: 1,
    title: "BusGo",
    type: "MERN Stack",
    overview: "BusGo is a full-stack bus transportation booking application inspired by Peace Mass Transit (PMT), built as a technical assessment for a Frontend Developer Industrial Training role. It delivers a complete booking journey — route search with autocomplete, real-time seat availability, seat selection with double-booking prevention, and Paystack payment integration — backed by a custom Express/MongoDB API with server-side payment verification.",
    image: "/images/BusGo_preview.png",
    mobileView: [
      { id: 1, mobileImg: "/images/busGoMobileView1.png" },
      { id: 2, mobileImg: "/images/busGoMobileView2.png" },
      { id: 3, mobileImg: "/images/busGoMobileView3.png" },
      { id: 4, mobileImg: "/images/busGoMobileView4.png" },
      { id: 5, mobileImg: "/images/busGoMobileView5.png" },
      { id: 6, mobileImg: "/images/busGoMobileView6.png" },
    ],
    links: { name: "Live Demo", link: "https://Bus-Go-Two.vercel.app" },
    more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/Bus-Go", icon: faGithub },
    description: [
      "Full trip-booking flow — route search with live city autocomplete, bus selection, seat picking, and passenger details",
      "Backend-enforced seat holds with automatic 10-minute expiry to prevent double bookings",
      "Paystack payment integration with server-side transaction verification and amount matching before confirming any booking",
      "Hybrid guest/auth model, booking requires no account, while optional login surfaces booking history matched by email",
      "'My Bookings' history and a dedicated Hire-a-Bus inquiry flow with its own backend endpoint",
      "Fully responsive UI with a custom slide-out mobile navigation drawer",
      "Deployed on Vercel (frontend) and Render (backend) with MongoDB Atlas"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: MongoDB, isAwesome: false, style: '' },
      { logo: Express, isAwesome: false, style: 'bg-white' },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: Node, isAwesome: false, style: '' },
      { logo: faGithub, isAwesome: true, style: '' },
      { logo: Vercel, isAwesome: false, style: '' },
      { logo: Vite, isAwesome: false, style: "" },
      { logo: faTailwindCss, isAwesome: true, style: 'text-sky-400' },
    ]
  },
  {
    id: 2,
    title: "Restaurant Tip Manager",
    type: "React & TypeScript",
    overview:
      "A modern restaurant tip management dashboard built as part of the Banley Frontend Assessment. The application enables users to manage restaurants, calculate and track tips, edit existing records, filter calculations, and monitor spending statistics through a responsive and intuitive interface.",

    image: "/images/BanleyRestaurant_preview.png",

    mobileView: [
      { id: 1, mobileImg: "/images/banleyMobileView1.png" },
      { id: 2, mobileImg: "/images/banleyMobileView2.png" },
      { id: 3, mobileImg: "/images/banleyMobileView3.png" },
      { id: 4, mobileImg: "/images/banleyMobileView4.png" },
      { id: 5, mobileImg: "/images/banleyMobileView5.png" },
      { id: 5, mobileImg: "/images/banleyMobileView6.png" },
    ],

    links: {
      name: "Live Demo",
      link: "https://daniels-banley-assessment.vercel.app",
    },
    more: "Description",
    gitRepo: {
      host: "https://github.com/DanielApple05/banley-assessment",
      icon: faGithub,
    },
    description: [
      "Built with React, TypeScript, and Vite using reusable components and service-based architecture.",
      "Manage restaurants with full CRUD functionality.",
      "Calculate restaurant tips automatically based on bill amount and configured tip percentage.",
      "View, edit, and delete saved tip calculations.",
      "Filter tip history by restaurant for easier tracking.",
      "Dashboard displays total tips, average tip amount, and total visits.",
      "Added pagination for improved scalability and navigation.",
      "Implemented client-side validation with instant toast notifications for better user experience.",
      "Included loading skeletons, empty states, and an Error Boundary for graceful error handling.",
      "Responsive design built with Tailwind CSS and shadcn/ui components."
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: "" },
      { logo: faReact, isAwesome: true, style: "text-sky-500" },
      { logo: faTypescript, isAwesome: true, style: "" },
      { logo: Vite, isAwesome: false, style: "" },
      { logo: faTailwindCss, isAwesome: true, style: "text-sky-400" },
      { logo: Shadcn, isAwesome: false, style: "" },
      { logo: faGithub, isAwesome: true, style: "" },
    ]
  },
  {
    id: 3,
    title: "SecureBank",
    type: "MERN Stack",
    overview: "SecureBank is a full-stack demo banking application built on the MERN stack. It delivers a real banking experience with user authentication, live money transfers between accounts, real-time balance updates, transaction history, and an admin dashboard for platform management. The app features a mobile-first UI designed from custom Figma mockups, JWT-protected routes, bcrypt PIN and password hashing, and a complete transfer flow from initiation through PIN confirmation to receipt generation.",
    image: "/images/SecureBank_preview.png",
    mobileView: [
      { id: 1, mobileImg: "/images/secureBankMobileView1.jpeg" },
      { id: 2, mobileImg: "/images/secureBankMobileView2.jpeg" },
      { id: 4, mobileImg: "/images/secureBankMobileView4.jpeg" },
      { id: 5, mobileImg: "/images/secureBankMobileView5.jpeg" },
      { id: 6, mobileImg: "/images/secureBankMobileView6.jpeg" },
    ],
    links: { name: "Live Demo", link: "https://ease-swift-banking.vercel.app/" },
    more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/Banking", icon: faGithub },
    description: [
      "Full-stack MERN banking app with JWT authentication, bcrypt password and PIN hashing, and protected routes",
      "Real money transfers between registered accounts with live balance updates, debit and credit transaction records, and PIN validation on every transfer",
      "Complete transfer flow — Transfer → Review → PIN Confirmation → Success/Failed → Downloadable PDF Receipt",
      "Transaction history with date grouping, category filters, and real-time search across title, recipient, and narration",
      "In-app notifications driven by real transaction data — credit alerts, transfer confirmations, and failed transfer notices",
      "Admin dashboard with platform-wide user management, transaction monitoring, and manual account crediting",
      "Security & Privacy settings — set, reset, and change transaction PIN and account password with bcrypt validation",
      "Recent beneficiaries saved locally after each successful transfer for quick repeat payments",
      "Account name lookup by account number with debounced API calls for a real banking UX",
      "Deployed on Vercel (frontend) and Render (backend) with MongoDB Atlas, multi-origin CORS, and SPA rewrite rules"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: MongoDB, isAwesome: false, style: '' },
      { logo: Express, isAwesome: false, style: 'bg-white' },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: Node, isAwesome: false, style: '' },
      { logo: faGithub, isAwesome: true, style: '' },
      { logo: Vite, isAwesome: false, style: "" },
      { logo: Vercel, isAwesome: false, style: '' },
      { logo: faTailwindCss, isAwesome: true, style: 'text-sky-400' },
    ]
  },
  {
    id: 4,
    title: "Book Verse",
    type: "MERN Stack",
    overview: "BookVerse is a full-stack digital library application that lets users discover, track, and read books online. It combines the Google Books API with a custom MERN backend to deliver a personalized reading experience — complete with authentication, a reading progress tracker, favorites, and an embedded book viewer with theme and font customization.",
    image: "/images/BookVerse_preview.png",
    mobileView: [
      { id: 1, mobileImg: "/images/bookAppMobileView1.jpg" },
      { id: 2, mobileImg: "/images/bookAppMobileView2.jpeg" },
      { id: 3, mobileImg: "/images/bookAppMobileView3.png" },
      { id: 4, mobileImg: "/images/bookAppMobileView4.jpeg" },
      { id: 5, mobileImg: "/images/bookAppMobileView5.png" },
      { id: 6, mobileImg: "/images/bookAppMobileView6.png" },
    ],
    links: { name: "Live Demo", link: "https://leinads-book-verse.vercel.app/" },
    more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/Book-verse", icon: faGithub },
    description: [
      "Full-stack MERN app with JWT-based user authentication and account management",
      "Browse books by category, search by title or author, and view detailed book info",
      "Personal library with reading progress tracking, favorites, and reading status",
      "Embedded Google Books viewer with font size and theme customization",
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
      { logo: Vite, isAwesome: false, style: "" },
    ]
  },
  {
    id: 5,
    title: "Weather App",
    type: "Frontend / API Integration",
    overview: "SkyView is a real-time weather forecast app powered by the OpenWeatherMap API. Users can search any city worldwide and instantly get current conditions alongside a 5-day forecast with hourly breakdowns. The app supports metric and imperial unit toggling and features a clean, minimal dark UI designed for quick at-a-glance readability.",
    image: "/images/SkyView_preview.png",
    mobileView: [
      { id: 1, mobileImg: "/images/weatherAppMobileView1.jpeg" },
      { id: 2, mobileImg: "/images/weatherAppMobileView2.jpeg" },
      { id: 3, mobileImg: "/images/weatherAppMobileView3.jpeg" },
      { id: 4, mobileImg: "/images/weatherAppMobileView4.jpeg" },
      { id: 5, mobileImg: "/images/weatherAppMobileView5.jpeg" },
      { id: 6, mobileImg: "/images/weatherAppMobileView6.jpeg" },
      { id: 7, mobileImg: "/images/weatherAppMobileView7.jpeg" },
    ],
    links: { name: "Live Demo", link: "https://sky-view-forecast.vercel.app/" },
    more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/weather-App/", icon: faGithub },
    description: [
      "Real-time weather conditions for any city worldwide via OpenWeatherMap API",
      "5-day forecast with hourly breakdown per day",
      "City search with metric and imperial unit toggle",
      "Clean dark UI optimized for quick readability",
      "Fully responsive layout built with React and Tailwind CSS"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: faGithub, isAwesome: true, style: "" },
      { logo: faTailwindCss, isAwesome: true, style: "text-sky-400" },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: Vercel, isAwesome: false, style: '' },
      { logo: Vite, isAwesome: false, style: "" },
    ]
  },
  {
    id: 6,
    title: "Space Tourism",
    type: "Frontend",
    overview: "Space Tourism is a multi-page frontend application inspired by a Frontend Mentor challenge. It presents an immersive UI for exploring space destinations, crew members, and technology — with smooth page transitions, dynamic routing, and a fully responsive layout built to pixel-perfect design specs.",
    image: "/images/SpaceTourism_preview.PNG",
    mobileView: [
      { id: 1, mobileImg: "/images/spaceTourismMobileView1.jpeg" },
      { id: 2, mobileImg: "/images/spaceTourismMobileView2.jpeg" },
      { id: 3, mobileImg: "/images/spaceTourismMobileView3.jpeg" },
      { id: 4, mobileImg: "/images/spaceTourismMobileView4.jpeg" },
    ],
    links: { name: "Live Demo", link: "https://space-tourism-site-gamma.vercel.app/" },
    more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/Space-Tourism-site", icon: faGithub },
    description: [
      "Multi-page React app with dynamic routing using React Router DOM",
      "Fully responsive UI built with React and Tailwind CSS",
      "Tab-based navigation for destinations, crew, and technology sections",
      "Built from a Figma design file to pixel-perfect accuracy",
      "Smooth page transitions and interactive UI components"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: faFigma, isAwesome: true, style: 'text-pink-500' },
      { logo: faGithub, isAwesome: true, style: 'text-white' },
      { logo: Vercel, isAwesome: false, style: '' },
      { logo: Vite, isAwesome: false, style: "" },
    ]
  },
  {
    id: 7,
    title: "Todo App",
    type: "MERN Stack",
    overview: "A full-stack task management app built on the MERN stack. Users can create, complete, and delete tasks with changes persisted to a MongoDB database via a Node/Express REST API. The app includes JWT-based authentication, protected routes, dark mode with local storage persistence, and a clear-completed feature powered by Promise.all for efficient batch operations.",
    image: "/images/Todo_preview.PNG",
    mobileView: [
      { id: 1, mobileImg: "/images/todoAppMobileView1.jpeg" },
      { id: 2, mobileImg: "/images/todoAppMobileView2.jpeg" },
      { id: 3, mobileImg: "/images/todoAppMobileView3.jpeg" },
      { id: 4, mobileImg: "/images/todoAppMobileView4.jpeg" },
      { id: 5, mobileImg: "/images/todoAppMobileView5.jpeg" },
    ],
    links: { name: "Live Demo", link: "https://todo-list-with-react-js-brown.vercel.app/" },
    more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/Todo-App/", icon: faGithub },
    description: [
      "Full-stack MERN app with JWT authentication and protected routes",
      "Create, complete, and delete tasks persisted to MongoDB",
      "Clear-completed tasks feature using Promise.all for parallel operations",
      "Dark mode with local storage persistence across sessions",
      "Deployed on Vercel (frontend) and Render (backend)"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: MongoDB, isAwesome: false, style: '' },
      { logo: Express, isAwesome: false, style: 'bg-white' },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: Node, isAwesome: false, style: 'text-cyan-400' },
      { logo: faGithub, isAwesome: true, style: '' },
      { logo: Vercel, isAwesome: false, style: '' },
      { logo: Vite, isAwesome: false, style: "" },
    ]
  },
  {
    id: 8,
    title: "Sneakers Ecommerce",
    type: "MERN Stack",
    overview: "A sneaker-focused ecommerce demo app built with React. It features a product page with an interactive image gallery, add-to-cart functionality managed through React state, and a clean shopping UI. The project was built to demonstrate component-based architecture, state management patterns, and responsive product layout design.",
    image: "/images/Sneakers_preview.PNG",
    mobileView: [
      { id: 1, mobileImg: "/images/sneakersMobileView1.jpeg" },
      { id: 2, mobileImg: "/images/sneakersMobileView2.jpeg" },
      { id: 3, mobileImg: "/images/sneakersMobileView3.jpeg" },
      { id: 4, mobileImg: "/images/sneakersMobileView4.jpeg" },
      { id: 5, mobileImg: "/images/sneakersMobileView5.jpeg" },
      { id: 6, mobileImg: "/images/sneakersMobileView6.jpeg" },
    ],
    links: { name: "Live Demo", link: "https://leinads-sneaks.vercel.app/" },
    more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/Sneakers-frontEnd/", icon: faGithub },
    description: [
      "Product page with interactive image gallery and thumbnail switching",
      "Add-to-cart functionality managed with React state",
      "Component-based architecture with reusable UI elements",
      "Responsive layout designed for both mobile and desktop",
      "Clean shopping UI with a focus on product presentation"
    ],
    tools: [
      { logo: VSCode, isAwesome: false, style: '' },
      { logo: MongoDB, isAwesome: false, style: '' },
      { logo: Express, isAwesome: false, style: 'bg-white' },
      { logo: faReact, isAwesome: true, style: 'text-cyan-400' },
      { logo: Node, isAwesome: false, style: 'text-cyan-400' },
      { logo: faGithub, isAwesome: true, style: '' },
      { logo: Vite, isAwesome: false, style: "" },
      { logo: Vercel, isAwesome: false, style: '' },
    ]
  },
  {
    id: 9,
    title: "Furniro Furniture Ecommerce",
    type: "HTML & CSS",
    overview: "Furniro is a furniture ecommerce landing page built from scratch using HTML, CSS, and JavaScript. It showcases a modern retail UI with product listings, a structured layout, and responsive design across screen sizes. The project demonstrates strong foundational frontend skills and attention to visual detail without relying on any UI framework.",
    image: "/images/Furniro_preview.PNG",
    mobileView: [
      { id: 1, mobileImg: "/images/furniroMobileView1.jpeg" },
      { id: 2, mobileImg: "/images/furniroMobileView2.jpeg" },
      { id: 3, mobileImg: "/images/furniroMobileView3.jpeg" },
      { id: 4, mobileImg: "/images/furniroMobileView4.jpeg" },
      { id: 5, mobileImg: "/images/furniroMobileView5.jpeg" },
    ],
    links: { name: "Live Demo", link: "https://furniro-furniture-shop.netlify.app/" },
    more: "Description",
    gitRepo: { host: "https://github.com/DanielApple05/Furniro-ECommerce-frontend/", icon: faGithub },
    description: [
      "Responsive ecommerce layout built from scratch with HTML and CSS",
      "Modern retail UI with product listings and structured page sections",
      "JavaScript used for interactive elements and dynamic behavior",
      "No UI framework — demonstrates strong core frontend fundamentals",
      "Consistent visual design with attention to spacing, typography, and layout"
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

];

export default projectsData;