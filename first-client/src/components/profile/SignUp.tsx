import axios from "axios";
import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./signup.css";
interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleRegister = async (event: any) => {
    event?.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      await axios.post(url, data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <section>
        <div className="container signContainer p-5">
          <div className="signup">
            <h1 className="secTitle">Signup</h1>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                name="email"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                onChange={(e) => setData({ ...data, username: e.target.value })}
                name="username"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                onChange={(e) => setData({ ...data, password: e.target.value })}
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
