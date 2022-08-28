import SectionHeader from "components/Reusable/SectionHeader";

export type HomeMeetCommunityBoxPropsType = {
  children?: any;
  sectionTitle: {
    title: string;
    pretitle: string;
    subtitle: string;
  };
};

const HomeMeetCommunityBox: React.FC<HomeMeetCommunityBoxPropsType> = ({
  children,
  sectionTitle,
}) => {
  // *************** RENDER *************** //
  return (
    <>
      <SectionHeader
        preTitle={sectionTitle?.pretitle}
        description={sectionTitle?.subtitle}
        title={sectionTitle.title}
        disableHeaderBars={true}
      />
    </>
  );
};

export default HomeMeetCommunityBox;
