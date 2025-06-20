import Link from "next/link";
import React from "react";
import SheetCloseWrapper from "./SheetCloseWrapper";

const Logo = ({ closeOnClick = false }: { closeOnClick?: boolean }) => {
  return (
    <SheetCloseWrapper closeOnClick={closeOnClick}>
      <Link href={"/"}>
        <img src="/logo.png" alt="" className="w-16 sm:w-20 h-6 sm:h-7.5" />
      </Link>
    </SheetCloseWrapper>
  );
};

export default Logo;
