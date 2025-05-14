// import React from "react";

// const Profile = () => {
//   const user = {
//     name: "Bimla Balal",
//     email: "balalmeera17@gmail.com",

//     blogs: ["Laptop", "Flower", "CuteMonkey", "sssssss", "Temple"],
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-3xl font-semibold text-center mb-6">
//           User Profile
//         </h2>

//         <div className="flex items-center justify-center mb-4">
//           <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
//             <span className="text-xs text-center text-red-600">
//               You are using an outdated API endpoint
//             </span>
//           </div>
//         </div>

//         <div className="text-center mb-4">
//           <h3 className="text-xl font-medium">{user.name}</h3>
//           <p className="text-gray-600">{user.email}</p>
//         </div>

//         <div className="text-center mb-6">
//           <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded">
//             Edit Profile
//           </button>
//         </div>

//         <div className="bg-gray-100 p-4 rounded mb-4 text-center">
//           <h4 className="text-lg font-medium">Total Blogs Uploaded</h4>
//           <p className="text-2xl text-teal-600 font-bold">
//             {user.blogs.length}
//           </p>
//         </div>

//         <div>
//           <h4 className="text-xl font-semibold mb-2">Your Blogs</h4>
//           <ul className="list-disc pl-6 space-y-1">
//             {user.blogs.map((blog, index) => (
//               <li
//                 key={index}
//                 className="text-teal-700 hover:underline cursor-pointer"
//               >
//                 {blog}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [myBlogs, setMyBlogs] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      if (user?._id) {
        try {
          const response = await axios.get(
            `https://blog-hqx2.onrender.com/blog/${user._id}`
          );
          setMyBlogs(response.data);
        } catch (err) {
          console.error("Error fetching blogs:", err);
        }
      }
    };

    fetchBlogs();
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `https://blog-hqx2.onrender.com/user/update/${user._id}`,
        formData
      );
      if (response.status === 200) {
        alert("Profile updated successfully!");
        setEditMode(false);
      }
    } catch (err) {
      alert("Error updating profile");
      console.error(err);
    }
  };

  return (
    <div className="w-11/12 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>

      {/* Profile Box */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://api.iconify.design/mdi/account-circle.svg?color=gray&width=120"
          alt="profile"
          className="rounded-full mb-4"
        />

        {editMode ? (
          <div className="flex flex-col gap-2 items-center">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border px-4 py-2 rounded-md w-64"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border px-4 py-2 rounded-md w-64"
            />
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Save Profile
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold">{user?.name}</h2>
            <p>{user?.email}</p>
            <p className="text-sm italic text-gray-600">
              Member since: <span className="italic">May 2025</span>
            </p>
            <button
              onClick={() => setEditMode(true)}
              className="mt-3 bg-teal-600 text-white px-4 py-2 rounded-md"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>

      <hr className="my-6" />

      {/* Total Blogs */}
      <div className="bg-gray-100 p-4 rounded-md w-fit mx-auto mb-6 shadow-sm">
        <p className="text-lg">Total Blogs Uploaded</p>
        <p className="text-3xl font-bold text-green-600 text-center">
          {myBlogs.length}
        </p>
      </div>

      {/* Blog Titles */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Your Blogs</h2>
        <ul className="list-disc ml-6 space-y-1">
          {myBlogs.map((blog) => (
            <li key={blog._id}>
              <a
                href={`/singleblogs/${blog._id}`}
                className="text-blue-600 underline"
              >
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
