// Images
import { StaticImageData } from "next/image";

import EtechImg from "../assets/images/Frame1.png";

import React from "../assets/images/React.png";

// Types

type Props = {
  href: string;
  year: string;
  type: string;
  title: string;
  technologies: StaticImageData[];
  image?: StaticImageData;
  backgroundColor: string;
};

export const projectsHome: Props[] = [
  {
    href: "portfolio",
    year: "2022",
    type: "Site web",
    title: "Portfolio",
    technologies: [React, React, React, React],
    backgroundColor: "#393A46",
  },
  {
    href: "mobile_app",
    year: "2022",
    type: "Application mobile",
    title: "Movie App",
    technologies: [React, React, React],
    backgroundColor: "#463939",
  },
  {
    href: "panier",
    year: "2022",
    type: "Mini projet",
    title: "Panier",
    technologies: [React, React, React],
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
