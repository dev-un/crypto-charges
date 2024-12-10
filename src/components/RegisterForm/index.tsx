"use client";

import React from "react";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormInputs } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./validation";
import { useRegister } from "@/api/rest/auth/register/hook";
import { generateError } from "@/api/utils";
import clsx from "clsx";
import Link from "next/link";

const RegisterForm = () => {
  const { mutate: registerUser, error, isSuccess } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (values) => {
    registerUser(values);
  };

  return (
    <Card className={clsx("min-w-64")}>
      {!isSuccess ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"flex flex-col gap-3 p-6"}
        >
          <Input
            placeholder={"Email"}
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email}
          />
          <Input
            placeholder={"Password"}
            {...register("password")}
            type={"password"}
            errorMessage={errors.password?.message}
            isInvalid={!!errors.password}
          />
          <Link href={"/login"} className={"underline text-xs text-center"}>
            Already have an account?
          </Link>
          <Button color={"primary"} type={"submit"}>
            Register
          </Button>

          {error && (
            <span className={"text-danger text-center text-sm"}>
              {generateError(error)?.message}
            </span>
          )}
        </form>
      ) : (
        <div className={"flex flex-col gap-3 p-6 items-center"}>
          <h2 className={"text-success"}>You successfully registered!</h2>
          <Link className={"border-1 rounded px-3 py-1"} href={"/login"}>
            Login
          </Link>
        </div>
      )}
    </Card>
  );
};

export default RegisterForm;
