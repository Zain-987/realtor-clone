import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { registerUser } from "../apis/Internal";
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Username must be Alpha Numeric !")
    .required("Username is Required !"),
  email: Yup.string().email("Invalid email").required("Email is Required !"),
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Only Alpha Numeric Characters are allowed!")
    .required("Password Required ! "),
});
const Register = () => {
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const HanldeRegisterSubmit = async (data) => {
    let response = await registerUser(data);

    if (response.status === 201) {
      navigate("/login");
      toast.success("Registered Successfully ! ");
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
          username: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          HanldeRegisterSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="p-3 border shadow-md  max-w-[400px] w-[96%] flex flex-col rounded">
            <h2 className="text-3xl font-[600] text-center mb-5">
              Register Page
            </h2>
            <Field
              name="username"
              placeholder="Username"
              className="my-2 outline-none border p-2 rounded"
            />
            {errors.username && touched.username ? (
              <p className="text-red-500 ">{errors.username}</p>
            ) : null}
            <Field
              name="email"
              placeholder="Email"
              type="email"
              className="my-2 outline-none border  p-2 rounded"
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 ">{errors.email}</p>
            ) : null}

            <Field
              name="password"
              className="my-2  outline-none rounded border p-2 "
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <p className="text-red-500 mb-3">{errors.password}</p>
            ) : null}
            <button
              type="submit"
              className="bg-blue-500 p-2 rounded text-white my-5"
            >
              Submit
            </button>
            <p>
              Already have an Account ?
              <Link to="/login">
                <span className="text-blue-500 cursor-pointer"> Login Now</span>
              </Link>
            </p>
            <p className="text-red-500">{Error}</p>
            {/* </section> */}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Register;
