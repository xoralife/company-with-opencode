import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import portfolio from "@/data/portfolio.json";

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-32">
          <StatusBadge label="PORTFOLIO" variant="neutral" />
          <h1 className="mt-4 max-w-[700px] font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede] md:text-[65px] md:leading-[1.1] md:tracking-[-0.33px]">
            Our work speaks for itself
          </h1>
          <p className="mt-4 max-w-lg font-[family-name:var(--font-suisse)] text-[18px] font-[400] leading-[1.33] text-[#818284]">
            A selection of projects we&apos;ve built for our clients. Each one
            reflects our commitment to quality and craft.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project) => (
              <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                <div
                  className="rounded-[1px] border border-[#303235] p-5 transition-colors hover:border-[#5d5e61]"
                  style={{ backgroundColor: "#181a1d" }}
                >
                  <span className="font-[family-name:var(--font-mono)] text-[10px] font-[400] uppercase tracking-[0.064em] text-[#00d892]">
                    {project.category}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-suisse)] text-[20px] font-[400] leading-[1.3] tracking-[0.28px] text-[#dedede]">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#818284]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-[1px] bg-[#1f2124] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] font-[400] uppercase tracking-[0.064em] text-[#5d5e61]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
