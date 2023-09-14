import React from "react";

const MainLayout = ({ children, pages }) => {
  
  const classes = pages === "form" ? "px-4 sm:px-6 lg:px-8 flex h-screen justify-center items-center " : "container";

  const classes_children = pages === "form" ? "md:w-1/4"  : ""
  return (
    <div className={"mx-auto w-full " + classes}>
      <div className={"mx-auto sm:w-full " + classes_children}>{children}</div>
    </div>
  );
};

export default MainLayout;
