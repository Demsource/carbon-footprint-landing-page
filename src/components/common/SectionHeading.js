import { Heading } from "@chakra-ui/react";

const SectionHeading = ({ content, ...rest }) => {
  return (
    <Heading
      color="brand.500"
      fontFamily="'Outfit', sans-serif"
      fontWeight={"bold"}
      {...rest}
    >
      {content}
    </Heading>
  );
};

export default SectionHeading;
