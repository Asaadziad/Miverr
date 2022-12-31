import { FunctionComponent } from "react";
import Navbar from "../navbar/Navbar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
