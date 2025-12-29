"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { renderCanvas, ShineBorder, TypeWriter } from "@/components/ui/hero-designali";
import { Plus } from "lucide-react"; 

import { Button } from "@/components/ui/button"; 

export const HeroDesignAli = () => {
  const talkAbout = [
    "Web Development",
    "Product Design",
    "E-Commerce",
    "AI & Machine Learning",
    "Data Analytics",
    "Brand Strategy",
    "Digital Transformation",
  ];

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 max-md:hidden top-[400px] -z-10 h-[400px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      
      {/* Background Gradient Image */}
      <img
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 pointer-events-none"
        src="https://raw.githubusercontent.com/designali-in/designali/refs/heads/main/apps/www/public/images/gradient-background-top.png"
        alt=""
        role="presentation"
      />
      
      {/* Canvas Animation */}
      <canvas
        className="pointer-events-none absolute inset-0 -z-10"
        id="canvas"
      ></canvas>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 mt-10 sm:justify-center md:mb-4 md:mt-40">
          <div className="relative flex items-center rounded-full border bg-popover px-3 py-1 text-xs text-primary/60">
            Scale. Grow. Dominate.
            <a
              href="https://app.workdun.org"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 flex items-center font-semibold"
            >
              <div
                className="absolute inset-0 hover:font-semibold hover:text-primary flex"
                aria-hidden="true"
              />
              Get Started <span aria-hidden="true"></span>
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="border-blue-500 relative mx-auto h-full bg-background border py-12 p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)]">
            <h1 className="flex flex-col text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
              <Plus
                strokeWidth={4}
                className="text-blue-500 absolute -left-5 -top-5 h-10 w-10"
              />
              <Plus
                strokeWidth={4}
                className="text-blue-500 absolute -bottom-5 -left-5 h-10 w-10"
              />
              <Plus
                strokeWidth={4}
                className="text-blue-500 absolute -right-5 -top-5 h-10 w-10"
              />
              <Plus
                strokeWidth={4}
                className="text-blue-500 absolute -bottom-5 -right-5 h-10 w-10"
              />
              <span>
                Your complete platform for{" "}
                <span className="text-blue-500">scaling your business.</span>
              </span>
            </h1>
            <div className="flex items-center mt-4 justify-center gap-1">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <p className="text-xs text-blue-500">Available Now</p>
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            Transform your business with{" "}
            <span className="text-blue-500 font-bold">Workdun</span>
          </h1>

          <p className="text-primary/60 py-4">
            End-to-end digital solutions that drive growth and scale your business. 
            From{" "}
            <span className="text-blue-500 font-semibold">
              <TypeWriter strings={talkAbout} />
            </span>{" "}
            to AI—we deliver measurable results.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Link to="/pricing">
              <ShineBorder
                borderWidth={3}
                className="border cursor-pointer h-auto w-auto p-2 bg-white/5 backdrop-blur-md dark:bg-black/5"
                color={["#3B82F6", "#2563EB", "#1E40AF"]}
              >
                <Button className="w-full rounded-xl" >
                  Pricing
                </Button>
              </ShineBorder>
            </Link> 
            <Link to="/#contact">
              <Button className="rounded-xl" variant="outline">Schedule Call</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

