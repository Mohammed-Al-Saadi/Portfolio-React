import { PiFileHtmlLight, PiFileCssLight } from "react-icons/pi";
import { DiJavascript1, DiDocker } from "react-icons/di";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiPython, SiRobotframework, SiAngular } from "react-icons/si";
import { GoDatabase } from "react-icons/go";
import { FiTrello } from "react-icons/fi";
import { FaGlobe, FaServer, FaTools } from "react-icons/fa";

export const skillsByCategory = [
  {
    category: "Frontend",
    icon: <FaGlobe size={22} />,
    items: [
      { name: "HTML", icon: <PiFileHtmlLight size={22} /> },
      { name: "CSS", icon: <PiFileCssLight size={22} /> },
      { name: "JavaScript", icon: <DiJavascript1 size={22} /> },
      { name: "React.js", icon: <FaReact size={22} /> },
      { name: "Angular", icon: <SiAngular size={22} /> },
      { name: "React Native", icon: <FaReact size={22} /> },
    ],
  },
  {
    category: "Backend",
    icon: <FaServer size={22} />,
    items: [
      { name: "Python", icon: <SiPython size={22} /> },
      { name: "Node.js", icon: <FaNodeJs size={22} /> },
      { name: "Express.js", icon: <FaNodeJs size={22} /> },
    ],
  },
  {
    category: "Other",
    icon: <FiTrello size={22} />,
    items: [
      { name: "Databases", icon: <GoDatabase size={22} /> },
      { name: "Docker", icon: <DiDocker size={22} /> },
      { name: "AWS", icon: <FaAws size={22} /> },
      { name: "Robot Framework", icon: <SiRobotframework size={22} /> },
      { name: "Git Version Control", icon: <FiTrello size={22} /> },
      { name: "Agile Methodologies", icon: <FiTrello size={22} /> },
    ],
  },
];
