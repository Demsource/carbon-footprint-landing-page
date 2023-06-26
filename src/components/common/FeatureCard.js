import { Box, Flex, Image } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import SectionText from "./SectionText";
import PropTypes from "prop-types";

const FeatureCard = ({
  headerContent,
  textContent,
  imageFirst,
  imageURL,
  imageDesc,
  imageBorder,
  ...rest
}) => {
  return (
    <Flex
      justify="space-between"
      align={{ base: "center", lg: "flex-start" }}
      flexDir={{ base: "column", lg: "row" }}
      {...rest}
    >
      {imageFirst && (
        <Image
          borderRadius={imageBorder}
          src={imageURL}
          alt={imageDesc}
          width="40%"
          mb={{ base: "40px", lg: "0" }}
        />
      )}
      {!imageFirst && (
        <Image
          borderRadius={imageBorder}
          display={{ base: "block", lg: "none" }}
          src={imageURL}
          alt={imageDesc}
          width="40%"
          mb="40px"
        />
      )}
      <Box width="55%">
        <SectionHeading
          content={headerContent}
          fontSize={{ base: "25px", lg: "28" }}
          mb="40px"
          textAlign={{ base: "center", lg: "left" }}
        />
        <SectionText content={textContent} fontSize={{ base: 18, lg: 20 }} />
      </Box>
      {!imageFirst && (
        <Image
          borderRadius={imageBorder}
          display={{ base: "none", lg: "block" }}
          src={imageURL}
          alt={imageDesc}
          width="40%"
        />
      )}
    </Flex>
  );
};

export default FeatureCard;

FeatureCard.propTypes = {
  headerContent: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  imageFirst: PropTypes.bool,
  imageURL: PropTypes.string.isRequired,
  imageDesc: PropTypes.string.isRequired,
  imageBorder: PropTypes.shape({
    base: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
  }),
};

FeatureCard.defaultProps = {
  imageBorder: {
    base: "40px 0",
    md: "60px 0",
    lg: "70px 0",
    xl: "100px 0",
  },
};
