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

const MobileNav = () => {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignRight className="text-primary" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>Hello</SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
