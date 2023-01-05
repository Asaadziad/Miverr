import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="secTitle">Popular professional services</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
