import { SimpleGrid } from "@chakra-ui/react";
import About from "./components/About/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FAQ from "./components/FAQ/FAQ";

const Main = () => {
  return (
    <SimpleGrid
      as="main"
      columns={1}
      minHeight="calc(100vh - 320px)"
      spacing={"140px"}
      px="10vw"
      my="50px"
    >
      <About />
      <HowItWorks />
      <FAQ />
    </SimpleGrid>
  );
};

export default Main;
