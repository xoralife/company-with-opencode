interface StatusBadgeProps {
  label: string;
  variant?: "active" | "neutral";
}

export default function StatusBadge({ label, variant = "active" }: StatusBadgeProps) {
  return (
    <span
      className="inline-block rounded-[1px] px-2 py-[1px] font-[family-name:var(--font-mono)] text-[10px] font-[400] uppercase leading-[1.6] tracking-[0.064em]"
      style={{
        backgroundColor: "#181a1d",
        boxShadow:
          variant === "active"
            ? "oklab(0.77 -0.184187 0.0538599 / 0.15) 0px 0px 0px 1px inset"
            : "oklab(0.79 -0.000191013 -0.00108329 / 0.15) 0px 0px 0px 1px inset",
        color: variant === "active" ? "#00d892" : "#818284",
      }}
    >
      {label}
    </span>
  );
}
