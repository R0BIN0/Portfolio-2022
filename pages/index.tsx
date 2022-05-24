// General
import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion, Variants } from "framer-motion";

// Styles
import {
  Container,
  TitleContainer,
  Title,
  Flex,
  LineContainer,
  PageTransition,
} from "../styles/Global/Global.styles";

import {
  CardContainer,
  DarkBackground,
  LittleLoader,
} from "../styles/PagesStyles/index.styles";

// Components
import ButtonLink from "../components/ButtonLink/ButtonLink";
import Card from "../components/Card/Card";
import ButtonGithub from "../components/ButtonGithub/ButtonGithub";

// Data
import { projectsHome } from "../data/projects";
import TopProject from "../components/TopProject/TopProject";

// Type
import { TopProjectProps } from "../config/types";
import ImgLoader from "../components/ImgLoader/ImgLoader";

type RenderList = {
  filter: string;
};

const Home: FC = () => {
  // ========= animation and page transition ========= //

  const ease = [0.7, 0, 0.15, 1];
  const transitionTime = 1;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.body.style.overflow = "initial";
    }, transitionTime * 1000);
  }, []);

  const animation: Variants = {
    show: {
      position: "fixed",
      top: 0,
      left: 0,
      transform: "translateY(0vh) skewY(0deg)",
    },
    hidden: {
      position: "fixed",
      top: 0,
      left: 0,
      transform: "translateY(-120vh) skewY(-5deg)",
      transition: {
        duration: transitionTime,
        ease: ease,
      },
    },
  };

  const loader: Variants = {
    hidden: {
      transform: "translateY(10px)",
      opacity: 0,
    },
    show: {
      transform: "translateY(0px)",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: ease,
      },
    },
    exit: {
      transform: "translateY(10px)",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: ease,
      },
    },
  };

  const darkBackground: Variants = {
    hidden: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    show: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",

      transition: {
        duration: 2,
        ease: ease,
      },
    },
  };

  // ========= render list of items ========= //

  useEffect(() => {
    document.body.style.pointerEvents = "all";
  }, []);

  const [clickedProject, setClickedProject] = useState<TopProjectProps>();

  const RenderItems: FC<RenderList> = ({ filter }): JSX.Element => {
    const clickedProjectFunc = (obj: TopProjectProps): void => {
      setClickedProject(obj);
      document.body.style.pointerEvents = "none";
    };

    return (
      <>
        {projectsHome
          .filter((item) => item.year.includes(filter))
          .map((item, i) => (
            <div
              key={uuidv4()}
              onClick={() =>
                clickedProjectFunc({
                  firstTitle: item.firstTitle,
                  site: item.site,
                  description: item.description,
                  backgroundColor: item.backgroundColor,
                  image: item.image,
                })
              }
              style={{ width: "100%" }}
            >
              <Card
                id={i}
                href={item.href}
                year={item.year}
                type={item.type}
                title={item.title}
                technologies={item.technologies}
                image={item.image}
                backgroundColor={item.backgroundColor}
              />
            </div>
          ))}
      </>
    );
  };

  return (
    <>
      <PageTransition
        initial="show"
        animate="hidden"
        variants={animation}
        // style={{ display: firstLoad ? "none" : "initial" }}
      >
        <Flex justifyContent="center" alignItems="center">
          <ImgLoader />
        </Flex>
      </PageTransition>

      <LineContainer>
        <div className="line-border">
          <div className="line-absolute">
            <Flex justifyContent="center" alignItems="center">
              <p className="line-title">Work</p>
              <div className="line-arrow"></div>
            </Flex>
          </div>
        </div>

        <Container maxWidth="1024px" padding="3rem">
          <TitleContainer>
            <Title>
              Bonjour, je suis <strong>Robin Blanquart</strong>. Jeune
              développeur passionné par le développement web et l’Ui/Ux Design.
            </Title>
            <ButtonLink txt="En savoir plus sur moi" href="/me" />
          </TitleContainer>

          <CardContainer>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexFlow={true}
              margin="4rem 0 0 0"
            >
              <RenderItems filter="2022" />
              <div className="card-separation">
                <RenderItems filter="2021" />
              </div>
            </Flex>
          </CardContainer>

          <Flex justifyContent="center" alignItems="center" margin="2rem 0">
            <ButtonGithub
              txt="Plus de projets"
              href="https://github.com/R0BIN0"
            />
          </Flex>
        </Container>
      </LineContainer>

      {clickedProject && (
        <>
          <TopProject {...clickedProject} route={true} />
          <DarkBackground
            initial="hidden"
            animate="show"
            variants={darkBackground}
          ></DarkBackground>
          <LittleLoader
            initial="hidden"
            animate="show"
            exit="exit"
            variants={loader}
          >
            <Flex justifyContent="center" alignItems="center">
              <motion.div className="little-loader"></motion.div>
            </Flex>
          </LittleLoader>
        </>
      )}
    </>
  );
};

export default Home;
