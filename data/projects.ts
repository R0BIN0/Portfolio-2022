// Images
import EtechImg from "../assets/images/Frame1.png";

import React from "../assets/images/React.png";

// Types
import { ProjectHome } from "../config/types";

export const projectsHome: ProjectHome[] = [
  {
    href: "portfolio",
    year: "2022",
    type: "Site web",
    title: "Portfolio",
    technologies: [React, React, React, React],
    image: EtechImg,
    backgroundColor: "#393A46",
  },
  {
    href: "mobile_app",
    year: "2022",
    type: "Application mobile",
    title: "Movie App",
    technologies: [React, React, React],
    image: EtechImg,
    backgroundColor: "#463939",
  },
  {
    href: "panier",
    year: "2022",
    type: "Mini projet",
    title: "Panier",
    technologies: [React, React, React],
    image: EtechImg,
    backgroundColor: "#464639",
  },
  {
    href: "e_tech",
    year: "2021",
    type: "Site e-commerce",
    title: "E-tech",
    technologies: [React, React],
    image: EtechImg,
    backgroundColor: "#393D46",
  },
];
