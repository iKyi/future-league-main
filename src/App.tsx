import { Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import SnackbarProvider from "providers/SnackbarProvider";
import BlockingSnabarsProvider from "providers/BlockingSnabarsProvider";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";
import { useContext, useEffect } from "react";
import { StrapiContext } from "providers/StrapiPublicProvider";
import SeoComp from "components/Reusable/Seo";

const App: React.FC = () => {
  const { seo } = useContext(StrapiContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <PageWithNavWrapper>
        <SeoComp seo={seo} />
        <Routes>
          <Route element={<HomePage />} index />
        </Routes>
      </PageWithNavWrapper>

      <SnackbarProvider />
      <BlockingSnabarsProvider />
    </>
  );
};

export default App;
