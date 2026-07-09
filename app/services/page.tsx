import StatusBadge from "@/components/StatusBadge";
import ServiceCard from "@/components/ServiceCard";
import TerminalPanel from "@/components/TerminalPanel";
import services from "@/data/services.json";
import process from "@/data/process.json";

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-32">
          <StatusBadge label="SERVICES" variant="neutral" />
          <h1 className="mt-4 max-w-[700px] font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede] md:text-[65px] md:leading-[1.1] md:tracking-[-0.33px]">
            Everything you need to ship digital products
          </h1>
          <p className="mt-4 max-w-lg font-[family-name:var(--font-suisse)] text-[18px] font-[400] leading-[1.33] text-[#818284]">
            Full-stack development, design, and strategy — we cover the entire
            product lifecycle from idea to launch.
          </p>
        </div>
      </section>

      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="mx-auto max-w-2xl">
            <StatusBadge label="HOW IT WORKS" variant="neutral" />
            <h2 className="mt-4 font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede]">
              Our process
            </h2>
            <div className="mt-12 grid gap-6">
              {process.map((p) => (
                <div key={p.step} className="flex gap-6">
                  <span className="font-[family-name:var(--font-mono)] text-[20px] font-[400] leading-[1.3] tracking-[0.014em] text-[#00d892]">
                    {p.step}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-suisse)] text-[20px] font-[400] leading-[1.3] tracking-[0.28px] text-[#dedede]">
                      {p.title}
                    </h3>
                    <p className="mt-1 font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#818284]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20">
            <TerminalPanel />
          </div>
        </div>
      </section>
    </>
  );
}