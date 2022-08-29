import SectionHeader from "components/Reusable/SectionHeader";
import StrapiLinkButton from "components/Reusable/StrapiLinkButton";
import { Box } from "@mui/material";
import ResponsiveSpace from "components/Reusable/ResponsiveSpace";
import { getStrapiMedia } from "lib/theme/media";

export type HomeMeetCommunityBoxPropsType = {
  children?: any;
  sectionTitle: {
    title: string;
    pretitle: string;
    subtitle: string;
  };
  meetOurCommunityButton?: Record<any, any>;
  meetCommunityImage?: Record<any, any>;
};

const HomeMeetCommunityBox: React.FC<HomeMeetCommunityBoxPropsType> = ({
  children,
  sectionTitle,
  meetOurCommunityButton,
  meetCommunityImage,
}) => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        background: `url('${getStrapiMedia(meetCommunityImage)}')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ResponsiveSpace />
      <SectionHeader
        preTitle={sectionTitle?.pretitle}
        description={sectionTitle?.subtitle}
        title={sectionTitle.title}
        disableHeaderBars={true}
      />
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        {meetOurCommunityButton && (
          <StrapiLinkButton {...meetOurCommunityButton} />
        )}
      </Box>
      <ResponsiveSpace />
    </Box>
  );
};

export default HomeMeetCommunityBox;
