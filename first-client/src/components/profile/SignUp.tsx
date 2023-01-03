import Axios from "axios";
import { FunctionComponent, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./signup.css";
interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const handleRegister = (event: any) => {
    event?.preventDefault();
    Axios.post("http://localhost:5000/signup", {
      username: usernameReg,
      password: passwordReg,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <section>
        <div className="container signContainer p-5">
          <div className="signup">
            <h1 className="secTitle">Signup</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                onChange={(e) => setUsernameReg(e.target.value)}
                name="username"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                onChange={(e) => setPasswordReg(e.target.value)}
                name="password"
                type="password"
              />
            </div>

            <button
              onClick={(event: any) => handleRegister(event)}
              className="btn btn-primary mt-2"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
