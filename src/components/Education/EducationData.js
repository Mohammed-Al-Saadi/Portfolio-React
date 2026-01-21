import hameUniversityImage from "../../assets/images/logo_hamk.png";
import yarmoukUniversityImage from "../../assets/images/logo_yuc.png";
import { FcGoogle } from "react-icons/fc";
import kamk from "../../assets/images/kamk.jpg";
export const EducationData = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    field: "Computer Applications",
    university: "Häme University of Applied Sciences (HAMK)",
    country: "Finland",
    qualification: "Tradenomi (AMK / UAS)",
    period: "2021 – 2024",
    gpa: "GPA: 4.3 / 5",
    image: hameUniversityImage,
    uniLink: "https://www.hamk.fi/",
  },
  {
    degree: "Bachelor of Engineering (BEng)",
    field: "Computer Techniques Engineering",
    university: "Al-Yarmouk University College",
    country: "Iraq",
    qualification: "Bachelor degree (Computer Techniques Engineering)",

    period: "2010 – 2014",
    gpa: "GPA: 60.8 / 100",
    image: yarmoukUniversityImage,
    uniLink: "https://al-yarmok.edu.iq/en/",
  },
];

export const CertificationsData = [
  {
    image: kamk,

    name: "Exploring Artificial Intelligence",
    issuer: "Kajaanin Ammattikorkeakoulu",
    issued: "Jul 2024",
    credentialId: "1ad0ca0b37b55d3def2a09fc01d2167bac8e28dd",
    credentialUrl:
      "https://openbadgefactory.com/v1/assertion/1ad0ca0b37b55d3def2a09fc01d2167bac8e28dd.html",
  },
  {
    image: <FcGoogle size={60} />,
    name: "Google Cloud Fundamentals: Core Infrastructure",
    issuer: "Google",
    issued: "Sep 2023",
    credentialId: "5288705",
    credentialUrl:
      "https://www.cloudskillsboost.google/public_profiles/8f0f6ab9-ea5d-4104-9ea1-2e63a69e76fe/badges/5288705?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
];
