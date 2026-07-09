"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  photo: string;
}

export default function TeamCard({ name, role, photo }: TeamCardProps) {
  const [state, setState] = useState<"loading" | "complete">("loading");

  useEffect(() => {
    const timer = setTimeout(() => setState("complete"), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="rounded-[1px] border border-[#303235] p-8 text-center"
      style={{ backgroundColor: "#181a1d" }}
    >
      <div className="relative mx-auto h-[80px] w-[80px]">
        <div
          className={`absolute inset-0 rounded-full ${
            state === "loading"
              ? "animate-spin border-2 border-transparent border-t-[#00d892] border-r-[#00d892]"
              : "border-2 border-[#00d892]"
          }`}
          style={{
            boxShadow:
              state === "complete"
                ? "0 0 0 2px oklab(0.77 -0.184187 0.0538599 / 0.15)"
                : "none",
          }}
        />
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-[#303235] bg-[#1f2124]">
          {state === "complete" ? (
            <div className="flex h-full w-full items-center justify-center bg-[#002923]/80">
              <span className="text-[24px] text-[#00d892]">&#10003;</span>
            </div>
          ) : (
            <Image
              src={photo}
              alt={name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
      <h3 className="mt-5 font-[family-name:var(--font-suisse)] text-[22px] font-[400] text-[#dedede]">
        {name}
      </h3>
      <p className="mt-2 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#818284]">
        {role}
      </p>
    </div>
  );
}
