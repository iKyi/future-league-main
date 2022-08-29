import { Box } from "@mui/material";
import HomeAboutUsBox from "components/Home/HomeAboutUsBox";
import HomeGamesPrizesBox from "components/Home/HomeGamesPrizesBox";
import HomeIntroBox from "components/Home/HomeIntroBox";
import HomeMeetCommunityBox from "components/Home/HomeMeetCommunityBox";
import usePageData from "hooks/usePageData";
// import { Container } from "@mui/material";
// import ContactBox from "components/Reusable/ContactBox";
// import usePageData from "hooks/usePageData";
// import ISectionHeaderStrapi from "utils/types/ISectionHeader";

export type HomePagePropsType = {};

const HomePage: React.FC<HomePagePropsType> = () => {
  const { pageData } = usePageData("landing-data");

  const {
    introBoxPretitle,
    introboxTitle,
    introboxSubtitle,
    aboutUsPretitle,
    aboutUsTitle,
    aboutUsSubtitle,
    gamesPrizesPretitle,
    gamesPrizesTitle,
    gamesPrizesSubtitle,
    meetCommunityPretitle,
    meetCommunityTitle,
    meetCommunitySubtitle,
    introBoxBackground,
    introBoxLeftButton,
    introBoxRightButton,
    whitepaperBoxButton,
    whitepaperBoxTitle,
    whitepapaerBoxText,
    whitepaperBoxImage,
    meetOurCommunityButton,
    meetCommunityImage,
    gamesImage,
    gamesPrizesImageTitle,
    gamesPrizesImageSubtitle,
  } = pageData ?? {};

  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        bgcolor: "common.black",
      }}
    >
      <HomeIntroBox
        sectionTitle={{
          pretitle: introBoxPretitle,
          subtitle: introboxSubtitle,
          title: introboxTitle,
        }}
        bgImage={introBoxBackground}
        introBoxRightButton={introBoxRightButton}
        introBoxLeftButton={introBoxLeftButton}
      />
      <HomeAboutUsBox
        sectionTitle={{
          pretitle: aboutUsPretitle,
          subtitle: aboutUsSubtitle,
          title: aboutUsTitle,
        }}
        whitepaperBoxButton={whitepaperBoxButton}
        whitepaperBoxTitle={whitepaperBoxTitle}
        whitepapaerBoxText={whitepapaerBoxText}
        whitepaperBoxImage={whitepaperBoxImage}
      />
      <HomeGamesPrizesBox
        sectionTitle={{
          pretitle: gamesPrizesPretitle,
          subtitle: gamesPrizesSubtitle,
          title: gamesPrizesTitle,
        }}
        gamesImage={gamesImage}
        gamesPrizesImageTitle={gamesPrizesImageTitle}
        gamesPrizesImageSubtitle={gamesPrizesImageSubtitle}
      />
      <HomeMeetCommunityBox
        sectionTitle={{
          pretitle: meetCommunityPretitle,
          subtitle: meetCommunitySubtitle,
          title: meetCommunityTitle,
        }}
        meetOurCommunityButton={meetOurCommunityButton}
        meetCommunityImage={meetCommunityImage}
      />
      {/* {contactBoxHeader && (
        <Container
          sx={{
            pt: [3, 3, 7],
          }}
        >
          <ContactBox header={contactBoxHeader as ISectionHeaderStrapi} />
        </Container>
      )} */}
    </Box>
  );
};

export default HomePage;
