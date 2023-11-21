import React from "react";
import Heading from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/sections/footer";
import SpinningBox from "@/components/spinning-box";
import { HoverLinks } from "@/components/hover-links";

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 py-10">
        <SpinningBox />
        <Heading />
        <Heroes />
      </div>
      <Footer />
      {/* <HoverLinks /> */}
    </div>
  );
};

export default LandingPage;
