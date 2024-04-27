import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    python,
    nodejs,
    mongodb,
    git,
    docker,
    java,
    c,
    csharp,
    sensitech,
    nuance,
    cplus,
    microsoft,
    BillSplit,
    TimeTraveler,
    s1,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: web,
    },
    {
      title: "Fullstack Development",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,

    },
    {
      name: "java",
      icon: java,

    },
    {
      name: "c",
      icon: c,

    },
    {
      name: "cplus",
      icon: cplus,

    },
    {
      name: "csharp",
      icon: csharp,

    },
  ];
  
  const experiences = [
    {
      title: "Production Intern",
      company_name: "Sensitech Inc.",
      icon: sensitech,
      iconBg: "#383E56",
      date: "June 2021 - August 2021",
      points: [
        "Optimized production processes, achieving a 25% increase in efficiency for preparing monitor units for shipping.",
        "Prepared job traveler reports for each individual order of monitor units.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Nuance Communications",
      icon: nuance,
      iconBg: "#E6DEDD",
      date: "May 2022 - August 2022",
      points: [
        "Contributed to the improvement of a service architecture system virtual assistant AI using C#, which delivers intelligent, conversational engagements to increase self-service usage and customer satisfaction",
        "Implemented unit and regression tests using RESTful and WebSocket APIs, reducing code-related performance issues",
        "Collaborated with a team of software engineers and quality assurance team in an Agile environment",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "BillSplit",
      description:
        "Fullstack web application aimed at simplifying the receipt-splitting process among users by identifying shared items, thereby facilitating seamless expense sharing.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
      ],
      image: BillSplit,
      source_code_link: "https://github.com/ajalal03/BillsplitNode",
      link: "https://billsplit.onrender.com/",
    },
    {
      name: "Time Travelers",
      description:
        "Developed a puzzle game called Time Travelers enabling users to traverse specific points in time upon interacting with designated objects within 2 game levels",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: TimeTraveler,
      source_code_link: "https://github.com/ajalal03/TimeTravelers",
      link: "https://marvinagyen.itch.io/alien-time-traveller",
    },
    {
      name: "Conway's Game of Life",
      description:
        "Developed a dynamic implementation of Conway's Game of Life utilizing Swift programming language. Implemented features include: simulation history, interactive interface, and visual effects.",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "FunctionalProgramming",
          color: "green-text-gradient",
        },
      ],
      image: s1,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };