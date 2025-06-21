"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/LoginSchema";
import Link from "next/link";

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }
  return (
    <div className="mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-dark">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="h-10 text-dark font-medium placeholder:text-muted !text-base placeholder:text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-dark">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    className="h-10 text-dark font-medium placeholder:text-muted !text-base placeholder:text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Link
              href={"/forget-password"}
              className="text-muted font-medium text-sm underline"
            >
              Forget Password?
            </Link>
          </div>
          <Button type="submit" className="h-10 w-full font-semibold text-dark">
            Submit
          </Button>
        </form>
      </Form>
      <p className="font-medium text-sm text-muted my-2">
        Don&apos; have an account?{" "}
        <Link href={"/sign-up"} className="text-[#8FA748]">
          Register
        </Link>
      </p>
      <div className="flex items-center gap-2 w-full mb-2">
        <div className="h-[1.5px] border border-solid border-border grow" />
        <p className="text-muted">OR</p>
        <div className="h-[1.5px] border border-solid border-border grow" />
      </div>
      <Button
        className="bg-[#E6F2F3] text-dark w-full flex items-center gap-2 font-semibold hover:bg-[#E6F2F3]"
      >
        <img src="/google.svg" alt="" className="size-5" />
        Login with google
      </Button>
    </div>
  );
};

export default LoginForm;
