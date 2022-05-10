import GlobalStyle from "../styles/Global/Reset.style";
import type { AppProps } from "next/app";
import Container from "../components/Container/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
