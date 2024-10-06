import Footer from "./Footer";
import Header from "./Header";
const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col bg-main">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
