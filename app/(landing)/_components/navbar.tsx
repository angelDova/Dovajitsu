"use client";

import { motion } from "framer-motion";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

import { useConvexAuth } from "convex/react";

import { Logo } from "./logo";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import Header from "./header/page";
import { Equal, LucideIcon } from "lucide-react";
import { useState } from "react";
import { IconBadge } from "@/components/icon-badge";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />

      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Store
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                My Library
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Let&apos;s Get Started</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
        <Button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="relative flex items-center"
          variant="ghost"
          size="icon"
        >
          <motion.div
            className="relative"
            animate={{ top: isActive ? "-100%" : "0" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          ></motion.div>
        </Button>
      </div>
    </div>
  );
};
