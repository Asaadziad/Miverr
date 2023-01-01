import { FunctionComponent } from "react";
import Navbar from "../navbar/Navbar";

interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <form action="" method="POST">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input className="form-control" name="username" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="form-control" name="password" type="password" />
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
