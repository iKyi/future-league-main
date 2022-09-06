import ResponsiveSpace from "components/Reusable/ResponsiveSpace";
import SectionHeader from "components/Reusable/SectionHeader";
import { Box, Grid, Typography, Container } from "@mui/material";
import { getStrapiMedia } from "lib/theme/media";
import MarkdownParser from "components/Reusable/MarkdownParser";
import { FONTS } from "lib/theme";
import { centerFlex } from "lib/sxUtils";
import StrapiLinkButton from "components/Reusable/StrapiLinkButton";
import usePageData from "hooks/usePageData";
import aboutUsDetailsBg from "assets/images/backgrounds/aboutUsDetailsBg.png";
import aboutUsWhitepaperBg from "assets/images/backgrounds/aboutUsWhitepaperBg.png";
import HomeNFTTabs from "./HomeIntroBoxComponents/HomeNFTTabs";
export type HomeAboutUsBoxPropsType = {
  children?: any;
  sectionTitle: {
    title: string;
    pretitle: string;
    subtitle: string;
  };
  whitepaperBoxButton?: Record<string, string>;
  whitepaperBoxTitle?: string;
  whitepapaerBoxText?: string;
  whitepaperBoxImage?: any;
};

const HomeAboutUsBox: React.FC<HomeAboutUsBoxPropsType> = ({
  children,
  sectionTitle,
  whitepaperBoxButton,
  whitepaperBoxTitle,
  whitepapaerBoxText,
  whitepaperBoxImage,
}) => {
  const imageUrl = getStrapiMedia(whitepaperBoxImage);
  const { pageData: aboutUsInfos } = usePageData("about-us-infos", true);
  // *************** RENDER *************** //
  return (
    <Box>
      <ResponsiveSpace />
      <SectionHeader
        preTitle={sectionTitle?.pretitle}
        description={sectionTitle?.subtitle}
        title={sectionTitle.title}
      />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          overflow: "hidden",
          background: `url('${aboutUsWhitepaperBg}')`,
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "500px",
        }}
      >
        <Box
          sx={{
            width: 1480,
            margin: "0 auto",
            maxWidth: "100%",
          }}
        >
          <Grid
            container
            spacing={[2, 2, 4]}
            justifyContent="center"
            alignItems="center"
            sx={{
              my: [2, 2, 4],
            }}
          >
            {imageUrl && (
              <Grid item xs={12} md={6} sx={{ ...centerFlex }}>
                <img
                  src={imageUrl}
                  alt="whitepaper box"
                  className="respImg"
                  style={{ width: 500 }}
                />
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  px: [2, 2, 4],
                }}
              >
                {whitepaperBoxTitle && (
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: FONTS.MOKOTO,
                      fontSize: [18, 18, 24],
                    }}
                  >
                    <MarkdownParser>{whitepaperBoxTitle}</MarkdownParser>
                  </Typography>
                )}
                {whitepapaerBoxText && (
                  <Box
                    sx={{
                      my: [3, 3, 6],
                      color: "common.lightGray",
                      fontWeight: 300,
                    }}
                  >
                    <MarkdownParser>{whitepapaerBoxText}</MarkdownParser>
                  </Box>
                )}
                {whitepaperBoxButton && (
                  <StrapiLinkButton {...whitepaperBoxButton} />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          overflow: "hidden",
          background: `url('${aboutUsDetailsBg}')`,
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "500px",
        }}
      >
        <Box
          sx={{
            width: 1480,
            margin: "0 auto",
            maxWidth: "100%",
          }}
        >
          <Grid
            sx={{
              my: [2, 2, 4],
            }}
            container
            spacing={[2, 2, 4]}
            justifyContent="center"
            alignItems="center"
          >
            {aboutUsInfos && (
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    px: [2, 2, 6],
                  }}
                >
                  {aboutUsInfos.map((item: any) => {
                    const { text, title } = item?.attributes ?? {};
                    return (
                      <Box
                        key={item?.id}
                        sx={{
                          mb: 2,
                          pb: 2,
                          "&:not(last-of-type)": {
                            position: "relative",
                            "&:after": {
                              content: "''",
                              position: "absolute",
                              bottom: 0,
                              width: "100%",
                              background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 110%)`,
                              height: "1px",
                              opacity: 0.33,
                            },
                          },
                        }}
                      >
                        {title && (
                          <Typography
                            sx={{
                              fontFamily: FONTS.MOKOTOONE,
                              mb: 1,
                              fontWeight: 300,
                              fontSize: 18,
                            }}
                          >
                            {title}
                          </Typography>
                        )}
                        {text && (
                          <Box
                            sx={{
                              color: "common.lightGray",
                            }}
                          >
                            <MarkdownParser>{text}</MarkdownParser>
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <HomeNFTTabs />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ResponsiveSpace />
    </Box>
  );
};

export default HomeAboutUsBox;
