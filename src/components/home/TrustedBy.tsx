import React from "react";
import Container from "../common/Container";
import { TRSUTED } from "@/lib/data";

const TrustedBy = () => {
  return (
    <Container className="py-8 md:py-16">
      <h2 className="text-xl text-navy font-bold text-center">
        We&apos;ve helped thousands of sales teams
      </h2>
      <div className="mt-8 flex justify-center gap-10 flex-wrap items-center">
        {TRSUTED.map((src, i) => (
          <img
            src={src}
            key={i}
            className="h-5 w-auto object-contain grayscale-100"
            alt="Brands"
          />
        ))}
      </div>
    </Container>
  );
};

export default TrustedBy;
