import { FunctionComponent } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <h2 className="secTitle">Popular professional services</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
