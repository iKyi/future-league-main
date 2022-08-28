import ResponsiveSpace from "components/Reusable/ResponsiveSpace";
import SectionHeader from "components/Reusable/SectionHeader";
import { Box, Grid, Typography } from "@mui/material";
import { getStrapiMedia } from "lib/theme/media";
import MarkdownParser from "components/Reusable/MarkdownParser";
import { FONTS } from "lib/theme";
import { centerFlex } from "lib/sxUtils";
import StrapiLinkButton from "components/Reusable/StrapiLinkButton";

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
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        px: [2, 2, 4],
      }}
    >
      <SectionHeader
        preTitle={sectionTitle?.pretitle}
        description={sectionTitle?.subtitle}
        title={sectionTitle.title}
      />
      <Box
        sx={{
          p: [2, 2, 4],
        }}
      >
        <Grid
          container
          spacing={[2, 2, 4]}
          justifyContent="center"
          alignItems="center"
        >
          {imageUrl && (
            <Grid item xs={12} md={6} sx={{ ...centerFlex }}>
              <img src={imageUrl} alt="whitepaper box" />
            </Grid>
          )}
          <Grid item xs={12} md={6}>
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
          </Grid>
        </Grid>
      </Box>
      <ResponsiveSpace />
    </Box>
  );
};

export default HomeAboutUsBox;
