// General
import React from "react";
import { motion, Variants } from "framer-motion";

// Styles
import { PageTransition, Flex } from "../styles/Global/Global.styles";
import ImgLoader from "../components/ImgLoader/ImgLoader";
import Link from "next/link";

const me = () => {
  const ease = [0.7, 0, 0.15, 1];
  const transitionTime = 1;

  const transition: Variants = {
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
      transform: "translateY(120vh) skewY(5deg)",
      transition: {
        duration: transitionTime,
        ease: ease,
      },
    },
    exit: {
      transform: "translateY(0vh) skewY(0deg)",
      transition: {
        duration: 1,
        ease: ease,
      },
    },
  };
  return (
    <>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 2 } }}
      ></motion.div>

      <PageTransition
        initial="show"
        animate="hidden"
        exit="exit"
        variants={transition}
      >
        <Flex justifyContent="center" alignItems="center">
          <ImgLoader />
        </Flex>
      </PageTransition>

      <Link href="/">
        <a>GO TO HOME</a>
      </Link>
    </>
  );
};

export default me;
