import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <Link href="/" className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height="36"
        width="36"
        alt="Logo"
        className="hidden dark:block"
      />
      <Image
        src="/dark-logo.svg"
        height="40"
        width="40"
        alt="Dark Logo"
        className="dark:hidden"
      />
      <p className={cn("font-semibold", font.className)}>Dovadoggdojo</p>
    </Link>
  );
};
