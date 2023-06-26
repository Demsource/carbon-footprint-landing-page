import { Box } from "@chakra-ui/react";
import DescWithImage from "../common/DescWithImage";
import DescWithCTA from "../common/DescWithCTA";

const About = () => {
  return (
    <Box as="section" id="about">
      <DescWithImage />
      <DescWithCTA mt="60px" />
    </Box>
  );
};

export default About;
