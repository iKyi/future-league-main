import { Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import SnackbarProvider from "providers/SnackbarProvider";
import BlockingSnabarsProvider from "providers/BlockingSnabarsProvider";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";
import { useContext, useEffect } from "react";
import { StrapiContext } from "providers/StrapiPublicProvider";
import SeoComp from "components/Reusable/Seo";
import { useWallet } from "@solana/wallet-adapter-react";
import FourOhFourComp from "components/FourOhFour/FourOhFourComp";

const App: React.FC = () => {
  const { publicKey } = useWallet();
  const { seo } = useContext(StrapiContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    console.log(publicKey?.toString());
  }, [publicKey]);

  return (
    <>
      <PageWithNavWrapper>
        <SeoComp seo={seo} />
        <Routes>
          <Route element={<HomePage />} index />
          <Route path="*" element={<FourOhFourComp />} />
        </Routes>
      </PageWithNavWrapper>

      <SnackbarProvider />
      <BlockingSnabarsProvider />
    </>
  );
};

export default App;
