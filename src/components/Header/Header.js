import {
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import PropTypes, { arrayOf } from "prop-types";

const Header = ({ logo, slogan, sectionNavList, cta }) => {
  return (
    <Flex
      as="header"
      id="header"
      align="center"
      bg="linear-gradient(90deg, #1A3847 59.94%, #008080 100%)"
      borderBottom="2px solid #008080"
      color="brand.200"
      height="120px"
      pl="10vw"
      pr="5vw"
      fontFamily="'Lato', sans-serif"
      fontWeight="bold"
      textTransform="uppercase"
    >
      <Image src={logo} alt="App Logo" maxW="10vw" />
      <Text display={{ base: "none", lg: "flex" }} ml="3vw" letterSpacing="3px">
        {slogan && slogan}
      </Text>
      <Spacer />
      <List display={{ base: "none", md: "flex" }} mr="8vw">
        {sectionNavList?.names?.map((name, i, names) => (
          <ListItem key={i}>
            <Link
              _hover={{ textDecoration: "none", color: "white" }}
              mr={name !== names[names.length - 1] ? "2vw" : "0"}
              onClick={() => {
                document
                  .getElementById(sectionNavList?.ids?.[i])
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {name}
            </Link>
          </ListItem>
        ))}
      </List>
      <Link
        href={cta?.ctaURL}
        _hover={{
          textDecoration: "none",
          color: "white",
        }}
        isExternal
      >
        {cta?.ctaText}
      </Link>
    </Flex>
  );
};

export default Header;

Header.propTypes = {
  logo: PropTypes.string,
  slogan: PropTypes.string,
  sectionNavList: PropTypes.shape({
    names: arrayOf(PropTypes.string.isRequired),
    ids: arrayOf(PropTypes.string.isRequired),
  }),
  cta: PropTypes.shape({
    ctaText: PropTypes.string.isRequired,
    ctaURL: PropTypes.string.isRequired,
  }),
};

Header.defaultProps = {
  logo: "carbon-footprint-landing-page/logo.png",
  slogan: "Embrace your eco impact",
  sectionNavList: {
    names: ["About", "How", "FAQ"],
    ids: ["about", "how", "faq"],
  },
  cta: {
    ctaText: "Get started",
    ctaURL: "#",
  },
};
