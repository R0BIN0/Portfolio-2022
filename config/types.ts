import { StaticImageData } from "next/image";

export type Project = {
  href: string;
  firstTitle: string;
  site: string;
  github: string;
  description: string;
  image: string;
  technologies: StaticImageData[];
  secondTitle: string;
  role: string;
  process: string;
  video: string;
  backgroundColor: string;
};

export type ProjectHome = {
  href: string;
  year: string;
  type: string;
  title: string;
  technologies: StaticImageData[];
  image: string;
  backgroundColor: string;
  firstTitle: string;
  site: string;
  description: string;
};

export type TopProjectProps = {
  firstTitle: string;
  site: string;
  description: string;
  image: string;
  backgroundColor: string;
  route?: boolean;
};
