"use client";

import React from "react";
import { useUser } from "@/api/rest/users/me/hook";
import { AvatarIcon } from "@nextui-org/shared-icons";
import Link from "next/link";
import { useLogout } from "@/api/rest/auth/logout/hook";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@nextui-org/button";

const Header = () => {
  const { data: user, isLoading } = useUser();
  const { mutate: logout } = useLogout();

  return (
    <header
      className={
        "w-full h-14 min-h-14 bg-primary flex items-center justify-between px-4 text-black-0 text-small"
      }
    >
      <Link href={"/"}>CRYPTO CHARGE</Link>
      <div className={"flex gap-2 items-center"}>
        {isLoading && !user ? (
          <Spinner size="sm" />
        ) : (
          <>
            {user ? (
              <Button size={"sm"} onClick={() => logout()}>
                {user.email}
                <AvatarIcon />
              </Button>
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
