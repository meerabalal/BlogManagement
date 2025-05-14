import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./componentss/ProtectedRoute";
import CreateBlog from "./pages/CreateBlog";
import SingleBlog from "./pages/SingleBlog";
import MyBlog from "./pages/MyBlog";
import EditBlog from "./pages/EditBlog";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/singleblogs/:id"
            element={
              <ProtectedRoute>
                <SingleBlog />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/create-blog"
            element={
              <ProtectedRoute>
                <CreateBlog />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/signup" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/myblog"
            element={
              <ProtectedRoute>
                <MyBlog />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/myblog"
            element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
