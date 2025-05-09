import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";

const Login = () => {
  const postFormData = async (values) => {
    try {
      await axios.post("https://blog-hqx2.onrender.com/user/login", values);
      toast.success("Login Successfully");
    } catch (error) {
      toast.error("Login Unsuccessfully");
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required("Email name is required"),
        password: Yup.string()
          .min(6, "Atleast 6 charcters")
          .required("password is required"),
      })}
      onSubmit={(values) => {
        postFormData(values);
      }}
    >
      <Form
        className="flex flex-col gap-y-4 w-96 mt-30 mx-auto border-black p-6
       rounded-2xl shadow-lg shadow-pink-800/90 cursor-pointer  "
      >
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <Field
          name="email"
          type="email"
          placeholder="Enter your Email"
          className="border-black w-full border rounded-2xl px-2 py-1"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-600 text-sm"
        />

        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <Field
          name="password"
          type="text"
          placeholder="Enter the password"
          className="border-black w-full border rounded-2xl px-2 py-1"
        />
        <ErrorMessage
          name="password"
          component="div"
          className="text-red-600 text-sm"
        />
        <ToastContainer />
        <button
          type="submit"
          className="bg-blue-600 text-white py-1 rounded-4xl mx-auto 
          cursor-pointer h-12 w-40 hover:bg-red-600"
        >
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default Login;
