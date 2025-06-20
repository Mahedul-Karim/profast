"use client";

import React from "react";
import Container from "../common/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
  return (
    <Container className="mt-4 relative">
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <img src="/assets/banner/banner1.png" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="/assets/banner/banner2.png" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="/assets/banner/banner3.png" alt="" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </Container>
  );
};

export default Banner;
