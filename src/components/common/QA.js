import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const QA = ({ question, answer, ...rest }) => {
  return (
    <AccordionItem bg="brand.200" borderRadius="8px" {...rest}>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              color="brand.900"
              fontWeight="bold"
              fontSize={{ base: "18px", lg: "20px" }}
            >
              <Box as="span" flex="1" textAlign="left" p="10px">
                {question}
              </Box>
              {isExpanded ? (
                <MinusIcon color="white" fontSize="12px" boxSize="15px" />
              ) : (
                <AddIcon color="white" fontSize="12px" boxSize="15px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel color="brand.900" px="30px" pb="20px">
            {answer}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default QA;

QA.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
