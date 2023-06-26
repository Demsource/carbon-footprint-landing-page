import { Box } from "@chakra-ui/react";
import SectionHeading from "../common/SectionHeading";
import FeatureCard from "../common/FeatureCard";
import PropTypes from "prop-types";

const HowItWorks = ({ sectionHeading }) => {
  return (
    <Box as="section" id="how">
      <SectionHeading
        content={sectionHeading}
        fontSize="35px"
        textAlign="center"
        mb="70px"
      />
      <FeatureCard
        headerContent="Calculating your carbon footprint"
        textContent="Our app offers real-time tracking of your carbon emissions. As you make changes to your lifestyle, such as using public transportation, switching to renewable energy sources, or adopting eco-friendly habits, the app dynamically updates your carbon footprint."
        imageURL="/img/calculating-cf.jpg"
        imageDesc="Calculating carbon footprint"
        mb="85px"
      />
      <FeatureCard
        headerContent="Leader board"
        textContent="The Leaderboard is not just about personal progress—it's about friendly competition too! Challenge yourself by competing with friends, family, or other app users to see who can achieve the most significant reduction in their carbon footprint. By comparing your progress with others, you can spur each other on, exchange tips and ideas, and create a positive atmosphere of shared environmental responsibility."
        imageFirst={true}
        imageURL="/img/leader-board.jpg"
        imageDesc="Leader board"
        mb="85px"
      />
      <FeatureCard
        headerContent="Suggest solutions"
        textContent="Carbon Footprint app is all about to inspire you to offset carbon footprint with general globally recognized solutions as well as personalized insights based on your daily activities. Become aware which of your actions might contribute to environmental well-being and sustainable future. Make a difference by integrating eco-friendly behaviors into your habitual life."
        imageURL="/img/suggest-solutions.jpg"
        imageDesc="Suggest solutions"
      />
    </Box>
  );
};

export default HowItWorks;

HowItWorks.propTypes = {
  sectionHeading: PropTypes.string.isRequired,
};

HowItWorks.defaultProps = {
  sectionHeading: "What we will help you with",
};
