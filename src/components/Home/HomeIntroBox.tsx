import ResponsiveSpace from "components/Reusable/ResponsiveSpace";
import SectionHeader from "components/Reusable/SectionHeader";
import { Box, Grid } from "@mui/material";
import { getStrapiMedia } from "lib/theme/media";
import IntroDataTable from "./HomeIntroBoxComponents/IntroDataTable";
import StrapiLinkButton from "components/Reusable/StrapiLinkButton";
import { useAppSelector } from "app/hooks";

export type HomeIntroBoxPropsType = {
  children?: any;
  sectionTitle: {
    title: string;
    pretitle: string;
    subtitle: string;
  };
  bgImage?: any;
  introBoxLeftButton?: Record<any, any>;
  introBoxRightButton?: Record<any, any>;
};

const HomeIntroBox: React.FC<HomeIntroBoxPropsType> = ({
  children,
  sectionTitle,
  bgImage,
  introBoxLeftButton,
  introBoxRightButton,
}) => {
  const pagesData =
    useAppSelector((state) => state.global.publicSiteData) ?? {};
  const gamesUrl = pagesData?.gamesMenuLink?.url ?? undefined;
  const image = getStrapiMedia(bgImage);

  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        background: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <ResponsiveSpace />
      <SectionHeader
        preTitle={sectionTitle?.pretitle}
        description={sectionTitle?.subtitle}
        title={sectionTitle.title}
        disableHeaderBars={true}
      />
      <IntroDataTable />
      <Box
        sx={{
          py: [3, 3, 4],
        }}
      >
        <Grid container spacing={2} justifyContent={"center"}>
          {introBoxLeftButton && (
            <Grid item>
              <StrapiLinkButton {...introBoxLeftButton} />
            </Grid>
          )}
          {introBoxRightButton && (
            <Grid item>
              <StrapiLinkButton {...introBoxRightButton} url={gamesUrl} />
            </Grid>
          )}
        </Grid>
      </Box>
      <ResponsiveSpace />
    </Box>
  );
};

export default HomeIntroBox;
