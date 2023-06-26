import { Text } from "@chakra-ui/react";

const SectionText = ({ content, ...rest }) => {
  return (
    <Text
      mt={4}
      fontFamily="'Roboto', sans-serif"
      fontSize={{ base: 18, lg: 24 }}
      lineHeight="28px"
      {...rest}
    >
      {content}
    </Text>
  );
};

export default SectionText;
