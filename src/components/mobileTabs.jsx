
import {
  faHouse,
  faCircleInfo,
  faLaptopCode,
  faBriefcase,
  faPaperPlane,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Navs = [
  {
    id: "about",
    title: "About",
    icon: faCircleInfo,
    isSection: true,
  },
  {
    id: "skills",
    title: "Skills",
    icon: faLaptopCode,
    isSection: true,
  },
  {
    id: "projects",
    title: "Projects",
    icon: faBriefcase,
    isSection: true,
  },
  {
    id: "experience",
    title: "Experience",
    icon: faUserTie,
    isSection: true,
  },
  {
    id: "contact",
    title: "Contact",
    icon: faPaperPlane,
    isSection: false,
    path: "/contact",
  },
];

export default Navs;