import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid grid-cols-2">
      <div>{children}</div>
      <div></div>
    </main>
  );
};

export default Layout;
