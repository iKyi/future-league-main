import SectionHeader from "components/Reusable/SectionHeader";

export type HomeGamesPrizesBoxPropsType = {
  children?: any;
  sectionTitle: {
    title: string;
    pretitle: string;
    subtitle: string;
  };
};

const HomeGamesPrizesBox: React.FC<HomeGamesPrizesBoxPropsType> = ({
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
      />
    </>
  );
};

export default HomeGamesPrizesBox;
