// src/components/WorkExperience/workExperienceData.js
import calevalaLogo from "../../assets/images/calevalaLogo.png";
import NoLogo from "../../assets/images/noLogo.png";

const workExperienceData = [
  {
    logo: calevalaLogo,
    title: "Full-Stack Developer",
    company: "Calevala Ltd",
    year: "01 Jun 2024 – 30 Sep 2025",
    description:
    "- Led end-to-end delivery of Kalibro v1.0 on AWS (ECS & Lambda), PostgreSQL data layer, deployment strategy.\n" +
    "- Implemented secure authentication and account controls: OAuth (Google), JWT, 2FA, and session management with remote logout; designed RBAC across seven roles with plan-based permissions.\n" +
    "- Built subscriptions & billing with Stripe (checkout, upgrades/downgrades, invoices/PDFs, card updates) and webhook-driven sync; enforced per-plan refresh limits (72h/24h/3h).\n" +
    "- Delivered core audits: Lighthouse Web Diagnostic Hub (Performance/Accessibility/Best Practices/SEO), Technical & Security (WHOIS, IP geolocation + map, DNS, SSL, tech stack), UI/UX screenshot analysis; designed the unified Kalibro Score and Audit Report with email delivery.\n" +
    "- Created customer & management dashboards with real-time logs via WebSockets, in-app notifications, activity emails, nested navigation, dynamic pagination, filtering, and a guided dashboard tour.\n" +
    "- Built the Management suite: team users & roles, customers & associated accounts, help/messages inbox, campaign emailer, Stripe statistics, and a Team Activity Log with filters & pagination.\n" +
    "- Established CI/CD with GitHub Actions (containers and Lambda deployments), set coding standards and modular API patterns, and mentored ICT interns and thesis students in agile workflows.",
  
  },
  {
    logo: calevalaLogo,
    title: "App Developer Trainee",
    company: "Calevala Ltd",
    year: "02 Jan 2024 - 30 May 2024",
    duration: "5 months",
    description:
      "- Assisted in planning and implementing full-stack features for Kalibro using Flask and React.\n- Developed and tested backend APIs, ensuring secure data handling.\n- Built responsive user interfaces and improved UI/UX flows.\n- Performed code reviews and collaborated with senior developers to refine best practices.\n- Enhanced understanding of professional software development workflows.",
  },
  {
    logo: calevalaLogo,
    title: "HAMK ICT Project",
    company: "Calevala Ltd",
    year: "24 Oct 2023 - 22 Dec 2023",
    duration: "8 weeks",
    description:
      "- Collaborated with project stakeholders to define user requirements and establish project milestones.\n- Outlined foundational architecture for the Kalibro site audit tool.\n- Created prototypes for core features to validate design concepts.\n- Documented project progress and provided regular updates to the team.",
  },
  {
    logo: NoLogo,
    title: "IT Specialist Trainee",
    company: "Baqubah Municipality",
    year: "06 Jun 2013 - 06 Nov 2013",
    duration: "5 months",
    description:
      "- Provided technical support and troubleshooting for end-users, ensuring timely resolution of IT issues.\n- Assisted in network configuration and routine maintenance tasks.\n- Optimized system performance through software updates and hardware checks.\n- Gained hands-on experience in IT operations and developed a strong problem-solving mindset.",
  },
];

export default workExperienceData;
