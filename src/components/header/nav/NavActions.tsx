import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const NavActions = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center gap-2`}>
      <Button variant="outline" className="bg-transparent border-border h-10 text-muted font-semibold">Sign In</Button>
      <div className="flex items-center">
        <Button className="h-10 text-dark font-semibold">Be a rider</Button>
        <Button className="rounded-full bg-dark text-primary size-10 px-0 py-0 has-[>svg]:px-0 hover:bg-dark">
          <ArrowUpRight className="size-7" />
        </Button>
      </div>
    </div>
  );
};

export default NavActions;
