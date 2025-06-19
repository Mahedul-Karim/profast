import React from "react";
import Container from "../common/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SERVICES = [
  {
    label: "Express & Standard Delivery",
    desc: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    src: "/assets/service.png",
  },
  {
    label: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    src: "/assets/service.png",
  },
  {
    label: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    src: "/assets/service.png",
  },
  {
    label: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    src: "/assets/service.png",
  },
  {
    label: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
    src: "/assets/service.png",
  },
  {
    label: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    src: "/assets/service.png",
  },
];

const OurServices = () => {
  return (
    <Container className="py-8 md:py-16 bg-navy rounded-2xl">
      <div className="px-4 xs:px-10">
        <h3 className="text-3xl font-bold text-white text-center">
          Our Services
        </h3>
        <p className="text-center font-medium text-white/60 my-2 max-w-[740px] mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {SERVICES.map((ser, i) => (
            <Card key={i} className="border-none shadow-none gap-2 hover:bg-primary transition-colors duration-300">
              <CardHeader className="justify-center px-4 xs:px-6">
                <div className="bg-linear-to-b from-[#EEEDFC] to-[#EEEDFC]/0 size-20 rounded-full grid place-items-center">
                  <img src={ser.src} alt="" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2 flex flex-col items-center px-4 xs:px-6">
                <h2 className="text-navy text-lg xs:text-xl text-center font-bold">{ser.label}</h2>
                <p className="text-muted text-sm xs:text-base font-medium text-center">{ser.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurServices;
