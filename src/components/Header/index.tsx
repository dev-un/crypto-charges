"use client";

import React from "react";
import { useUser } from "@/api/rest/users/me/hook";

const Header = () => {
  const { data: user } = useUser();

  return (
    <div
      className={
        "w-full h-14 bg-primary flex items-center justify-end px-4 text-black-0 text-small"
      }
    >
      {user?.email || "Login"}
    </div>
  );
};

export default Header;
