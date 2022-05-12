import { GetStaticPaths, GetStaticProps } from "next";
import { projectsHome } from "../data/projects";
import { ProjectHome } from "../config/types";
import { FC } from "react";

type Props = {
  obj: ProjectHome;
};

const project: FC<Props> = ({ obj }) => {
  console.log(obj.href);

  return <div>{obj.title}</div>;
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
