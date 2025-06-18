import { NAV_DATA } from "@/lib/data";
import Link from "next/link";
import React from "react";

const Nav = ({ className = "" }: { className?: string }) => {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-2">
        {NAV_DATA?.map((nav, i) => (
          <li key={i}>
            <Link href={nav.to} className={`font-medium text-muted text-sm transition-colors hover:bg-primary hover:text-[#5B6A2E] px-4 py-2 rounded-full`}>{nav.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
