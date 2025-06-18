import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <img src="/logo.png" alt="" className="w-16 sm:w-20 h-6 sm:h-7.5" />
    </Link>
  );
};

export default Logo;
