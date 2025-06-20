import SheetCloseWrapper from "@/components/common/SheetCloseWrapper";
import { NAV_DATA } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = ({
  className = "",
  closeOnClick = false,
}: {
  className?: string;
  closeOnClick?: boolean;
}) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="flex items-center gap-2 flex-col lg:flex-row">
        {NAV_DATA?.map((nav, i) => (
          <li key={i} className="w-full lg:w-auto">
            <SheetCloseWrapper closeOnClick={closeOnClick}>
              <Link
                href={nav.to}
                className={`font-medium text-sm transition-colors hover:bg-primary hover:text-[#5B6A2E] px-4 py-2 rounded-full flex items-center justify-center ${
                  pathname === nav.to
                    ? "bg-primary text-[#5B6A2E]"
                    : "text-muted bg-transparent"
                }`}
              >
                {nav.label}
              </Link>
            </SheetCloseWrapper>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
