"use client";

import { useVkLogin } from "@/api/rest/auth/vk/login/hook";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const LoginVkPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { mutate: login } = useVkLogin();

  useEffect(() => {
    const code = searchParams.get("code");
    const deviceId = searchParams.get("device_id");
    if (!code || !deviceId) return router.replace("/login");

    login({ code, deviceId });
  }, []);

  return (
    <section className={"flex items-center justify-center h-full"}>
      <span>Loading...</span>
    </section>
  );
};

export default LoginVkPage;
