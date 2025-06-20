import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import HowItWorks from "@/components/home/HowItWorks";
import Merchant from "@/components/home/Merchant";
import OurServices from "@/components/home/OurServices";
import TrustedBy from "@/components/home/TrustedBy";

export default function Home() {
  return (
    <>
      <Banner />
      <HowItWorks />
      <OurServices />
      <TrustedBy />
      <AboutUs />
      <Merchant />
    </>
  );
}
