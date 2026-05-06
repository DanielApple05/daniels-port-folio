import { faReact, faJs, faHtml5, faCss3, faTailwindCss, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import VSCode from '/images/vscode.svg'
import Vercel from '/images/vercel.svg'
import Express from '/images/express.svg'
import Node from '/images/node.svg'
import MongoDb from '/images/mongoDb.svg'


const skillsData = {
  tools: [
    {
      id: 1,
      name: "React",
      logo: faReact,
      style: "text-cyan-400",
      isAwesome: true
    },
    {
      id: 2,
      name: "JavaScript",
      logo: faJs,
      style: "text-yellow-400",
       isAwesome: true
    },
    {
      id: 3,
      name: "HTML",
      logo: faHtml5,
      style: "text-orange-500",
       isAwesome: true
    },
    {
      id: 4,
      name: "CSS",
      logo: faCss3,
      style: "text-blue-500",
       isAwesome: true
    },
    {
      id: 5,
      name: "Tailwind",
      logo: faTailwindCss,
      style: "text-sky-400",
       isAwesome: true
    },
  ],
  others: [
    {
      id: 6,
      name: "Figma",
      logo: faFigma,
      style: "text-pink-500",
       isAwesome: true
    },
    {
      id: 7,
      name: "GitHub",
      logo: faGithub,
      style: "text-white",
       isAwesome: true
    },
    {
      id: 8,
      name: "Netlify",
      // logo: Netlify,
      //  isAwesome: false
    },
    {
      id: 9,
      name: "Vercel",
      logo: Vercel,
      style: "text-white",
       isAwesome: false
    },
    {
      id: 10,
      name: "VsCode",
      logo: VSCode,
       isAwesome: false
    }, {
      id: 11,
      name: "Express",
      logo: Express,
       isAwesome: false
    }, {
      id: 12,
      name: "Node",
      logo: Node,
       isAwesome: false
    }, {
      id: 13,
      name: "MongoDb",
      logo: MongoDb,
       isAwesome: false
    }
  ]
};

export default skillsData;
