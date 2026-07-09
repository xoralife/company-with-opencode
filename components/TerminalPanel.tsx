"use client";

import { useState, useEffect, useCallback } from "react";

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
  { parts: [{ text: "Build complete", color: "#bababb" }] },
  { parts: [{ text: "Deployed successfully", color: "#bababb" }] },
];

const LINE_END_DELAY = 500;
const CHAR_DELAY = 35;
const RESTART_DELAY = 2000;

interface CharInfo {
  char: string;
  color: string;
  lineIndex: number;
}

function buildChars(lines: Line[]): CharInfo[] {
  const result: CharInfo[] = [];
  for (let li = 0; li < lines.length; li++) {
    for (const part of lines[li].parts) {
      for (const c of part.text) {
        result.push({ char: c, color: part.color, lineIndex: li });
      }
    }
  }
  return result;
}

const allChars = buildChars(lines);

function getLineRange(lineIndex: number): { start: number; end: number } {
  const start = allChars.findIndex((c) => c.lineIndex === lineIndex);
  const end = allChars.length - 1 - [...allChars].reverse().findIndex((c) => c.lineIndex === lineIndex);
  return { start, end: end + 1 };
}

export default function TerminalPanel() {
  const [charIndex, setCharIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<Set<number>>(new Set());
  const [phase, setPhase] = useState<"typing" | "waiting" | "complete">("typing");

  const reset = useCallback(() => {
    setCharIndex(0);
    setCompletedLines(new Set());
    setPhase("typing");
  }, []);

  useEffect(() => {
    if (phase === "complete") {
      const t = setTimeout(reset, RESTART_DELAY);
      return () => clearTimeout(t);
    }
    if (phase === "waiting") return;
    if (charIndex >= allChars.length) {
      setPhase("complete");
      return;
    }

    const ch = allChars[charIndex];
    const isLastCharOfLine = charIndex === allChars.length - 1 || allChars[charIndex + 1].lineIndex !== ch.lineIndex;

    if (isLastCharOfLine) {
      const t = setTimeout(() => {
        setCompletedLines((prev) => new Set(prev).add(ch.lineIndex));
        setPhase("waiting");
        setTimeout(() => {
          setPhase("typing");
          setCharIndex(charIndex + 1);
        }, LINE_END_DELAY);
      }, CHAR_DELAY);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setCharIndex(charIndex + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [charIndex, phase, reset]);

  function renderLine(li: number) {
    const { start, end } = getLineRange(li);
    const isCompleted = completedLines.has(li);
    const isCurrentLine = start <= charIndex && charIndex < end && !isCompleted;
    const isBeyond = start >= charIndex && !isCompleted;

    if (isBeyond) return null;

    const typedHere = Math.min(charIndex - start, end - start);

    return (
      <div key={li} className="min-h-[1.45em]">
        <span className={isCompleted ? "text-[#00d892]" : "invisible"}>✓ </span>
        {allChars.slice(start, start + (isCompleted ? end - start : typedHere)).map((c, ci) => (
          <span key={ci} style={{ color: c.color }}>{c.char}</span>
        ))}
        {isCurrentLine && (
          <span className="ml-0.5 inline-block h-[14px] w-[2px] animate-pulse bg-[#00d892]" />
        )}
      </div>
    );
  }

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
      <div className="min-h-[120px] p-4 font-[family-name:var(--font-mono)] text-[13px] font-[400] leading-[1.45] text-[#bababb]">
        {lines.map((_, li) => renderLine(li))}
        {phase === "complete" && (
          <div className="mt-2 text-center pt-2 border-t border-[#303235]">
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.064em] text-[#5d5e61]">
              Restarting...
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
