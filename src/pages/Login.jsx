import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email Required !"),
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Only Alpha Numeric Characters are allowed!")
    .required("Password Required ! "),
});
const Login = () => {
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
          console.log(values);
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
              <span className="text-blue-500 cursor-pointer">Register Now</span>
            </p>
            {/* </section> */}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Login;
