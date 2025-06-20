import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import NavActions from "./NavActions";
import Nav from "./Nav";
import Logo from "@/components/common/Logo";
import { useAppSelector } from "@/hooks/useAppSelector";

const MobileNav = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center">
          <AlignRight className="text-primary" />
        </SheetTrigger>
        <SheetContent className="bg-white border-border overflow-auto">
          <SheetHeader className="flex items-center justify-center border-b border-border">
            <SheetTitle>
              <Logo closeOnClick />
            </SheetTitle>
            <SheetDescription className="sr-only">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div className="px-4">
            <Nav closeOnClick />
          </div>
          <SheetFooter>
            {!user && (
              <NavActions
                className="flex-col sm:flex-row w-full items-stretch sm:items-center"
                closeOnClick
              />
            )}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
