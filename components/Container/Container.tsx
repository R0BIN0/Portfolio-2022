// General
import { FC, ReactNode } from "react";

// Components
import Navbar from "../Navbar/Navbar";

// Types

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Container;
