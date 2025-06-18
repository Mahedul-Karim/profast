import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <section className={`max-w-7xl w-11/12 mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Container;
