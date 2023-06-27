import { Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";
import ArrowUp from "../../assets/icons/ArrowUp";
import PropTypes from "prop-types";

const Footer = ({ displayEmpoweredByPrifina, displayBackToTop }) => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      bg="linear-gradient(90deg, #008080 0%, #B2D2D8 100%);"
      borderTop="1px solid #008080"
      height="200px"
      px="10vw"
    >
      {displayEmpoweredByPrifina && (
        <>
          {!displayBackToTop && (
            <Spacer display={{ base: "none", md: "block" }} />
          )}
          <Image
            display={{ base: "none", md: "block" }}
            src="carbon-footprint-landing-page/img/empowered-by-prifina.png"
            alt="Empowered by prifina"
            height={{ base: "40px", lg: "60px" }}
          />{" "}
        </>
      )}
      {displayBackToTop && (
        <>
          <Spacer display={{ base: "none", md: "block" }} />
          <Link
            display="flex"
            _hover={{ textDecoration: "none" }}
            onClick={() => {
              document
                .getElementById("header")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ArrowUp />
            <Text
              color="brand.500"
              fontFamily="'Lato', sans-serif"
              fontSize={{ base: "15px", lg: "20px" }}
              fontWeight="bold"
              textTransform="uppercase"
              ml={2}
            >
              Back to top
            </Text>
          </Link>
        </>
      )}
    </Flex>
  );
};

export default Footer;

Footer.propTypes = {
  displayEmpoweredByPrifina: PropTypes.bool,
  displayBackToTop: PropTypes.bool,
};

Footer.defaultProps = {
  displayEmpoweredByPrifina: true,
  displayBackToTop: true,
};
