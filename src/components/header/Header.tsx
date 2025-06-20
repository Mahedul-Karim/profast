'use client'

import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Nav from "./nav/Nav";
import NavActions from "./nav/NavActions";
import MobileNav from "./nav/MobileNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/hooks/useAppSelector";

const Header = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <header className="mt-4">
      <Container className="bg-white rounded-2xl py-2 sm:py-3 px-4 sm:px-6 flex items-center justify-between">
        <Logo />
        <Nav className="hidden lg:block" />
        <div className="flex items-center gap-4">
          {user ? (
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <NavActions className="hidden lg:flex" />
          )}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
