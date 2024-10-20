import MobileApp from "../../assets/video/mobileApp.mp4";
import Buba from "../../assets/video/buba.mp4";
import Omar from "../../assets/video/omar.mp4";
import Kalibro from "../../assets/video/kalibro.mp4";
import Booking from "../../assets/video/booking.mp4";
import Portfolio from "../../assets/video/portfolio.mp4";
import VkTesting from "../../assets/video/vk_testing.mp4";

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
      "Redux",
      "Stripe",
      "WebSockets",
      "Google Analytics",
    ],
    imageUrl: require("../../assets/images/card_kalibro.png"),
    links: [
      {
        label: "View Project",
        url: "https://www.kalibro.io",
      },
    ],
    shortTitle: "Kalibro - Audit Tool",
    title: "Kalibro - Audit Tool for Calevala Interactive OY",
    content: "Kalibro is a robust website audit and optimization platform...",
    fullText:
      "Kalibro is a robust website audit and optimization platform developed for Calevala Interactive, empowering businesses to enhance their websites through in-depth performance analysis, security checks (e.g., SQL injection), server diagnostics, IP location tracking, and color scheme evaluation. It offers advanced user management with roles, admin features, and account viewing, all within a streamlined business dashboard supporting both free and paid subscription models. Kalibro is actively evolving, with more features planned for future releases.",
  },
  {
    tech: ["K6"],
    imageUrl: require("../../assets/images/thesis.png"),
    links: [
      {
        label: "Thesis",
        url: "https://www.theseus.fi/handle/10024/862076",
      },
    ],
    shortTitle: "Performance Testing with K6",
    title: "Enhancing API reliability in Kalibro.io (Calevala Ltd)",
    content: "This thesis focuses on executing performance testing for...",
    fullText:
      "This thesis focuses on executing performance testing for the Kalibro.io tool, developed by Calevala Interactive Ltd., using the K6 performance testing tool. The study covers various tests, including load, stress, spike, and soak, to ensure system stability under different user loads. The testing results highlighted solid performance, with recommendations for further optimization in HTTP duration times. The thesis serves as a practical guide for implementing K6-based performance testing.",
  },
  {
    videoUrl: Booking,
    tech: ["Python", "Flask", "React", "PostgreSQL", "JWT", "CSS", "Redux"],
    imageUrl: require("../../assets/images/card_booking.png"),
    links: [
      {
        label: "Frontend Code",
        url: "https://github.com/Mohammed-Al-Saadi/Barber_Booking_client",
      },
      {
        label: "Backend Code",
        url: "https://github.com/Mohammed-Al-Saadi/Barber_Booking_server",
      },
    ],
    shortTitle: "Booking System",
    title: "Barber Booking System – Web App (Hobby project)",
    content:
      "This full-stack web application,  provides a comprehensive booking...",
    fullText:
      "This full-stack web application, provides a comprehensive booking platform for barbershops. Users can choose from various services, select barbers, and book appointments. The business dashboard enables barbers to manage bookings, set their opening hours, breaks, and mark custom schedules like days off or adjusted working hours. The system is designed to allow certain services to be performed by specific barbers, offering flexible management for both customers and barbers.",
  },
  {
    videoUrl: MobileApp,
    tech: [
      "React Native",
      "Node.js",
      "CSS",
      "Express",
      "MongoDB",
      "JWT",
      "Redux",
    ],
    imageUrl: require("../../assets/images/mobile_app.png"),

    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/Mohammed-Al-Saadi/react-native-moblie-app",
      },
    ],
    shortTitle: "Mobile App",
    title: "Horizon – Mobile Flight Search Engine (Hobby project)",
    content:
      "Horizon is a full-stack mobile app built using React Native and Node.js...",
    fullText:
      "Horizon is a full-stack mobile app that enables users to search for one-way and two-way flights, create accounts, update profiles, and book flights. The app dynamically generates flights based on user input through a custom backend, ensuring a tailored search experience without relying on third-party APIs. The app also includes features like user authentication, profile management, and flight booking, making it a comprehensive solution for flight search and booking.",
  },
  {
    videoUrl: Buba,
    tech: ["React JS", "CSS", "Javascript"],
    imageUrl: require("../../assets/images/card_buba.png"),
    links: [
      {
        label: "View Project",
        url: "https://bubasalon.com",
      },
    ],
    shortTitle: "Static Website",
    title: "Responsive static website - Buba Salon",
    content:
      "Buba Salon: The static website for Buba Salon  provides a seamless user...",
    fullText:
      "The static website for Buba Salon provides a seamless user experience. It features essential information such as contact details, location, and a comprehensive list of services. With a clean, modern design, the site ensures easy navigation, allowing visitors to quickly find the details they need.",
  },
  {
    videoUrl: Omar,
    tech: ["React JS", "CSS", "Javascript", "EmailJS"],
    imageUrl: require("../../assets/images/card_omar.png"),
    links: [
      {
        label: "View Project",
        url: "https://www.omarparturi.fi/",
      },
    ],
    shortTitle: "Static Website",
    title: "Responsive static website - Omar Parturi",
    content: "The static website for Omar Parturi provides a seamless user....",
    fullText:
      "The static website for Omar Parturi provides a seamless user experience. It features essential information such as contact details, location, and a comprehensive list of services. With a clean, modern design, the site ensures easy navigation, allowing visitors to quickly find the details they need.",
  },
  {
    videoUrl: Portfolio,
    tech: ["React JS", "CSS", "Javascript", "EmailJS", "Google Analytics"],
    imageUrl: require("../../assets/images/card_portfolio.png"),
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/Mohammed-Al-Saadi/Portfolio-React",
      },
    ],
    shortTitle: "Static Portfolio",
    title: "Responsive Static Website - Portfolio",
    content: "Developed a responsive static website for my portfolio...",
    fullText:
      "This responsive portfolio website, provides a comprehensive overview of my professional journey, including my skills, experience, and a selection of my key projects. Designed with a clean, modern layout, the site allows for easy navigation and offers visitors an engaging experience. It also features essential information, such as my contact details and links to my social profiles, making it easy to connect and learn more about my work.",
  },
  {
    videoUrl: VkTesting,
    tech: ["Robot Framework", "Selenium"],
    imageUrl: require("../../assets/images/testing.png"),
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/Mohammed-Al-Saadi/ROBOT-FRAMEWORK/blob/main/UI%20test%20project%20RF/software_testing_project-final.robot",
      },
      {
        label: "Other RF Projects",
        url: "https://github.com/Mohammed-Al-Saadi/ROBOT-FRAMEWORK",
      },
    ],
    shortTitle: "Automated Testing",
    title: "Testing Verkkokauppa.com (Hobby project)",
    content: "This project is an automation testing suite for Verkkokauppa.com",
    fullText:
      "This project is an automation testing suite for Verkkokauppa.com, built using Robot Framework with SeleniumLibrary. It automates key user interactions such as account creation, login, product search, filtering, and adding items to the cart or favorites. The tests also validate product page elements, category icons, and sorting features. The suite ensures smooth functionality across the website by simulating real user workflows. It utilizes Selenium WebDriver for browser automation and Chrome for executing tests.",
  },
  {
    tech: ["Node.js", "PostgreSQL", "JWT", "Nodemailer", "Bcrypt"],
    imageUrl: require("../../assets/images/node.png"),
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/Mohammed-Al-Saadi/Clinic/tree/main/server",
      },
    ],
    shortTitle: "User Management System",
    title: "User Management System (Hobby project)",
    content:
      "This project implements a user management system with role-based access...",
    fullText:
      "This User Management System project is built with Node.js and PostgreSQL, featuring user registration, login, and profile management. It includes role-based access control (RBAC) for admin features such as updating user roles and deactivating accounts. Authentication is handled using JSON Web Tokens (JWT), and email notifications are sent via Nodemailer for password resets. The system ensures security with bcrypt password hashing and supports both access and refresh tokens for session management.",
  },
];
