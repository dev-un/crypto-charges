"use client";

import React from "react";
import { useUser } from "@/api/rest/users/me/hook";
import { AvatarIcon } from "@nextui-org/shared-icons";
import Link from "next/link";

const Header = () => {
  const { data: user } = useUser();

  return (
    <header
      className={
        "w-full h-14 bg-primary flex items-center justify-between px-4 text-black-0 text-small"
      }
    >
      <Link href={"/"}>CRYPTO CHARGE</Link>
      <div className={"flex  gap-2 items-center"}>
        {user?.email || <Link href={"/login"}>Login</Link>}
        <AvatarIcon />
      </div>
    </header>
  );
};

export default Header;
