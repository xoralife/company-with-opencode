import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";

const team = [
  { name: "Alex Chen", role: "Founder & Lead Developer" },
  { name: "Sarah Khan", role: "Frontend Architect" },
  { name: "Ravi Patel", role: "Backend Engineer" },
  { name: "Emily Rodriguez", role: "UI/UX Designer" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-32">
          <StatusBadge label="ABOUT" variant="neutral" />
          <h1 className="mt-4 max-w-[700px] font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede] md:text-[65px] md:leading-[1.1] md:tracking-[-0.33px]">
            We are DevForge
          </h1>
          <p className="mt-4 max-w-lg font-[family-name:var(--font-suisse)] text-[18px] font-[400] leading-[1.33] text-[#818284]">
            A team of passionate developers, designers, and strategists
            dedicated to building world-class digital products.
          </p>
        </div>
      </section>

      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <StatusBadge label="OUR STORY" variant="neutral" />
            <h2 className="mt-4 font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede]">
              Built by developers, for businesses
            </h2>
            <div className="mt-8 space-y-4">
              <p className="font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#a3a4a5]">
                DevForge started in 2022 with a simple mission: make high-quality
                software development accessible to businesses of all sizes. We
                believed that great technology shouldn&apos;t require a massive
                budget or a team of fifty engineers.
              </p>
              <p className="font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#a3a4a5]">
                Today, we&apos;ve helped over 50 companies launch digital
                products — from early-stage startups to established enterprises.
                Our approach combines technical excellence with practical
                business thinking, ensuring every line of code serves a real
                purpose.
              </p>
              <p className="font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#a3a4a5]">
                We specialize in Next.js, React, Node.js, and cloud
                infrastructure, but our real expertise is in understanding your
                business and translating it into software that works.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <StatusBadge label="TEAM" variant="neutral" />
          <h2 className="mt-4 font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede]">
            Meet the team
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-[1px] border border-[#303235] p-5 text-center"
                style={{ backgroundColor: "#181a1d" }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1px] border border-[#303235] bg-[#1f2124]">
                  <span className="font-[family-name:var(--font-mono)] text-[20px] text-[#00d892]">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-suisse)] text-[18px] font-[400] text-[#dedede]">
                  {member.name}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#818284]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="rounded-[1px] border border-[#303235] p-8 text-center" style={{ backgroundColor: "#181a1d" }}>
            <StatusBadge label="CONTACT" />
            <h2 className="mt-4 font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede]">
              Want to work with us?
            </h2>
            <p className="mx-auto mt-4 max-w-md font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#818284]">
              We&apos;re always looking for interesting projects. Let&apos;s
              talk about yours.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-[1px] bg-[#002923] px-6 py-3 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#00d892] transition-colors hover:bg-[#005441]"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
