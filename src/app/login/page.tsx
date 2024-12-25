"use client";

import React, { useEffect } from "react";
import AuthForm from "@/components/AuthForm";
import { useUser } from "@/api/rest/users/me/hook";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const { data: user, isLoading } = useUser();

  useEffect(() => {
    if (!user || isLoading) return;
    router.replace("/");
  }, [user, isLoading]);

  return (
    <section className={"flex items-center justify-center h-full"}>
      <AuthForm isLoading={isLoading} />
    </section>
  );
};

export default LoginPage;
