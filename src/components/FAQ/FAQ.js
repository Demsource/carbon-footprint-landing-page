import { Accordion, Box } from "@chakra-ui/react";
import SectionHeading from "../common/SectionHeading";
import QA from "../common/QA";
import PropTypes from "prop-types";

const FAQ = ({ headerText }) => {
  return (
    <Box as="section" id="faq" px="10vw">
      <SectionHeading
        content={headerText}
        fontSize="35px"
        textAlign="center"
        mb="70px"
      />
      <Accordion
        allowToggle
        fontFamily="'Roboto', sans-serif"
        fontSize={{ base: "18px", lg: "20px" }}
        lineHeight="28px"
      >
        <QA
          question="How to benefit the most out of the Carbon Footprint app?"
          answer="Filling onboarding questionnaire with high accuracy upon getting started and connecting more data sources from your private data cloud will enhance precision of your carbon footprint."
          mb="20px"
        />
        <QA
          question="Is it mandatory to display my results in the dashboard?"
          answer="You can opt out from contest participation at any time from settings. You will still be able to use other features of the app."
          mb="20px"
        />
        <QA
          question="Can I resubmit survey?"
          answer="If your answers has changed, is reflected in your private data cloud and you have connected relevant data sources, Carbon Footprint app will update it for you. Otherwise contact our team."
        />
      </Accordion>
    </Box>
  );
};

export default FAQ;

FAQ.propTypes = { headerText: PropTypes.string.isRequired };

FAQ.defaultProps = { headerText: "Frequently asked questions" };
