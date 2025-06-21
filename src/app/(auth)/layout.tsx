import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid md:grid-cols-2 md:min-h-screen">
      <div className="bg-white flex">
        <Container className="py-4 flex flex-col">
          <Logo />
          <div className="mt-12 flex items-center justify-center grow px-4">
            {children}
          </div>
        </Container>
      </div>
      <div className="bg-[#FAFDF0] hidden md:grid place-items-center">
        <Container>
          <img
            src="/assets/authImage.png"
            alt=""
            className="w-full object-contain"
          />
        </Container>
      </div>
    </main>
  );
};

export default Layout;
