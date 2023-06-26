import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
