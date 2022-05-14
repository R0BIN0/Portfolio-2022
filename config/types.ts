import { StaticImageData } from "next/image";

export type ProjectHome = {
  href: string;
  year: string;
  type: string;
  title: string;
  technologies: StaticImageData[];
  image: StaticImageData;
  backgroundColor: string;
};
