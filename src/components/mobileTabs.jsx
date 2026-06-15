
import {
  faHouse,
  faCircleInfo,
  faLaptopCode,
  faBriefcase,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Navs = [
  {
    id: "about",
    title: "About",
    icon: faHouse,
    isSection: true,
    
  },
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
    id: "contact",
    title: "Contact",
    icon: faPaperPlane,
    isSection: false,
    path: "/contact",
  },
];

export default Navs;