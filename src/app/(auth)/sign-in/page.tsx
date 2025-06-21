import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-[350px] w-full">
      <h2 className="text-3xl font-extrabold text-dark">Welcome Back</h2>
      <p className="text-dark my-1">Login with Profast</p>
      <LoginForm />
    </div>
  );
};

export default Page;
