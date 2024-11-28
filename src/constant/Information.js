import react from "../assets/logos/react.svg";
import javaScript from "../assets/logos/javascript.png";
import html from "../assets/logos/html.webp";
import css from "../assets/logos/css.svg";
import redux from "../assets/logos/redux.svg";
import nextjs from "../assets/logos/nextjs.svg";
import typeScript from "../assets/logos/typescript.png";
import github from "../assets/logos/github.svg";
import java from "../assets/logos/java.svg";
import springBoot from "../assets/logos/springboot.png";
import tailwindCss from "../assets/logos/tailwind.png";
import figma from "../assets/logos/figma.webp";
import materialui from "../assets/logos/materialui.svg";
import postman from "../assets/logos/postman.svg";
import python from "../assets/logos/python.webp";
import nodejs from "../assets/logos/nodejs.webp";
export const StackEnum = {
  VALUE_HTML: "HTML",
  VALUE_CSS: "CSS",
  VALUE_JAVASCRIPT: "JAVASCRIPT",
};

export const skills = [
  {
    name: "React JS",
    image: react,
    link: "https://react.dev/blog/2023/03/16/introducing-react-dev",
  },
  {
    name: "Next JS",
    image: nextjs,
    link: "https://nextjs.org/docs",
  },
  {
    name: "TypeScript",
    image: typeScript,
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Java",
    image: java,
    link: "https://docs.oracle.com/en/java/",
  },
  {
    name: "Spring Boot",
    image: springBoot,
    link: "https://docs.spring.io/spring-boot/documentation.html",
  },
  {
    name: "Node.js",
    image: nodejs,
    link: "https://nodejs.org/docs/latest/api/",
  },
  // {
  //   name: "Github",
  //   image: github,
  // },
  // {
  //   name: "Tailwind",
  //   image: tailwindCss,
  // },
  // {
  //   name: "Figma",
  //   image: figma,
  // },
  // {
  //   name: "Material UI",
  //   image: materialui,
  // },
  // {
  //   name: "Python",
  //   image: python,
  // },
  // {
  //   name: "Postman",
  //   image: postman,
  // },
  // {
  //   name: "JavaScript",
  //   image: javaScript,
  // },
  // {
  //   name: "HTML",
  //   image: html,
  // },
  // {
  //   name: "CSS",
  //   image: css,
  // },
  // {
  //   name: "Redux",
  //   image: redux,
  // },
];
export const projectInvolved = [
  {
    id: 1,
    name: "PPSC Web Portal",
    stackUsed: ["HTML", "CSS", "JAVASCRIPT"],
    detail:
      "PPSC stands for Province Public Service Commission. This web portal application facilitates the overall steps of public service commission's examination of the Nepal Government.",
  },
  {
    id: 2,
    name: "VRTMS Web Portal",
    stackUsed: ["HTML", "CSS", "JAVASCRIPT"],
    detail:
      "VRTMS stands for Vehicle Registration & Transport Management System. This web portal application facilitates the vehicle registration process of Koshi Province government of Nepal.",
  },
];

export const experienceInvolved = [
  {
    id: 1,
    role: "UI/UX Engineer",
    date: "2021-2022",
    companyName: "SeeLogic International",
    link: "https://seelogic.co.uk/",
    detail:
      "Deliver high-quality, robust production code for a diverse array of projects for clients such as Murray Uniform, and Hawkins Security. Involved in requirement analysis process and also led the team of front-end developers for the projects.",
    tags: ["React Native", "React", "Tailwind"],
  },
  {
    id: 2,
    role: "Web Developer",
    date: "2019-2021",
    companyName: "InfoDevelopers Pvt. Ltd",
    link: "https://infodev.com.np/",
    detail:
      "Developed and maintained the production code for client web application portals under the banner of InfoDevelopers. Clients included Nepal Government, Nepal Police.",
    tags: ["JavaScript", "Leaflet.js", "SCSS", "React"],
  },
  {
    id: 3,
    role: "Junior Web Designer & Developer",
    date: "2018-2019",
    companyName: "Treeleaf Technology",
    link: "https://treeleaf.ai/",
    detail:
      "Designed and developed web applications and brochures for in-house projects. Participated in various software development lifecycle.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

export const techstack = [
  {
    name: "HTML/CSS",
    value: "Expert",
  },
  {
    name: "JavaScript",
    value: "Expert",
  },
  {
    name: "React",
    value: "Expert",
  },
  {
    name: "TypeScript",
    value: "Intermediate",
  },
  {
    name: "Python / C++ / Node.js",
    value: "Intermediate",
  },
  {
    name: "Android Development",
    value: "Intermediate",
  },
];
