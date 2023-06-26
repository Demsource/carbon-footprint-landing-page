import { Accordion } from "@chakra-ui/react";
import QA from "./QA";

export default {
  component: QA,
  tags: ["autodocs"],
};

export const Benefit = {
  args: {
    question: "How to benefit the most out of the Carbon Footprint app?",
    answer:
      "Filling onboarding questionnaire with high accuracy upon getting started and connecting more data sources from your private data cloud will enhance precision of your carbon footprint.",
  },
  render: (args) => (
    <Accordion
      allowToggle
      fontFamily="'Roboto', sans-serif"
      fontSize={{ base: "18px", lg: "20px" }}
      lineHeight="28px"
    >
      <QA question={args.question} answer={args.answer} />
    </Accordion>
  ),
};

export const Results = {
  args: {
    question: "Is it mandatory to display my results in the dashboard?",
    answer:
      "You can opt out from contest participation at any time from settings. You will still be able to use other features of the app.",
  },
  render: (args) => (
    <Accordion
      allowToggle
      fontFamily="'Roboto', sans-serif"
      fontSize={{ base: "18px", lg: "20px" }}
      lineHeight="28px"
    >
      <QA question={args.question} answer={args.answer} />
    </Accordion>
  ),
};

export const Survey = {
  args: {
    question: "Can I resubmit survey?",
    answer:
      "If your answers has changed, is reflected in your private data cloud and you have connected relevant data sources, Carbon Footprint app will update it for you. Otherwise contact our team.",
  },
  render: (args) => (
    <Accordion
      allowToggle
      fontFamily="'Roboto', sans-serif"
      fontSize={{ base: "18px", lg: "20px" }}
      lineHeight="28px"
    >
      <QA question={args.question} answer={args.answer} />
    </Accordion>
  ),
};
