"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTransition } from "react";
import Loader from "@/components/ui/loader";

const DropdownLogout = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem onClick={() => signOut()}>
      {isPending ? (
        <Loader className="mr-2 h-4 w-4" />
      ) : (
        <LogOut className="mr-2 h-4 w-4" />
      )}
      Log out
    </DropdownMenuItem>
  );
};
export default DropdownLogout;
