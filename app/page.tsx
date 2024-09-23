"use client";
import React, { useState } from "react";
import { Arrow24x24, Cloudflare24x24 } from "@/app/components/Icons";
import { tools } from "@/app/utils/tools-list";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Footer } from "@/components/ui/footer";

const categories = [
  "All",
  "Write code",
  "Ship code",
  "Fix code",
  "Connect code",
];

export default function Home() {
  let filteredTools = tools;
  const [selected, setSelected] = useState<string>("All");
  const [promoCode, setPromoCode] = useState<string>("devstarterpack");

  const handleCopyClick = () => {
    navigator.clipboard.writeText("devstarterpack").then(() => {
      setPromoCode("Copied");
      setTimeout(() => setPromoCode("devstarterpack"), 2000);
    });
  };

  if (selected !== "All") {
    filteredTools = tools.filter(
      (tool) => "category" in tool && tool.category === selected
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1">
        <header className="flex flex-1 justify-center p-5 px-4">
          <div className="flex bg-[#FDDEB3] rounded-md font-medium">
            <div
              role="button"
              tabIndex={1}
              className="flex gap-2 items-center p-1 text-black leading-tight"
            >
              <Cloudflare24x24 />
              <span className="text-[11px] md:text-base">
                In conjunction with Cloudflare Builder Day 2024
              </span>
              <Arrow24x24 />
            </div>
          </div>
        </header>

        <section className="illustration container text-center mb-10 py-10 sm:mb-14 sm:py-20">
          <h1 className="text-3xl font-semibold mb-5 leading-[1]">
            Dev Starter Pack
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-4 leading-6 text-balance">
            Startup essential pack.
            <br /> Use this code to save on the below software:
          </p>

          <div className="flex flex-1 justify-center">
            <div className="flex items-center bg-muted rounded-lg p-1">
              <span className="flex mr-1 text-[16px] px-2 font-medium text-muted-foreground">
                {promoCode}
              </span>
              <button
                className="p-1 bg-primary/10 rounded-sm hover:bg-primary/20"
                onClick={handleCopyClick}
              >
                {promoCode === "Copied" ? (
                  <CheckIcon className="text-muted-foreground w-[16px] h-[16px]" />
                ) : (
                  <CopyIcon className="text-muted-foreground w-[16px] h-[16px]" />
                )}
              </button>
            </div>
          </div>
        </section>

        <div className="container flex mb-6 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={cn(
                "text-[14px] font-medium px-3 py-2 rounded-md leading-[1.1]",
                "sm:px-4 sm:leading-normal",
                selected === category ? "bg-primary text-white" : "bg-muted"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 mb-6">
          {filteredTools.map((tool) => {
            if ("customComponent" in tool) {
              return tool.customComponent;
            }

            return <Card key={tool.title} {...tool} />;
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
