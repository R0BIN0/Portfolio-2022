// General
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

// Styles
import GlobalStyle from "../styles/Global/Reset.style";

// Components
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <>
      <GlobalStyle />
      {pathname !== "/[project]" && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
