import React from "react";
import Container from "./Container";
import Link from "next/link";
import { NAV_DATA } from "@/lib/data";

const Footer = () => {
  return (
    <Container className="py-8 md:py-16 bg-dark rounded-4xl mb-6 px-6 flex flex-col justify-center items-center gap-4">
      <Link href={"/"}>
        <img
          src="/logo-footer.png"
          alt=""
          className="w-16 sm:w-20 h-6 sm:h-7.5"
        />
      </Link>
      <p className="text-white/60 max-w-[720px] mx-auto text-center text-sm xs:text-base">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <hr className="border-dashed border-navy w-full self-stretch" />
      <nav className="flex items-center gap-4 flex-wrap justify-center">
        {NAV_DATA.map((nav, i) => (
          <Link key={i} href={nav.to} className="font-medium text-white/80">
            {nav.label}
          </Link>
        ))}
      </nav>
      <hr className="border-dashed border-navy w-full self-stretch" />
    </Container>
  );
};

export default Footer;
