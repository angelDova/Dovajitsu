"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "../logo";
import { Instagram } from "lucide-react";

export const Footer = () => {
  const handleClick = () => {
    const instagramURL = "https://www.instagram.com/dovadogg";
    window.open(instagramURL, "_blank");
  };

  return (
    <div className="flex items-center w-full p-6 z-50 bg-background dark:bg-[#1f1f1f]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          © All Rights Reserved
        </Button>
        <Button variant="ghost" size="sm" onClick={handleClick}>
          <Instagram />
        </Button>
      </div>
    </div>
  );
};
