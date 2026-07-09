import { notFound } from "next/navigation";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import TerminalPanel from "@/components/TerminalPanel";
import portfolio from "@/data/portfolio.json";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <Link
          href="/portfolio"
          className="font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#a3a4a5] transition-colors hover:text-[#dedede]"
        >
          &larr; Back to portfolio
        </Link>
        <div className="mt-8">
          <StatusBadge label={project.category} />
          <h1 className="mt-4 font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede] md:text-[50px] md:leading-[1.1] md:tracking-[-0.003em]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl font-[family-name:var(--font-suisse)] text-[18px] font-[400] leading-[1.33] text-[#818284]">
            {project.description}
          </p>
        </div>

        <div className="mt-12">
          <TerminalPanel />
        </div>

        <div className="mt-12">
          <h2 className="font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#818284]">
            Technologies Used
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-[1px] border border-[#303235] px-3 py-1 font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#bababb]"
                style={{ backgroundColor: "#181a1d" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
