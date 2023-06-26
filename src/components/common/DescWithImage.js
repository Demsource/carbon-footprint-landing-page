import { Box, Flex, Image } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import SectionText from "./SectionText";
import PropTypes from "prop-types";

const DescWithImage = ({
  headerText,
  subHeaderText,
  desc,
  imageLeft,
  imageURL,
  imageDesc,
  ...rest
}) => {
  return (
    <Flex align="center" justify="space-between" {...rest}>
      {imageLeft && (
        <Image
          src="/img/carbon-footprint.png"
          alt="Footprint"
          mx={{ lg: "5%" }}
          maxW="30%"
        />
      )}
      <Box w="65%" mr="5%">
        <SectionHeading
          content={headerText}
          fontSize={{ base: 50, lg: 60 }}
          textTransform="capitalize"
        />
        <SectionHeading
          fontSize={35}
          textTransform="capitalize"
          content={subHeaderText}
        />
        <SectionText content={desc} />
      </Box>
      {!imageLeft && (
        <Image src={imageURL} alt={imageDesc} mr={{ lg: "5%" }} maxW="30%" />
      )}
    </Flex>
  );
};

export default DescWithImage;

DescWithImage.propTypes = {
  headerText: PropTypes.string.isRequired,
  subHeaderText: PropTypes.string,
  desc: PropTypes.string.isRequired,
  imageLeft: PropTypes.bool,
  imageURL: PropTypes.string.isRequired,
  imageDesc: PropTypes.string.isRequired,
};

DescWithImage.defaultProps = {
  headerText: "Welcome to Carbon Footprint!",
  subHeaderText:
    "Here we aim to help you measure your carbon footprint and take steps to reduce your environmental impact",
  desc: "The increasing global population, rising consumerism, and growing demand for energy have led to significant increases in greenhouse gas emissions over the last century. These emissions are responsible for climate change, which is causing rising temperatures, more frequent and severe weather events, and other environmental challenges that threaten the health and well-being of people and ecosystems around the world.  ",
  imageURL: "/img/carbon-footprint.png",
  imageDesc: "Footprint",
};
