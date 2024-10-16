import MobileApp from "../../assets/mobileApp.mp4";
import Buba from "../../assets/buba.mp4";
import Omar from "../../assets/omar.mp4";
import Kalibro from "../../assets/kalibro.mp4";
import Booking from "../../assets/booking.mp4";
import Portfolio from "../../assets/portfolio.mp4";

export const projects = [
  {
    videoUrl: Kalibro,
    tech: [
      "Python",
      "Flask",
      "React",
      "AWS",
      "CSS",
      "Github Actions",
      "PostgreSQL",
      "JWT",
    ],
    imageUrl: require("../../assets/card_kalibro.png"),
    link: "https://www.kalibro.io",

    shortTitle: "Kalibro - Audit Tool",
    title: "Kalibro - Audit Tool for Calevala Interactive OY",
    content: "Kalibro is a robust website audit and optimization platform...",
    fullText:
      "Kalibro is a robust website audit and optimization platform developed for Calevala Interactive, empowering businesses to enhance their websites through in-depth performance analysis, security checks (e.g., SQL injection), server diagnostics, IP location tracking, and color scheme evaluation. It offers advanced user management with roles, admin features, and account viewing, all within a streamlined business dashboard supporting both free and paid subscription models. Kalibro is actively evolving, with more features planned for future releases.",
  },
  {
    videoUrl: Booking,
    tech: ["Python", "Flask", "React", "PostgreSQL", "JWT", "CSS"],
    imageUrl: require("../../assets/dash.png"),

    shortTitle: "Booking System",
    title: "Barber Booking System – Web App (Hobby projects)",
    content:
      "This full-stack web application,  provides a comprehensive booking...",
    fullText:
      "This full-stack web application, provides a comprehensive booking platform for barbershops. Users can choose from various services, select barbers, and book appointments. The business dashboard enables barbers to manage bookings, set their opening hours, breaks, and mark custom schedules like days off or adjusted working hours. The system is designed to allow certain services to be performed by specific barbers, offering flexible management for both customers and barbers.",
  },
  {
    videoUrl: MobileApp,
    tech: ["React Native", "Node.js", "CSS", "Express", "MongoDB", "JWT"],
    imageUrl: require("../../assets/mobile_app.png"),

    shortTitle: "Mobile App",
    title: "Horizon – Mobile Flight Search Engine (Hobby projects)",
    content:
      "Horizon is a full-stack mobile app built using React Native and Node.js...",
    fullText:
      "Horizon is a full-stack mobile app that enables users to search for one-way and two-way flights, create accounts, update profiles, and book flights. The app dynamically generates flights based on user input through a custom backend, ensuring a tailored search experience without relying on third-party APIs. The app also includes features like user authentication, profile management, and flight booking, making it a comprehensive solution for flight search and booking.",
  },
  {
    videoUrl: Buba,
    tech: ["React JS", "CSS", "Javascript"],
    imageUrl: require("../../assets/card_buba.png"),
    link: "https://bubasalon.com",

    shortTitle: "Static Website",
    title: "Responsive static website - Buba Salon",
    content:
      "Buba Salon: The static website for Buba Salon  provides a seamless user...",
    fullText:
      "The static website for Buba Salon provides a seamless user experience. It features essential information such as contact details, location, and a comprehensive list of services. With a clean, modern design, the site ensures easy navigation, allowing visitors to quickly find the details they need.",
  },
  {
    videoUrl: Omar,
    tech: ["React JS", "CSS", "Javascript"],
    imageUrl: require("../../assets/card_omar.png"),
    link: "https://www.omarparturi.fi/",

    shortTitle: "Static Website",
    title: "Responsive static website - Omar Parturi",
    content: "The static website for Omar Parturi provides a seamless user....",
    fullText:
      "The static website for Omar Parturi provides a seamless user experience. It features essential information such as contact details, location, and a comprehensive list of services. With a clean, modern design, the site ensures easy navigation, allowing visitors to quickly find the details they need.",
  },
  {
    videoUrl: Portfolio,
    tech: ["React JS", "CSS", "Javascript"],
    imageUrl: require("../../assets/pf.png"),
    link: "https://mohammed-portfolio-app.netlify.app",

    shortTitle: "Static Portfolio",
    title: "Responsive Static Website - Portfolio",
    content: "Developed a responsive static website for my portfolio...",
    fullText:
      "This responsive portfolio website, provides a comprehensive overview of my professional journey, including my skills, experience, and a selection of my key projects. Designed with a clean, modern layout, the site allows for easy navigation and offers visitors an engaging experience. It also features essential information, such as my contact details and links to my social profiles, making it easy to connect and learn more about my work.",
  },
];
