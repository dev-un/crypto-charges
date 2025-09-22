"use client";

import { useVkRegister } from "@/api/rest/auth/vk/register/hook";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const RegisterVkPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { mutate: register } = useVkRegister();

  useEffect(() => {
    const code = searchParams.get("code");
    const deviceId = searchParams.get("device_id");
    if (!code || !deviceId) return router.replace("/register");

    register({ code, deviceId });
  }, []);

  return (
    <section className={"flex items-center justify-center h-full"}>
      <span>Loading...</span>
    </section>
  );
};

export default RegisterVkPage;
