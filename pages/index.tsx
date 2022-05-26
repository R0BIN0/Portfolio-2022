// General
import { FC, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

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
import ButtonGithub from "../components/ButtonGithub/ButtonGithub";
import { MemoizedCardList } from "../components/CardList/CardList";

// Data
import TopProject from "../components/TopProject/TopProject";

// Type
import { TopProjectProps } from "../config/types";
import ImgLoader from "../components/ImgLoader/ImgLoader";

const Home: FC = () => {
  const [clickedProject, setClickedProject] = useState<TopProjectProps>();

  // ========= animation and page transition ========= //

  const [goToMe, setGoToMe] = useState<boolean>(false);
  const { pathname } = useRouter();
  const ease = [0.7, 0, 0.15, 1];
  const transitionTime = 1;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "all";

    setTimeout(() => {
      document.body.style.overflow = "initial";
    }, transitionTime * 1000);
  }, []);

  useEffect(() => {
    if (pathname === "/me") document.body.style.overflow = "hidden";
  }, [pathname]);

  const switchTransition = (): void => {
    setGoToMe(true);
  };

  const projectTransition: Variants = {
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

  const goToMeTransition: Variants = {
    hidden: {
      position: "fixed",
      top: 0,
      left: 0,
      transform: "translateY(-120vh) skewY(-5deg)",
    },
    exit: {
      transform: "translateY(0vh) skewY(0deg)",
      transition: {
        duration: 1,
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

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Robin Blanquart | Accueil</title>
      </Head>

      {/* =========== RELATIVE TO PAGE TRANSITION =========== */}

      {goToMe && (
        <>
          <motion.div
            exit={{ opacity: 0, transition: { duration: 2 } }}
          ></motion.div>

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

      <PageTransition
        initial="show"
        animate="hidden"
        exit="exit"
        variants={goToMe ? goToMeTransition : projectTransition}
      >
        <Flex justifyContent="center" alignItems="center">
          <ImgLoader />
        </Flex>
      </PageTransition>

      {/* =================================================== */}

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

            <ButtonLink
              txt="En savoir plus sur moi"
              href="/me"
              action={switchTransition}
            />
          </TitleContainer>

          <CardContainer>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexFlow={true}
              margin="4rem 0 0 0"
            >
              <MemoizedCardList
                filter="2022"
                setClickedProject={setClickedProject}
              />
              <div className="card-separation">
                <MemoizedCardList
                  filter="2021"
                  setClickedProject={setClickedProject}
                />
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
