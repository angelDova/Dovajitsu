import About from "./_components/sections/about";
import Career from "./_components/sections/career";
import Client from "./_components/sections/clients";
import Fun from "./_components/sections/fun";
import Header from "./_components/header/page";
import { Navbar } from "./_components/navbar";
import Portfolio from "./_components/sections/portfolio";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">
      <Navbar />
      <main className="h-full pt-40">
        {children}
        {/* <About />
        <Client />
        <Portfolio />
        <Career />
        <Fun /> */}
      </main>
    </div>
  );
};

export default LandingLayout;
