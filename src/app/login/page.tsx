"use client";

import React, { useEffect } from "react";
import AuthForm from "@/components/AuthForm";
import { useUser } from "@/api/rest/users/me/hook";
import { Spinner } from "@nextui-org/spinner";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const { data: user, isLoading } = useUser();

  useEffect(() => {
    if (!user || isLoading) return;
    router.replace("/");
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <Spinner
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        }
        color={"secondary"}
      />
    );
  }

  return (
    <section>
      <AuthForm />
    </section>
  );
};

export default LoginPage;
