import ArrowButton from "@/components/common/ArrowButton";
import SheetCloseWrapper from "@/components/common/SheetCloseWrapper";
import { Button } from "@/components/ui/button";
import React from "react";

const NavActions = ({
  className = "",
  closeOnClick = false,
}: {
  className?: string;
  closeOnClick?: boolean;
}) => {
  return (
    <div className={`${className} flex items-center gap-2`}>
      <SheetCloseWrapper closeOnClick={closeOnClick}>
        <Button
          variant="outline"
          className="bg-transparent border-border h-10 text-muted font-semibold grow lg:grow-0"
        >
          Sign In
        </Button>
      </SheetCloseWrapper>
      <div className="flex items-center">
        <SheetCloseWrapper closeOnClick={closeOnClick}>
          <Button className="h-10 text-dark font-semibold grow lg:grow-0">
            Be a rider
          </Button>
        </SheetCloseWrapper>
        <ArrowButton href="/" />
      </div>
    </div>
  );
};

export default NavActions;
