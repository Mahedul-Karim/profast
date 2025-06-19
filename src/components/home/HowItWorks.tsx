import React from "react";
import Container from "../common/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HOW_IT_WORKS } from "@/lib/data";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <Container className="py-8 md:py-16">
      <h2 className="text-2xl text-navy font-bold">How it Works</h2>
      <div className="mt-8 grid xs:grid-cols-2 lg:grid-cols-4 gap-4">
        {HOW_IT_WORKS.map((work, i) => (
          <Card key={i} className="border-none shadow-none gap-2">
            <CardHeader>
              <Image src={work.src} width={50} height={49} alt="van image" />
            </CardHeader>
            <CardContent className="space-y-2">
              <h2 className="text-navy text-lg font-bold">{work.label}</h2>
              <p className="text-muted font-medium">{work.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default HowItWorks;
