"use client";
import React, { useState } from "react";
import { Arrow24x24, Cloudflare24x24 } from "@/app/components/Icons";
import { tools } from "@/app/utils/tools-list";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";

const categories = ["Write code", "Ship code", "Fix code", "Connect code"];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState<string>("devstarterpack");

  const handleCopyClick = () => {
    navigator.clipboard.writeText("devstarterpack").then(() => {
      setPromoCode("Copied");
      setTimeout(() => setPromoCode("devstarterpack"), 2000);
    });
  };

  const filteredTools = selected
    ? tools.filter((tool) => tool.category === selected)
    : tools;

  return (
    <main>
      <header className="flex flex-1 justify-center p-5">
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

      <section className="illustration container text-center mb-14 py-20">
        <h1 className="text-3xl font-semibold mb-5 leading-[1]">
          Dev Starter Pack
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-4 leading-6 font-light text-balance">
          A starter pack of free and discounted dev tools for builders creating
          the next wave of world-changing companies:
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
            onClick={() => {
              setSelected((prev) => (prev === category ? null : category));
            }}
            className={cn(
              "text-[12px] sm:text-[14px] sm:px-4 sm:py-2 font-medium px-2 py-1 rounded-md",
              selected === category ? "bg-primary text-white" : "bg-muted"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
        {filteredTools.map((tool) => (
          <Card key={tool.title} {...tool} />
        ))}
      </div>
    </main>
  );
}
