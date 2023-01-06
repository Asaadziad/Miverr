import { useFormik } from "formik";
import * as yup from "yup";
import { FunctionComponent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SignInProps {}

const SignIn: FunctionComponent<SignInProps> = () => {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Email is a required field!")
        .email("Invalid email"),
      password: yup.string().required(),
    }),
    onSubmit: async (event: any) => {
      let data = {
        email: formik.values.email,
        password: formik.values.password,
      };

      try {
        const url = "http://localhost:5000/api/users/login";
        await axios.post(url, data);
        console.log("Logged in");
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <>
      <section>
        <div className="container col-md-3 pt-5">
          <h2>Sign in</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter email"
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-danger">{formik.errors.email}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Password"
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-danger">{formik.errors.password}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary mt-3 w-100">
              Sign in
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
