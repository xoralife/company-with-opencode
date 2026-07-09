interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div
      className="rounded-[1px] border border-[#303235] p-5 transition-colors hover:border-[#5d5e61]"
      style={{ backgroundColor: "#181a1d" }}
    >
      <span className="text-[24px]">{icon}</span>
      <h3 className="mt-4 font-[family-name:var(--font-suisse)] text-[20px] font-[400] leading-[1.3] tracking-[0.28px] text-[#dedede]">
        {title}
      </h3>
      <p className="mt-3 font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#818284]">
        {description}
      </p>
    </div>
  );
}
