interface TerminalPanelProps {
  children?: React.ReactNode;
}

export default function TerminalPanel({ children }: TerminalPanelProps) {
  const tabs = ["CLI", "API", "CONSOLE"];

  return (
    <div className="overflow-hidden rounded-[1px] border border-[#303235]" style={{ backgroundColor: "#181a1d" }}>
      <div className="flex border-b border-[#303235]">
        {tabs.map((tab, i) => (
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
      <div className="p-4 font-[family-name:var(--font-mono)] text-[13px] font-[400] leading-[1.45] text-[#bababb]">
        {children || (
          <>
            <span className="text-[#00d892]">$</span>{" "}
            <span className="text-[#c58aff]">deploy</span>{" "}
            <span className="text-[#ff6285]">--prod</span>{" "}
            <span className="text-[#bababb]">main</span>
            <br />
            <span className="text-[#006d4a]">// Deploying to production...</span>
            <br />
            <span className="text-[#00d892]">✓</span>{" "}
            <span className="text-[#bababb]">Build complete</span>
            <br />
            <span className="text-[#00d892]">✓</span>{" "}
            <span className="text-[#bababb]">Deployed successfully</span>
          </>
        )}
      </div>
    </div>
  );
}
