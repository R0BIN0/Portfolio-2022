// General
import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

// Styles

// Images

// Components
import TopProject from "../components/TopProject/TopProject";

// Data
import { projectsHome } from "../data/projects";

// Types
import { ProjectHome } from "../config/types";

type Props = {
  obj: ProjectHome;
};

const project: FC<Props> = ({ obj }) => {
  return (
    <>
      <TopProject />
    </>
  );
};

export default project;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: ProjectHome[] = projectsHome;

  const paths = data.map((item) => ({
    params: { project: String(item.href) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.project;
  const data: ProjectHome[] = projectsHome;
  const index: number = data.findIndex((item) => item.href === id);
  const obj = projectsHome[index];

  return {
    props: { obj },
  };
};
