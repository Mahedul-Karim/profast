import React from "react";
import { SheetClose } from "../ui/sheet";

const SheetCloseWrapper = ({
  children,
  closeOnClick = false,
}: {
  children: React.ReactNode;
  closeOnClick?: boolean;
}) => {
  return (
    <>{closeOnClick ? <SheetClose asChild>{children}</SheetClose> : children}</>
  );
};

export default SheetCloseWrapper;
