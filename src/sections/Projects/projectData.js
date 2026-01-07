import MobileApp from "../../assets/video/mobileApp.mp4";
import Buba from "../../assets/video/buba.mp4";
import Omar from "../../assets/video/omar.mp4";
import Kalibro from "../../assets/video/kalibro.mp4";
import Booking from "../../assets/video/booking.mp4";
import Portfolio from "../../assets/video/portfolio.mp4";
import VkTesting from "../../assets/video/vk_testing.mp4";
import SrpAuth from "../../assets/video/srpAuth.mp4";

export const projects = [
  {
    tech: [
      "Python",
      "Flask",
      "PostgreSQL",
      "Angular",
      "CSS",
      "Netlify",
      "Render",
      "Secure Remote Password",
    ],
    imageUrl: require("../../assets/images/tavolopro.png"),
    links: [
      {
        label: "Live demo",
        url: "https://www.tavolopro.live",
      },
      {
        label: "Backend Code",
        url: "https://github.com/Mohammed-Al-Saadi/tavolo-server",
      },
    ],
    shortTitle: "TavoloPro - Ongoing",
    title: "TavoloPro - Agile Project & Team Tracking Platform",
    content:
      "TavoloPro is a web-based Agile tool that helps teams manage projects...",
    fullText:
      "TavoloPro (v1.0, 2025) — A full-stack Agile project tracking platform built with an Angular frontend and a Flask (Python) backend using PostgreSQL. TavoloPro enables teams to create and manage projects, organize work items, and track progress through clear status-based workflows. The platform supports team-oriented project visibility and structured task management to help teams plan, execute, and monitor work efficiently. TavoloPro is a hobby project and is hosted on free tiers (Netlify for the frontend and Render for the backend/database), so the first login/register request may take up to ~50 seconds if the service is sleeping due to inactivity. The project is still under active development, with features and improvements being added continuously.",
  },
  {
    videoUrl: SrpAuth,

    tech: ["Python", "Flask", "PostgreSQL", "Angular", "CSS"],
    imageUrl: require("../../assets/images/srp.png"),
    links: [
      {
        label: "Repositories",
        url: "https://github.com/Mohammed-Al-Saadi/SRP-Auth",
      },
    ],
    shortTitle: "SRP Authentication",
    title: "SRP-6a Authentication Platform – Secure Remote Password Protocol",
    content:
      "A secure full-stack authentication system built with Angular and Flask...",
    fullText:
      "The SRP-6a Authentication Platform is a full-stack project that implements the Secure Remote Password (SRP-6a) protocol as defined in RFC 5054, using Angular for the frontend and Flask for the backend. It provides a secure, privacy-focused authentication system that allows users to register and log in without ever sending or storing their actual passwords. The protocol uses cryptographic verifiers, salts, and mathematical proofs to ensure both the client and server can independently confirm the user’s identity without exposing sensitive information. The backend, built with Flask and PostgreSQL, manages SRP endpoints such as `/srp-register`, `/srp-login/start`, and `/srp-login/verify`, handling salt storage, verifier management, and proof validation. The Angular frontend performs all SRP computations locally in the browser, generating keys, proofs, and verifications in real time. Once both sides complete mutual verification, a shared session key is established, ensuring a secure communication channel. While this implementation is based on the core principles and documentation of the Nimbus SRP and Thinbus SRP libraries, it has been adapted and simplified for educational clarity and modern framework integration, making it not binary compatible with those libraries.",
  },

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
    links: [],
    shortTitle: "Kalibro -  Calevala OY",
    title: "Kalibro - Audit Tool for Calevala Interactive OY",
    content: "Kalibro is a robust website audit and optimization platform...",
    fullText:
      "Kalibro (v1.0, 2025) — A full-stack website audit and optimization platform developed for Calevala Interactive to improve websites’ online presence. It combines technical diagnostics with a role-based business dashboard, performing multi-dimensional audits across WHOIS, IP geolocation, DNS, SSL, technology stack, and Lighthouse metrics (Performance, Accessibility, Best Practices, SEO), along with UI/UX analysis from screenshots (colors, styles, mood). The platform includes subscription tiers (Free, Small, Medium, Large), customer roles (Admin & View-only), and internal team roles. Features include real-time logs via WebSockets, in-app notifications and activity emails, 2FA, Stripe billing (plans, invoices, card updates), team/associated accounts, audit reports with a unified Kalibro Score, and a management area for users, campaigns, messages, and analytics. The current version (v1.0) is under testing.",
  },
  {
    tech: ["Angular"],
    imageUrl: require("../../assets/images/angular.png"),
    links: [
      {
        label: "Live demo",
        url: "https://gleaming-liger-62ffa9.netlify.app",
      },
      {
        label: "Frontend Code",
        url: "https://github.com/Mohammed-Al-Saadi/starting-project-angular/tree/main/src",
      },
    ],
    shortTitle: "Get Started with Angular",
    title: "Get Started with Angular",
    content:
      "A beginner-friendly Angular project built while learning the core ...",
    fullText:
      "Get Started with Angular (2025) — My first Angular project where I practiced core concepts like components, bindings, state with Signals, and dynamic rendering. I also explored advanced features such as host bindings, Inputs/Outputs, content projection, lifecycle hooks, and Angular 17’s new rendering utilities.",
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
  // {
  //   tech: ["Node.js", "PostgreSQL", "JWT", "Nodemailer", "Bcrypt"],
  //   imageUrl: require("../../assets/images/node.png"),
  //   links: [
  //     {
  //       label: "GitHub Repo",
  //       url: "https://github.com/Mohammed-Al-Saadi/Clinic/tree/main/server",
  //     },
  //   ],
  //   shortTitle: "User Management System",
  //   title: "User Management System (Hobby project)",
  //   content:
  //     "This project implements a user management system with role-based access...",
  //   fullText:
  //     "This User Management System project is built with Node.js and PostgreSQL, featuring user registration, login, and profile management. It includes role-based access control (RBAC) for admin features such as updating user roles and deactivating accounts. Authentication is handled using JSON Web Tokens (JWT), and email notifications are sent via Nodemailer for password resets. The system ensures security with bcrypt password hashing and supports both access and refresh tokens for session management.",
  // },
];
