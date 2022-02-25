import { GlobalStyle } from "../styles/globals";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default MyApp;
