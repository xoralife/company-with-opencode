import customers from "@/data/customers.json";

export default function CustomerLogoStrip() {
  return (
    <div className="text-center">
      <p className="font-[family-name:var(--font-mono)] text-[10px] font-[400] uppercase tracking-[0.064em] text-[#818284]">
        POWERING THE BEST TEAMS
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-12">
        {customers.map((name) => (
          <span
            key={name}
            className="font-[family-name:var(--font-mono)] text-[13px] font-[400] uppercase tracking-[0.053em] text-[#5d5e61]"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}