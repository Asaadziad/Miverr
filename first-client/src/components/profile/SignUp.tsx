import axios from "axios";
import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import "./signup.css";
interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: { email: "", username: "", password: "" },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Email is a required field!")
        .email("Invalid email"),
      username: yup.string().required(),
      password: yup
        .string()
        .required()
        .min(8, "Too short! Should be atleast 8 characters"),
    }),
    onSubmit: async (event: any) => {
      let data = {
        email: formik.values.email,
        username: formik.values.username,
        password: formik.values.password,
      };
      console.log(data);
      try {
        const url = "http://localhost:5000/api/users/register";
        await axios.post(url, data);
        navigate("/signin");
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <>
      <section>
        <div className="container col-md-3 pt-5">
          <h2>Sign up</h2>
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
              <label htmlFor="username">Username</label>
              <input
                type="name"
                className="form-control"
                id="username"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter username"
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-danger">{formik.errors.username}</p>
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
              Sign up
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
