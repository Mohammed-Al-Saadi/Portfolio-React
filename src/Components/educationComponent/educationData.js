import hameUniversityImage from "../../assets/images/logo_hamk.png";
import hameUniversityImage2 from "../../assets/images/hamk_degree.pdf";

import yarmoukUniversityImage from "../../assets/images/logo_yuc.png";
import yarmoukUniversityImage2 from "../../assets/images/yar_degree.png";

export const EducationData = [
  {
    name: "Häme University of Applied Sciences (Computer Applications)",
    image: hameUniversityImage,
    completed: "2024",
    gpa: "4.3/5",
    logoClassName: "education-card-image-hame",
    certificate: hameUniversityImage2,
    uniLink:
      "https://www.hamk.fi/?gad_source=1&gclid=Cj0KCQjwmt24BhDPARIsAJFYKk3wBQnOaxvjXvBwj9mtMpwg1piXEbLmFqoT96HnpVKxnA-hsl_I6n8aApWqEALw_wcB",
  },
  {
    name: "Al-Yarmouk University College (Computer Engineering)",
    image: yarmoukUniversityImage,
    completed: "2014",
    gpa: "61/100",
    logoClassName: "education-card-image-yarmouk",
    certificate: yarmoukUniversityImage2,
    uniLink: "https://al-yarmok.edu.iq/en/",
  },
];
