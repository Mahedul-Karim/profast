import React from "react";
import Container from "../common/Container";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { HOME_ABOUT } from "@/lib/data";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Container className="py-8 md:py-16">
      <hr className="border-dashed border-navy/40" />
      <div className="my-12 flex flex-col gap-4">
        {HOME_ABOUT.map((abt, i) => (
          <Card key={i} className="border-none shadow-none flex-row">
            
            <CardContent className="flex flex-col sm:flex-row items-center gap-8">
              <div className="shrink-0">
                <Image src={abt.src} width={150} height={150} alt="" />
              </div>
              <div className="w-full sm:w-px h-px sm:h-full border-b sm:border-b-0 sm:border-l border-dashed border-border" />
              <div className="grow space-y-2">
                <h2 className="font-bold xs:text-lg text-navy">{abt.title}</h2>
                <p className="text-muted text-sm xs:text-base">{abt.des}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <hr className="border-dashed border-navy/40" />
    </Container>
  );
};

export default AboutUs;
