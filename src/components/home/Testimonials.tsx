"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { REVIEWS } from "@/lib/data";
import Container from "../common/Container";
import Ratings from "../common/Ratings";
import { Button } from "../ui/button";

const Testimonials = () => {
  const [emblaApi, setEmblaApi] = useState<any>(undefined);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi?.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const getClass = (index: number) => {
    if (!emblaApi) return "opacity-40 translate-y-6 z-0";

    const totalSlides = REVIEWS.length;
    const diff = (index - selectedIndex + totalSlides) % totalSlides;

    if (index === selectedIndex) return "opacity-100 translate-y-0 z-10";
    if (diff === 1 || diff === totalSlides - 1)
      return "opacity-50 translate-y-3 z-0";
    if (diff === 2 || diff === totalSlides - 2)
      return "opacity-40 translate-y-6 z-0";
    return "opacity-40 translate-y-6 z-0";
  };

  return (
    <section className="py-8 md:py-16">
      <div className="flex justify-center">
        <Image
          src={"/assets/customer-top.png"}
          alt=""
          width={200}
          height={100}
        />
      </div>
      <h2 className="text-2xl px-2 sm:text-3xl font-bold text-navy text-center my-6">
        What our customers are sayings
      </h2>
      <div className="overflow-x-clip max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          setApi={(api) => setEmblaApi(api)}
        >
          <CarouselContent>
            {REVIEWS.map((rev, index) => (
              <CarouselItem
                key={index}
                className={`sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pb-10 pl-4 sm:pl-0`}
              >
                <div
                  className={`px-2 ${getClass(
                    index
                  )} transition-all duration-300`}
                >
                  <Card
                    className="border-none shadow-none bg-[url('/assets/reviewQuote.png')] bg-no-repeat  bg-white py-4"
                    style={{ backgroundPosition: "10px 5px" }}
                  >
                    <CardContent className="flex p-6 flex-col gap-4">
                      <p className="font-medium text-muted italic">
                        &quot;{rev.review}&quot;
                      </p>
                      <hr className="border-dashed border-navy/60" />
                      <div className="flex items-center gap-4">
                        <Avatar className="shrink-0 size-12">
                          <AvatarImage src={rev.user_photoURL} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <h2 className="font-bold text-navy">
                            {rev.userName}
                          </h2>

                          <Ratings rating={rev.ratings} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <Container className="relative flex items-center justify-center gap-4">
            <CarouselPrevious className="static translate-y-0 bg-white border-none hover:bg-primary" />
            <div className="flex items-center gap-1 xs:gap-2">
              {scrollSnaps?.map((_, i) => (
                <Button key={i} onClick={() => emblaApi?.scrollTo(i)} className={`size-2.5 px-0 py-0 rounded-full ${i === selectedIndex ? 'bg-navy' : 'bg-navy/15'} hover:bg-navy`} />
              ))}
            </div>
            <CarouselNext className="static translate-y-0 bg-white border-none hover:bg-primary" />
          </Container>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
