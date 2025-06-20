import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ArrowButton = ({ href }: { href: string }) => {
  return (
    <Button
      className="rounded-full bg-dark text-primary size-10 px-0 py-0 has-[>svg]:px-0 hover:bg-dark"
      asChild
    >
      <Link href={href}>
        <ArrowUpRight className="size-7" />
      </Link>
    </Button>
  );
};

export default ArrowButton;
