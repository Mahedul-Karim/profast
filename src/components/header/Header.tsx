import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Nav from "./nav/Nav";
import NavActions from "./nav/NavActions";
import MobileNav from "./nav/MobileNav";

const Header = () => {
  return (
    <header className="sticky top-4 w-full">
      <Container className="bg-white rounded-2xl py-3 px-6 flex items-center justify-between">
        <Logo />
        <Nav className="hidden lg:block" />
        <NavActions className="hidden lg:flex" />
        <MobileNav />
      </Container>
    </header>
  );
};

export default Header;
