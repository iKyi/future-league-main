import SectionHeader from "components/Reusable/SectionHeader";
import { getStrapiMedia } from "lib/theme/media";
import { Box } from "@mui/material";
import { FONTS } from "lib/theme";

export type HomeGamesPrizesBoxPropsType = {
  children?: any;
  sectionTitle: {
    title: string;
    pretitle: string;
    subtitle: string;
  };
  gamesImage?: Record<string, string>;
  gamesPrizesImageTitle?: string;
  gamesPrizesImageSubtitle?: string;
};

const HomeGamesPrizesBox: React.FC<HomeGamesPrizesBoxPropsType> = ({
  children,
  sectionTitle,
  gamesImage,
  gamesPrizesImageTitle,
  gamesPrizesImageSubtitle,
}) => {
  const imageUrl = getStrapiMedia(gamesImage);
  // *************** RENDER *************** //
  return (
    <>
      <SectionHeader
        preTitle={sectionTitle?.pretitle}
        description={sectionTitle?.subtitle}
        title={sectionTitle.title}
      />
      {gamesPrizesImageTitle && (
        <Box
          sx={{
            fontFamily: FONTS.MOKOTOONE,
            fontSize: [18, 18, 22],
            textAlign: "center",
            mb: 2,
          }}
        >
          {gamesPrizesImageTitle}
        </Box>
      )}
      {imageUrl && (
        <Box>
          <img src={imageUrl} alt="games preview" className="respImg" />
        </Box>
      )}
      {gamesPrizesImageSubtitle && (
        <Box
          sx={{
            fontSize: [14, 14, 16],
            textAlign: "center",
            color: "common.lightGray",
            mt: 2,
          }}
        >
          {gamesPrizesImageSubtitle}
        </Box>
      )}
    </>
  );
};

export default HomeGamesPrizesBox;
