import { Box, Button, Flex } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import SectionText from "./SectionText";
import PropTypes from "prop-types";

const DescWithCTA = ({ headerText, desc, cta, ...rest }) => {
  return (
    <Box {...rest}>
      <SectionHeading
        content={headerText}
        fontSize={40}
        textAlign={{ base: "center", lg: "left" }}
        textTransform="capitalize"
      />
      <Flex
        justify="space-between"
        align={{ base: "center" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <SectionText content={desc} w="65%" />
        <Flex align="center" justify="center" w="35%" ml="5%">
          <Button
            bg="brand.500"
            color="white"
            borderRadius={50}
            fontFamily="'Outfit', sans-serif"
            fontWeight="600"
            fontSize={{ base: "12px", lg: "20px" }}
            textTransform="uppercase"
            p={{ base: "25px 25px", lg: "30px 60px" }}
            mt={{ base: "40px", lg: "0" }}
            _hover={{ bg: "brand.900" }}
            onClick={() => {
              window.open(cta.ctaURL);
            }}
          >
            {cta.ctaText}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DescWithCTA;

DescWithCTA.propTypes = {
  headerText: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    ctaText: PropTypes.string.isRequired,
    ctaURL: PropTypes.string.isRequired,
  }).isRequired,
};

DescWithCTA.defaultProps = {
  headerText: "Our Mission",
  desc: "Carbon Footprint app is to empower users to measure and reduce their environmental impact. By providing an easy-to-use interface and personalized recommendations, the app aims to educate users about their carbon footprint and encourage them to take positive action towards a more sustainable lifestyle.  ",
  cta: {
    ctaText: "Start Reducing Today",
    ctaURL: "#",
  },
};
