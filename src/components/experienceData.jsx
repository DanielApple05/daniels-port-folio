import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faTailwindCss,
  faFigma,
  faGithub,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";

import VSCode from "../images/vscode.svg?react";
import Vercel from "../images/vercel.svg?react";
import Express from "../images/express.svg?react";
import Node from "../images/node.svg?react";
import MongoDB from "../images/mongoDb.svg?react";
import Shadcn from "../images/shadcn.svg?react";
import Vite from "../images/vite.svg?react";



const experienceData = [
  {
    id: 1,
    company: "Banley",
    role: "Full-Stack Developer",
    duration: "2026",
    image: "/images/Banley-Kudagon.png",
    overview:
      "Contributed to building product features, application pages, and Banley's portfolio calculation engine.",
    description:
      "Worked on React and TypeScript features, responsive application pages, and portfolio calculation logic involving strategies, capital, fees, profits, and rollovers.",
    website: "https://banley.kudagon.com.ng",

    responsibilities: [
      "Built and implemented responsive application pages.",
      "Implemented and refined different product features.",
      "Contributed to the development of the portfolio calculation engine.",
      "Worked on portfolio calculations involving capital, targets, fees, profits, and rollover strategies.",
      "Collaborated with other developers using Git branches, pull requests, and code reviews.",
    ],

    tools: [
      { logo: VSCode, isAwesome: false, style: "" },
      { logo: faReact, isAwesome: true, style: "text-sky-500" },
      { logo: faTypescript, isAwesome: true, style: "" },
      { logo: Vite, isAwesome: false, style: "" },
      { logo: faTailwindCss, isAwesome: true, style: "text-sky-400" },
      { logo: Shadcn, isAwesome: false, style: "" },
      { logo: faGithub, isAwesome: true, style: "" },
    ],
  },
];

export default experienceData;