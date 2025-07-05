import hameUniversityImage from "../../assets/images/logo_hamk.png";
import hameUniversityImage2 from "../../assets/images/hamk_degree.pdf";

import yarmoukUniversityImage from "../../assets/images/logo_yuc.png";
import yarmoukUniversityImage2 from "../../assets/images/yar_degree.png";
import { FcGoogle } from "react-icons/fc";
import kamk from "../../assets/images/kamk.jpg";
export const EducationData = [
  {
    name: "Häme University of Applied Sciences (Computer Applications)",
    image: hameUniversityImage,
    completed: "2021 - 2024",
    gpa: "4.3/5",
    logoClassName: "education-card-image-hame",
    certificate:
      "https://opintopolku.fi/koski/opinnot/6dc4a6889add4199920128f03c341296",
    uniLink:
      "https://www.hamk.fi/?gad_source=1&gclid=Cj0KCQjwmt24BhDPARIsAJFYKk3wBQnOaxvjXvBwj9mtMpwg1piXEbLmFqoT96HnpVKxnA-hsl_I6n8aApWqEALw_wcB",
  },
  {
    name: "Al-Yarmouk University College (Computer Engineering)",

    image: yarmoukUniversityImage,
    completed: "2010 - 2014",
    gpa: "61/100",
    logoClassName: "education-card-image-yarmouk",
    certificate: yarmoukUniversityImage2,
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
