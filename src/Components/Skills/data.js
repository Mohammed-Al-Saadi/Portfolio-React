// Import the necessary icons from react-icons
import { PiFileHtmlLight } from "react-icons/pi";
import { PiFileCssLight } from "react-icons/pi";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiPython } from "react-icons/si"; // Replaced AiOutlinePython with SiPython
import { GoDatabase } from "react-icons/go";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiDocker } from "react-icons/di";
import { SiRobotframework } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiTrello } from "react-icons/fi";

export const skills = [
  { name: "HTML", icon: <PiFileHtmlLight size={22} /> },
  { name: "CSS", icon: <PiFileCssLight size={22} /> },
  { name: "JavaScript", icon: <DiJavascript1 size={22} /> },
  { name: "React.js", icon: <FaReact size={22} /> },
  { name: "React Native", icon: <FaReact size={22} /> },
  { name: "Python", icon: <SiPython size={22} /> }, // Updated icon for Python
  { name: "Databases", icon: <GoDatabase size={22} /> },
  { name: "Java", icon: <FaJava size={22} /> },
  { name: "Node.js", icon: <FaNodeJs size={22} /> },
  { name: "Flask", icon: <SiPython size={22} /> }, // Using Python icon for Flask
  { name: "Express.js", icon: <FaNodeJs size={22} /> }, // Using Node.js icon for Express.js
  { name: "Docker", icon: <DiDocker size={22} /> },
  { name: "Robot Framework", icon: <SiRobotframework size={22} /> },
  { name: "Git Version Control", icon: <FiTrello size={22} /> }, // Using Trello icon as a placeholder
  { name: "Agile Methodologies", icon: <FiTrello size={22} /> }, // Using Trello icon as a placeholder
  { name: "AWS", icon: <FaAws size={22} /> },
];
