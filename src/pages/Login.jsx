import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { LoginUser } from "../apis/Internal";
import { setUser } from "../store/UserSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email Required !"),
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Only Alpha Numeric Characters are allowed!")
    .required("Password Required ! "),
});
const Login = () => {
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HanldeLoginSubmit = async (data) => {
    let response = await LoginUser(data);

    if (response.status === 200) {
      dispatch(setUser(response.data.user));
      navigate("/");
      toast.success("Logged in Successfully ! ");
    } else if (response.code === "ERR_BAD_REQUEST") {
      setError(response.response.data.message);
    }
  };
  return (
    <section className="flex min-h-[80vh] justify-center items-center">
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          HanldeLoginSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="p-3 rounded border shadow-md space-y-6 max-w-[400px] w-[96%] flex flex-col">
            {/* <section className=""> */}
            <h2 className="mb-5 text-center text-3xl font-[600]">Login Page</h2>
            <Field
              name="email"
              placeholder="Email"
              type="email"
              className="outline-none border p-2 rounded"
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 ">{errors.email}</p>
            ) : null}

            <Field
              name="password"
              className="outline-none rounded border p-2 "
              placeholder="Password"
            />
            {errors.lastName && touched.lastName ? (
              <p>{errors.lastName}</p>
            ) : null}
            <button
              type="submit"
              className="bg-blue-500 p-2 rounded text-white "
            >
              Submit
            </button>
            <p>
              New Here ?{" "}
              <Link to="/register">
                <span className="text-blue-500 cursor-pointer">
                  {" "}
                  Register Now
                </span>
              </Link>
            </p>
            {/* </section> */}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Login;
