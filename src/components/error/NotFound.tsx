"use client";

import React from "react";
import Container from "../common/Container";
import animationData from "./error.json";
import Lottie from "lottie-react";
import { Button } from "../ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container className="py-10">
      <div className="flex flex-col items-center justify-center gap-4 bg-white p-4 rounded-2xl">
        <Lottie
          animationData={animationData}
          className="size-[200px] xs:size-[300px]"
        />
        <p className="text-navy font-bold text-2xl">404 - Page Not Found</p>
        <Button asChild className="font-semibold rounded-full text-dark">
          <Link href={"/"}>Go Home</Link>
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
