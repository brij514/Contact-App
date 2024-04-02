import React from "react";

const Navbar = () => {
  return (
    <div
      className="my-4 h-[60px] text-xl font-medium bg-white gap-2 rounded-lg 
    flex justify-center items-center"
    >
      <img src="/firebase.svg" alt="" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
