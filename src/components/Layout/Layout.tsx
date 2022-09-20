import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <div className="w-full bg-main pt-12">
          <main className="ml-12 ">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
