import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { HiOutlineMenuAlt3 } from "react-icons/hi";

  export default function uiSheet(){
    return(
        <Sheet>
            <SheetTrigger>
                <HiOutlineMenuAlt3               className="text-2xl hover:cursor-pointer"/></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
  }