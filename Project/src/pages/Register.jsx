// import { ErrorMessage, Field, Form, Formik } from "formik";
// import React from "react";
// import * as Yup from "yup";

// const Register = () => {
//   const fieldHandling = [
//     {
//       name: "name",
//       type: "text",
//       placeholder: "enter the username",
//       label: "Username",

//     },
//     {
//       name: "email",
//       type: "email",
//       placeholder: "entert the email",
//       label: "Email",
//     },
//     {
//       name: "password",
//       type: "password",
//       placeholder: "enter the password",
//       label: "Password",
//     },
//   ];

//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         email: "",
//         password: "",
//       }}
//       validationSchema={Yup.object({
//         name: Yup.string()
//           .min(3, "minimum 3 character")
//           .required("Username is required"),
//         email: Yup.string().email().required("Email is reqired"),
//         password: Yup.string()
//           .min(8, "minimum character")
//           .max(15, "maximum character")
//           .required("password is required"),
//       })}
//       onsubmit={(values) => {}}
//     >
//       <Form>
//         {fieldHandling.map((value, index) => {
//           return (
//             <div key={index}>
//               <label htmlFor="name">{value.label}</label>
//               <Field name={value.name} type={value.type} placeholder={value.placeholder} />
//               <ErrorMessage name="name" />
//             </div>
//           );
//         })}
//       </Form>
//     </Formik>
//   );
// };

// export default Register;

import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const postFormData = async (values) => {
    try {
      await axios.post("https://blog-hqx2.onrender.com/user/register", values);
      toast.success("User Registered Successfully");
    } catch (error) {
      toast.error("User Register Unsuccessfully");
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Minimum 3 charcters")
          .required("Username is required"),
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
        className="flex flex-col gap-y-4 w-96 mt-25 mx-auto border-black p-6
       rounded-2xl shadow-lg shadow-blue-600/60  cursor-pointer  "
      >
        <label htmlFor="name" className="font-bold">
          Username
        </label>
        <Field
          name="name"
          type="text"
          placeholder="Enter your username"
          className="border-black w-full border rounded-2xl px-2 py-1"
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-red-600 text-sm"
        />

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
          className="bg-blue-500 text-white py-2 rounded-4xl mx-auto 
          hover:bg-blue h-12 w-50 hover:bg-red-600"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Register;
