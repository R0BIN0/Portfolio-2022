// Images

import PhotoShop from "../assets/images/PS.png";
import React from "../assets/images/React.png";
import Redux from "../assets/images/Redux.png";
import Next from "../assets/images/Next.png";
import JavaScript from "../assets/images/JS.png";
import TypeScript from "../assets/images/TS.png";
import StyledComponent from "../assets/images/StyledComponent.png";
import FramerMotion from "../assets/images/FramerMotion.png";
import Node from "../assets/images/Node.png";
import Mongo from "../assets/images/Mongo.png";
import Prettier from "../assets/images/Prettier.png";
import ESLint from "../assets/images/ESLint.png";
import Husky from "../assets/images/Husky.png";
import AndroidStudio from "../assets/images/AndroidStudio.png";

// Types
import { Project, ProjectHome } from "../config/types";

export const projects: Project[] = [
  {
    href: "portfolio",
    switch: "Portfolio (site web)",
    firstTitle: "PORTFOLIO TITLE",
    site: "https://frozen-plains-30973.herokuapp.com/",
    github: "",
    description: "PORTFOLIO DESCRIPTION",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1652561839/Frame2_rhb6fm.png",
    technologies: [
      Next,
      TypeScript,
      StyledComponent,
      FramerMotion,
      Prettier,
      ESLint,
      Husky,
    ],
    secondTitle: "SECOND TITLE PORTFOLIO",
    role: "PORTFOLIO ROLE",
    process: "PORTFOLIO PROCESS",
    video:
      "https://res.cloudinary.com/e-tech-test/video/upload/v1652532636/testportfolio_k9rlbw.mp4",
    backgroundColor: "#393A46",
  },
  {
    href: "mobile_app",
    switch: "Movie App (application mobile)",
    firstTitle: "MOBILE APP TITLE",
    site: "https://frozen-plains-30973.herokuapp.com/",
    github: "",
    description: "MOBILLE APP DESCRIPTION",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1652561839/Frame2_rhb6fm.png",
    technologies: [React, TypeScript, Prettier, ESLint, AndroidStudio],
    secondTitle: "SECOND TITLE MOBILLE APP",
    role: "MOBILLE APP ROLE",
    process: "MOBILLE APP PROCESS",
    video:
      "https://res.cloudinary.com/e-tech-test/video/upload/v1652532636/testportfolio_k9rlbw.mp4",
    backgroundColor: "#463939",
  },

  {
    href: "panier",
    switch: "Panier (mini projet)",
    firstTitle: "PANIER TITLE",
    site: "https://frozen-plains-30973.herokuapp.com/",
    github: "",
    description: "PANIER DESCRIPTION",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1652561839/Frame2_rhb6fm.png",
    technologies: [React, JavaScript, Prettier, ESLint],
    secondTitle: "SECOND TITLE PANIER",
    role: "PANIER ROLE",
    process: "PANIER PROCESS",
    video:
      "https://res.cloudinary.com/e-tech-test/video/upload/v1652532636/testportfolio_k9rlbw.mp4",
    backgroundColor: "#464639",
  },

  {
    href: "e_tech",
    switch: "E-tech (site e-commerce)",
    firstTitle:
      "E-Tech est un site e-commerce fictif de ventes de produits et périphériques d’ordinateur.",
    site: "https://frozen-plains-30973.herokuapp.com/",
    github: "",
    description:
      "Le but de ce projet a été d'apprendre à manipuler les différents aspects de la programmation web : faire interagir le Front-end avec le Back-end et une base de données mais également d'améliorer mon autonomie face aux difficultés rencontrées.",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1652561839/Frame2_rhb6fm.png",
    technologies: [
      PhotoShop,
      React,
      JavaScript,
      Redux,
      FramerMotion,
      Node,
      Mongo,
    ],
    secondTitle:
      "E-Tech représentait un énorme défi pour moi, n’ayant aucune notion de développement “back-end” Je me lançais un peu dans l’inconnu.",
    role: "Ma principale tâche ici était de savoir mettre en relation une base de données, du back-end et du front-end ainsi que de proposer une Ui/Ux reprennant les codes des sites e-commerce afin de ne pas perdre l’utilisateur.",
    process:
      "Le projet débute en Mai 2021 des suites de mon apprentissage des fondamentaux de React. Afin de structurer mon projet j’ai décidé de développer la maquette sur Figma en amont en me basant sur des sites e-commerce afin de conserver les codes propres à ces sites (Amazon, Cdiscount, BackMarket). Toujours dans l’idée de conserver une structure du projet correct, je décide de réaliser toute la partie front-end avec des valeurs bruts. Aucune grosses difficultés rencontrées. Néanmoins la partie Back-end a été un gros challenge pour moi car j’ai dû apprendre en parralèle de mon projet énormément de notions liées au développement back-end et de sécurité (SQL Injection) ainsi que Node / Express / MongoDB. C’est ici que j’ai développé des reflexes pour faire face aux différentes difficultés comme la lecture de la documentation, Stack Overflow, Youtube. C’est après 4 longs mois de bataille que j’arrive à sortir ce projet qui a été riche en émotion mais j’en suis ressorti meilleur !",
    video:
      "https://res.cloudinary.com/e-tech-test/video/upload/v1652532636/testportfolio_k9rlbw.mp4",
    backgroundColor: "#393D46",
  },
];

export const projectsHome: ProjectHome[] = [
  {
    href: "portfolio",
    year: "2022",
    type: "Site web",
    title: "Portfolio",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1652561839/Frame2_rhb6fm.png",
    technologies: [
      Next,
      TypeScript,
      StyledComponent,
      FramerMotion,
      Prettier,
      ESLint,
      Husky,
    ],
    backgroundColor: "#393A46",
    firstTitle: "PORTFOLIO TITLE",
    site: "https://frozen-plains-30973.herokuapp.com/",
    description: "PORTFOLIO DESCRIPTION",
  },
  {
    href: "mobile_app",
    year: "2022",
    type: "Application mobile",
    title: "Movie App",
    technologies: [React, TypeScript, Prettier, ESLint, AndroidStudio],
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1652561839/Frame2_rhb6fm.png",
    backgroundColor: "#463939",
    firstTitle: "MOBILE APP TITLE",
    site: "https://frozen-plains-30973.herokuapp.com/",
    description: "MOBILLE APP DESCRIPTION",
  },
  {
    href: "panier",
    year: "2022",
    type: "Mini projet",
    title: "Panier",
    technologies: [React, JavaScript, Prettier, ESLint],
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1652561839/Frame2_rhb6fm.png",
    backgroundColor: "#464639",
    firstTitle: "PANIER TITLE",
    site: "https://frozen-plains-30973.herokuapp.com/",
    description: "PANIER DESCRIPTION",
  },
  {
    href: "e_tech",
    year: "2021",
    type: "Site e-commerce",
    title: "E-tech",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1652561839/Frame2_rhb6fm.png",
    technologies: [
      PhotoShop,
      React,
      JavaScript,
      Redux,
      FramerMotion,
      Node,
      Mongo,
    ],
    backgroundColor: "#393D46",
    firstTitle:
      "E-Tech est un site e-commerce fictif de ventes de produits et périphériques d’ordinateur.",
    site: "https://frozen-plains-30973.herokuapp.com/",
    description:
      "Le but de ce projet a été d'apprendre à manipuler les différents aspects de la programmation web : faire interagir le Front-end avec le Back-end et une base de données mais également d'améliorer mon autonomie face aux difficultés rencontrées.",
  },
];

export default projects;
