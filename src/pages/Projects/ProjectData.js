import MobileApp from "../../assets/video/mobileApp.mp4";
import Buba from "../../assets/video/buba.mp4";
import Omar from "../../assets/video/omar.mp4";
import Kalibro from "../../assets/video/kalibro.mp4";
import Booking from "../../assets/video/booking.mp4";
import VkTesting from "../../assets/video/vk_testing.mp4";
import SrpAuth from "../../assets/video/srpAuth.mp4";

export const projects = [
  {
    tech: [
      "Python",
      "Supabase db",
      "PostgreSQL",
      "Angular",
      "WebSocket",
      "CSS",
      "Netlify",
      "Render",
      "Secure Remote Password",
    ],
    imageUrl: require("../../assets/images/tavolopro.png"),
    links: [
      {
        label: "Live Demo",
        url: "https://www.tavolopro.live",
      },
      {
        label: "Backend Code",
        url: "https://github.com/Mohammed-Al-Saadi/tavolo-server",
      },
      {
        label: "Frontend Code",
        url: "https://github.com/Mohammed-Al-Saadi/tavolo-client",
      },
    ],
    keyFeatures: [
      "Project and task management with status-based Agile workflows",
      "Team-based project visibility and structured work item tracking",
      "Real-time updates using WebSockets for live collaboration",
      "Secure authentication using Secure Remote Password (SRP)",
      "Role-based access control (RBAC) with protected views and actions",
      "Route protection with guards (only authorized roles can access admin/team pages)",
      "Modern frontend built with Angular (component-based architecture)",
      "Full-stack deployment using Netlify and Render",
    ],

    challenges: [
      "Keeping project and task state synchronized across multiple users",
      "Designing a scalable database structure for projects and workflows",
      "Implementing authentication without transmitting passwords",
      "Building and enforcing RBAC consistently across UI, routes, and backend APIs",
      "Structuring the Angular app for scalable growth (modules, shared components, state)",
      "Handling cold-start delays caused by free-tier hosting",
    ],

    solutions: [
      "Implemented WebSockets to broadcast updates instantly to clients",
      "Designed normalized PostgreSQL schemas for projects and tasks",
      "Used SRP with salts and verifiers instead of traditional password auth",
      "Implemented RBAC using roles/permissions in JWT/session + backend middleware checks",
      "Protected Angular routes with Guards and hid/disabled UI actions based on permissions",
      "Organized Angular features into modules and reused shared components for maintainability",
      "Added UX messaging to inform users about initial cold-start delays",
    ],

    shortTitle: "TavoloPro – Agile Project Tool",
    title: "TavoloPro – Agile Project & Team Tracking Platform (Hobby Project)",
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
        label: "Code",
        url: "https://github.com/Mohammed-Al-Saadi/SRP-Auth",
      },
    ],
    keyFeatures: [
      "SRP-6a registration and login flow based on RFC 5054 concepts",
      "No password transmission or storage in plain text (salt + verifier model)",
      "Angular client-side cryptographic computations (proof generation and verification)",
      "Flask API endpoints for SRP steps: register, start, verify",
      "PostgreSQL persistence for users, salts, and verifiers",
    ],

    challenges: [
      "Implementing SRP steps correctly without exposing sensitive material",
      "Keeping client and server computations consistent across SRP phases",
      "Handling validation, edge cases, and error messaging securely",
    ],

    solutions: [
      "Separated SRP flow into clear API steps (register / start / verify)",
      "Validated parameters and proofs server-side before completing authentication",
      "Performed all SRP computations in the browser and stored only salt/verifier in DB",
      "Improved UX with clear feedback for invalid proofs or incorrect login attempts",
    ],
    shortTitle: "SRP Authentication System",
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
      "Microservices",
      "ML",
    ],
    imageUrl: require("../../assets/images/card_kalibro.png"),
    links: [],
    keyFeatures: [
      "Technical audits: WHOIS, DNS, IP geolocation, SSL/TLS, server and tech stack detection",
      "Lighthouse integration: Performance, Accessibility, Best Practices, SEO metrics + explanations",
      "UI/UX screenshot analysis: color/style classification and visual insights",
      "Role-based dashboard + internal team roles and permissions",
      "Subscription tiers (Free, Small, Medium, Large) with feature gating",
      "Background task processing and job queuing for long-running audits",
      "Non-blocking user experience — users can continue using the dashboard while audits run",
      "Real-time processing logs via WebSockets + in-app notifications and activity emails",
      "Suspicious/bot request detection with blocking and throttling to prevent abuse",
      "Stripe billing: subscriptions, invoices, payment method updates",
      "Security features: JWT auth + optional 2FA",
      "Unified reporting and scoring (Kalibro Score) with downloadable audit reports",
      "Internal management area for users, campaigns, messages, and analytics",
    ],

    challenges: [
      "Coordinating multiple audit modules (WHOIS, DNS, Lighthouse, screenshot analysis) reliably",
      "Designing role-based access control across UI, API endpoints, and subscription feature gating",
      "Running heavy and long audits without blocking users or API request handling",
      "Keeping long-running audit jobs observable with real-time progress feedback",
      "Preventing automated or abusive/bot traffic from exhausting audit resources",
      "Deploying a multi-service architecture on AWS with secure permissions and CI/CD",
      "Optimizing performance for heavy tasks (images, ML classification, Lighthouse results)",
    ],

    solutions: [
      "Designed a modular pipeline so each audit module runs independently and reports consistent outputs",
      "Implemented RBAC + subscription-based permissions on both backend and frontend to prevent unauthorized access",
      "Offloaded long-running audits to background workers via a job queue to keep the UI responsive",
      "Added WebSocket-based live logs, progress updates, and clear status messaging for running jobs",
      "Implemented validation, rate limiting, and behavioral checks to block or throttle suspicious/bot requests before queuing",
      "Used AWS IAM role-based access and GitHub Actions for automated build/deploy workflows",
      "Improved performance via caching, smarter batching, and optimized ML inference paths",
    ],

    shortTitle: "Kalibro - Calevala OY",
    title: "Kalibro - Audit Tool for Calevala Interactive OY",
    content: "Kalibro is a robust website audit and optimization platform...",
    fullText:
      "The product reached a functional internal release and was later discontinued due to business reasons; the walkthrough video below demonstrates its full capabilities. Kalibro (v1.0, 2025) — A full-stack website audit and optimization platform developed for Calevala Interactive to improve websites’ online presence. It combines technical diagnostics with a role-based business dashboard, performing multi-dimensional audits across WHOIS, IP geolocation, DNS, SSL, technology stack, and Lighthouse metrics (Performance, Accessibility, Best Practices, SEO), along with UI/UX analysis from screenshots (colors, styles, mood). The platform includes subscription tiers (Free, Small, Medium, Large), customer roles (Admin & View-only), and internal team roles. Features include real-time logs via WebSockets, in-app notifications and activity emails, 2FA, Stripe billing (plans, invoices, card updates), team/associated accounts, audit reports with a unified Kalibro Score, and a management area for users, campaigns, messages, and analytics.",
  },

  {
    videoUrl: Booking,
    tech: ["Python", "React", "PostgreSQL", "JWT", "CSS", "Redux"],
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
    keyFeatures: [
      "Customer booking flow: services → barber selection → available times → confirmation",
      "Barber dashboard for managing bookings and daily schedules",
      "Custom working hours per barber, including days off and adjusted opening hours",
      "Break scheduling that blocks time slots without affecting existing bookings",
      "Service-to-barber restrictions to reflect real shop capabilities",
      "JWT authentication and role-based dashboard access",
      "Redux state management for multi-step booking flow",
    ],

    challenges: [
      "Generating accurate time slots per barber based on service duration and booking gaps",
      "Ensuring breaks block availability without invalidating existing appointments",
      "Handling role-based access (customer vs barber dashboard) securely",
      "Keeping UX smooth across a multi-step booking process",
    ],

    solutions: [
      "Implemented slot generation using barber schedules + service duration + configurable buffer time",
      "Validated break creation against existing bookings and prevented conflicting breaks",
      "Secured dashboard endpoints using JWT auth and role checks",
      "Used Redux to persist selected service/barber/time across navigation steps",
    ],
    shortTitle: "Barbershop Booking",
    title: "Barber Booking System – Web App (Hobby project)",
    content:
      "This full-stack web application,  provides a comprehensive booking...",
    fullText:
      "This full-stack web application, provides a comprehensive booking platform for barbershops. Users can choose from various services, select barbers, and book appointments. The business dashboard enables barbers to manage bookings, set their opening hours, breaks, and mark custom schedules like days off or adjusted working hours. The system is designed to allow certain services to be performed by specific barbers, offering flexible management for both customers and barbers.",
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
    keyFeatures: [
      "Load, stress, spike, and soak testing scenarios implemented with K6",
      "Performance analysis focused on API response times and reliability",
      "Real-world testing against a production-like system (Kalibro.io)",
      "Clear reporting and interpretation of performance metrics",
    ],

    challenges: [
      "Designing realistic test scenarios that reflect real user behavior",
      "Interpreting performance metrics beyond raw response times",
      "Identifying meaningful optimization targets from large result datasets",
    ],

    solutions: [
      "Created structured K6 test scripts for different traffic patterns",
      "Analyzed trends across test types to identify bottlenecks",
      "Provided optimization recommendations based on HTTP duration metrics",
    ],
    shortTitle: "Performance Testing with K6",
    title: "Enhancing API reliability in Kalibro.io (Calevala Ltd)",
    content: "This thesis focuses on executing performance testing for...",
    fullText:
      "This thesis focuses on executing performance testing for the Kalibro.io tool, developed by Calevala Interactive Ltd., using the K6 performance testing tool. The study covers various tests, including load, stress, spike, and soak, to ensure system stability under different user loads. The testing results highlighted solid performance, with recommendations for further optimization in HTTP duration times. The thesis serves as a practical guide for implementing K6-based performance testing.",
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
        label: "Code",
        url: "https://github.com/Mohammed-Al-Saadi/react-native-moblie-app",
      },
    ],
    keyFeatures: [
      "Flight search for one-way and round-trip journeys",
      "Dynamic backend-generated flight results based on user input (no third-party APIs)",
      "Booking flow with stored bookings and user history",
      "User authentication with JWT (register, login, logout)",
      "Profile management (update user details and password)",
      "Favorites system (add/remove favorite flights)",
      "Redux state management for smooth app navigation and data flow",
    ],

    challenges: [
      "Delivering an MVP within a strict 2-week timeline",
      "Learning React Native while building a full-stack mobile app",
      "Finding free flight APIs that support realistic search + booking data",
      "Designing believable flight search results without external data sources",
    ],

    solutions: [
      "Focused on core MVP scope and shipped features in small increments (search → auth → booking → profile)",
      "Built reusable React Native components and used Redux to stabilize state across screens",
      "Created a custom Node.js/Express backend that generates flight results dynamically from user input",
      "Designed consistent data models for flights, bookings, and favorites to keep the app scalable",
    ],
    shortTitle: "Horizon Mobile App",
    title: "Horizon – Mobile Flight Search & Booking App (Hobby Project)",
    content:
      "Horizon is a full-stack mobile app built using React Native and Node.js...",
    fullText:
      "Horizon is a full-stack mobile app that enables users to search for one-way and two-way flights, create accounts, update profiles, and book flights. The app dynamically generates flights based on user input through a custom backend, ensuring a tailored search experience without relying on third-party APIs. The app also includes features like user authentication, profile management, and flight booking, making it a comprehensive solution for flight search and booking.",
  },
  {
    videoUrl: Buba,
    tech: ["React JS", "CSS"],
    imageUrl: require("../../assets/images/card_buba.png"),
    links: [
      {
        label: "Live Demo",
        url: "https://bubasalon.com",
      },
    ],
    keyFeatures: [
      "Responsive layout for mobile, tablet, and desktop",
      "Service list and business information (contact + location)",
      "Clean UI structure and easy navigation",
      "Fast-loading static site",
    ],

    challenges: [
      "Creating a clean layout that works well on all screen sizes",
      "Balancing visual design with readability and quick access to info",
    ],

    solutions: [
      "Used responsive CSS and flexible layouts for consistent UI across devices",
      "Structured sections and typography for clear content hierarchy",
    ],
    shortTitle: "Buba Salon Website",
    title: "Buba Salon – Responsive Business Website",
    content:
      "Buba Salon: The static website for Buba Salon  provides a seamless user...",
    fullText:
      "The static website for Buba Salon provides a seamless user experience. It features essential information such as contact details, location, and a comprehensive list of services. With a clean, modern design, the site ensures easy navigation, allowing visitors to quickly find the details they need.",
  },
  {
    videoUrl: Omar,
    tech: ["React JS", "CSS", "EmailJS"],
    imageUrl: require("../../assets/images/card_omar.png"),
    links: [
      {
        label: "Live Demo",
        url: "https://www.omarparturi.fi/",
      },
    ],
    keyFeatures: [
      "Responsive layout and modern UI",
      "Service list + contact and location details",
      "Contact form integration using EmailJS",
      "Fast static-site experience with clear navigation",
    ],

    challenges: [
      "Implementing reliable contact messaging without a backend",
      "Ensuring consistent styling and spacing across devices",
    ],

    solutions: [
      "Integrated EmailJS for contact form delivery with validation and clear UX feedback",
      "Used responsive CSS and reusable layout sections for consistent UI",
    ],
    shortTitle: "Omar Parturi Website",
    title: "Omar Parturi – Responsive Barbershop Website",
    content: "The static website for Omar Parturi provides a seamless user....",
    fullText:
      "The static website for Omar Parturi provides a seamless user experience. It features essential information such as contact details, location, and a comprehensive list of services. With a clean, modern design, the site ensures easy navigation, allowing visitors to quickly find the details they need.",
  },
  {
    tech: ["React JS", "CSS", "EmailJS", "Google Analytics"],
    imageUrl: require("../../assets/images/card_portfolio.png"),
    links: [
      {
        label: "Code",
        url: "https://github.com/Mohammed-Al-Saadi/Portfolio-React",
      },
    ],
    keyFeatures: [
      "Responsive layout for mobile and desktop",
      "Projects section with structured case-study style content",
      "Contact form powered by EmailJS (no backend required)",
      "Google Analytics integration for traffic insights",
      "Clear navigation and modern UI styling",
    ],

    challenges: [
      "Keeping the UI clean while presenting a lot of information (skills, projects, experience)",
      "Building a reliable contact flow without a backend",
    ],

    solutions: [
      "Used reusable React components and consistent spacing/typography for readability",
      "Integrated EmailJS with validation and clear success/error feedback",
    ],
    shortTitle: "Developer Portfolio",
    title: "Personal Developer Portfolio Website",
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
        label: "Code",
        url: "https://github.com/Mohammed-Al-Saadi/ROBOT-FRAMEWORK/blob/main/UI%20test%20project%20RF/software_testing_project-final.robot",
      },
      {
        label: "Other RF Projects",
        url: "https://github.com/Mohammed-Al-Saadi/ROBOT-FRAMEWORK",
      },
    ],
    keyFeatures: [
      "E2E automation for core user flows (login, search, filters, cart/favorites)",
      "UI validations for product page elements and category navigation",
      "Reusable keywords and readable test structure (Robot Framework style)",
      "Browser automation using Selenium WebDriver (Chrome)",
    ],

    challenges: [
      "Handling dynamic UI elements and timing issues in browser automation",
      "Keeping test cases readable and maintainable as coverage grows",
    ],

    solutions: [
      "Used stable selectors and waits where needed to reduce flaky tests",
      "Organized tests into reusable keywords for cleaner, maintainable scripts",
    ],
    shortTitle: "Automated UI Testing",
    title: "Automated UI Testing Suite for Verkkokauppa.com (Hobby Project)",
    content: "This project is an automation testing suite for Verkkokauppa.com",
    fullText:
      "This project is an automation testing suite for Verkkokauppa.com, built using Robot Framework with SeleniumLibrary. It automates key user interactions such as account creation, login, product search, filtering, and adding items to the cart or favorites. The tests also validate product page elements, category icons, and sorting features. The suite ensures smooth functionality across the website by simulating real user workflows. It utilizes Selenium WebDriver for browser automation and Chrome for executing tests.",
  },

  {
    tech: ["Angular"],
    imageUrl: require("../../assets/images/angular.png"),
    links: [
      {
        label: "Live Demo",
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
];
