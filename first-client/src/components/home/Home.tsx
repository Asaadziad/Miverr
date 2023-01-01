import { FunctionComponent } from "react";
import Navbar from "../navbar/Navbar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">test</div>
    </>
  );
};

export default Home;
