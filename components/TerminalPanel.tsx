"use client";

import { useState, useEffect } from "react";

interface Part {
  text: string;
  color: string;
}

interface Line {
  parts: Part[];
}

const lines: Line[] = [
  { parts: [{ text: "$ ", color: "#00d892" }, { text: "deploy", color: "#c58aff" }, { text: " --prod", color: "#ff6285" }, { text: " main", color: "#bababb" }] },
  { parts: [{ text: "// Deploying to production...", color: "#006d4a" }] },
  { parts: [{ text: "✓ ", color: "#00d892" }, { text: "Build complete", color: "#bababb" }] },
  { parts: [{ text: "✓ ", color: "#00d892" }, { text: "Deployed successfully", color: "#bababb" }] },
];

function flattenLines(lines: Line[]): { char: string; color: string; lineEnd: boolean }[] {
  const result: { char: string; color: string; lineEnd: boolean }[] = [];
  for (const line of lines) {
    for (const part of line.parts) {
      for (const char of part.text) {
        result.push({ char, color: part.color, lineEnd: false });
      }
    }
    result.push({ char: "\n", color: "#bababb", lineEnd: true });
  }
  return result;
}

const chars = flattenLines(lines);

export default function TerminalPanel() {
  const [index, setIndex] = useState(0);
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    if (index >= chars.length) {
      const t = setTimeout(() => setShowCheck(true), 600);
      return () => clearTimeout(t);
    }
    const delay = chars[index].lineEnd ? 400 : 35;
    const t = setTimeout(() => setIndex(index + 1), delay);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div className="overflow-hidden rounded-[1px] border border-[#303235]" style={{ backgroundColor: "#181a1d" }}>
      <div className="flex border-b border-[#303235]">
        {["CLI", "API", "CONSOLE"].map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-2 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] transition-colors ${
              i === 0
                ? "text-[#00d892] shadow-[inset_0_-1px_0_#00d892]"
                : "text-[#bababb] hover:text-[#dedede]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="relative min-h-[120px] p-4 font-[family-name:var(--font-mono)] text-[13px] font-[400] leading-[1.45] text-[#bababb]">
        {showCheck ? (
          <div className="absolute inset-0 flex animate-pulse items-center justify-center">
            <span className="text-[48px] text-[#00d892]" style={{ textShadow: "0 0 20px rgba(0,216,146,0.5)" }}>
              &#10003;
            </span>
          </div>
        ) : (
          <>
            {chars.slice(0, index).map((c, i) =>
              c.lineEnd ? (
                <br key={i} />
              ) : (
                <span key={i} style={{ color: c.color }}>
                  {c.char}
                </span>
              )
            )}
            <span className="ml-0.5 inline-block h-[14px] w-[2px] animate-pulse bg-[#00d892]" />
          </>
        )}
      </div>
    </div>
  );
}
