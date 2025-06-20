import React from "react";
import Container from "../common/Container";
import { Button } from "../ui/button";

const Merchant = () => {
  return (
    <Container className="py-8 md:py-16 bg-navy rounded-2xl bg-[url('/assets/be-a-merchant-bg.png')] bg-no-repeat bg-[top_center]">
      <div className="px-4 xs:px-10 grid md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-white font-bold text-xl xs:text-2xl lg:text-3xl">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="text-white/60 text-sm xs:text-base">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="text-dark font-bold rounded-full h-10 px-6 w-full sm:w-auto">
              Become a Merchant
            </Button>
            <Button
              variant={"outline"}
              className="text-primary font-bold rounded-full h-10 px-6 border-primary hover:bg-transparent hover:text-primary bg-transparent w-full sm:w-auto"
            >
              Earn with Profast Courier
            </Button>
          </div>
        </div>
        <div>
          <img
            src="/assets/location-merchant.png"
            alt=""
            className="max-h-[250px] w-full object-contain"
          />
        </div>
      </div>
    </Container>
  );
};

export default Merchant;
