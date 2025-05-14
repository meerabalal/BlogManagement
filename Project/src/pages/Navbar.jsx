import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  //get user details
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>hello</div>
    //  <div>{user.name}</div>
  );
   

  
};

export default Navbar;
