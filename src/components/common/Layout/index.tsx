import React, { JSXElementConstructor, PropsWithChildren } from "react";
import NavBar from "../Navbar";

const isHomeComponent = (value: any): value is JSXElementConstructor<any> =>
  value.name === "Home";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && isHomeComponent(child.type)) {
          return <>{child}</>;
        }
        return (
          <>
            <NavBar />
            {child}
            {/* <Footer /> */}
          </>
        );
      })}
    </>
  );
};

export default Layout;
