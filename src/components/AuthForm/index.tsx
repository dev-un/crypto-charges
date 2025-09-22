"use client";

import React from "react";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthFormProps, AuthInputs } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validation";
import { useLogin } from "@/api/rest/auth/login/hook";
import clsx from "clsx";
import Link from "next/link";

const AuthForm = ({ isLoading }: AuthFormProps) => {
  const { mutate: login, error: serverError } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<AuthInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<AuthInputs> = async (values) => {
    login(values);
  };

  return (
    <Card className={clsx("min-w-64", isLoading && "animate-pulse")}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"flex flex-col gap-3 p-6"}
      >
        <Input
          placeholder={"Email"}
          {...register("email")}
          errorMessage={formErrors.email?.message}
          isInvalid={!!formErrors.email}
          isDisabled={isLoading}
        />
        <Input
          placeholder={"Password"}
          {...register("password")}
          type={"password"}
          errorMessage={formErrors.password?.message}
          isInvalid={!!formErrors.password}
          isDisabled={isLoading}
        />
        <Link href={"/register"} className={"underline text-xs text-center"}>
          Don't have an account?
        </Link>
        <Button color={"primary"} type={"submit"} isDisabled={isLoading}>
          Login
        </Button>
        <Link
          className={"bg-secondary text-center rounded-lg p-2"}
          href={
            "https://id.vk.ru/authorize?code_challenge=2E-QiQf5YNcnyWjfGL-1VcsrM7vBTp7AlFIOXWI1sQg&code_challenge_method=s256&client_id=54139650&response_type=code&scope=&redirect_uri=https%3A%2F%2Fpablo-cliffy-prognosticatively.ngrok-free.app%2Flogin%2Fvk"
          }
        >
          Login with VK
        </Link>

        {serverError && (
          <span className={"text-danger text-center text-sm"}>
            {serverError.details}
          </span>
        )}
      </form>
    </Card>
  );
};

export default AuthForm;
