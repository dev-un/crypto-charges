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
import { generateError } from "@/api/utils";
import clsx from "clsx";

const AuthForm = ({ isLoading }: AuthFormProps) => {
  const { mutate: login, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<AuthInputs> = async (values) => {
    login(values);
  };

  return (
    <Card
      className={clsx(
        "min-w-64 animate-appearance-in",
        isLoading && "animate-pulse",
      )}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"flex flex-col gap-3 p-6"}
      >
        <Input
          placeholder={"Email"}
          {...register("email")}
          errorMessage={errors.email?.message}
          isInvalid={!!errors.email}
          isDisabled={isLoading}
        />
        <Input
          placeholder={"Password"}
          {...register("password")}
          type={"password"}
          errorMessage={errors.password?.message}
          isInvalid={!!errors.password}
          isDisabled={isLoading}
        />
        <Button color={"primary"} type={"submit"} isDisabled={isLoading}>
          Login
        </Button>

        {error && (
          <span className={"text-danger text-center text-sm"}>
            {generateError(error)?.message}
          </span>
        )}
      </form>
    </Card>
  );
};

export default AuthForm;
