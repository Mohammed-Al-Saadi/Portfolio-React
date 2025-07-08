// src/components/WorkExperience/workExperienceData.js
import calevalaLogo from "../../assets/images/calevalaLogo.png";
import NoLogo from "../../assets/images/noLogo.png";

const workExperienceData = [
  {
    logo: calevalaLogo,
    title: "Full-Stack Developer",
    company: "Calevala Ltd",
    year: "01 Jun 2024 – Present",
    description:
      "- Led complete project lifecycle for Kalibro.io, an AWS-hosted site audit tool.\n" +
      "- Implemented secure authentication (OAuth, JWT & 2FA) and integrated Stripe payments.\n" +
      "- Designed and built role-based access control and reusable React/Redux components.\n" +
      "- Added nested navigation, dynamic pagination, and modular UI patterns.\n" +
      "- Developed Flask REST APIs for front-end and third-party integrations.\n" +
      "- Created customer and management dashboards with real-time notifications and activity logs to track team performance.\n" +
      "- Established CI/CD pipelines with GitHub Actions for AWS Lambda deployments.\n" +
      "- Supervised and mentored ICT interns and thesis students in agile workflows.",
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
