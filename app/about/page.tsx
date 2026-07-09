import Image from "next/image";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import team from "@/data/team.json";
import aboutData from "@/data/about.json";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-32">
          <StatusBadge label="ABOUT" variant="neutral" />
          <h1 className="mt-4 max-w-[700px] font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede] md:text-[65px] md:leading-[1.1] md:tracking-[-0.33px]">
            {aboutData.headline}
          </h1>
          <p className="mt-4 max-w-lg font-[family-name:var(--font-suisse)] text-[18px] font-[400] leading-[1.33] text-[#818284]">
            {aboutData.subtitle}
          </p>
        </div>
      </section>

      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <StatusBadge label="OUR STORY" variant="neutral" />
            <h2 className="mt-4 font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede]">
              {aboutData.storyHeadline}
            </h2>
            <div className="mt-8 space-y-4">
              {aboutData.storyParagraphs.map((para, i) => (
                <p key={i} className="font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#a3a4a5]">
                  {para}
                </p>
              ))}
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
                className="rounded-[1px] border border-[#303235] p-8 text-center"
                style={{ backgroundColor: "#181a1d" }}
              >
                <div className="mx-auto h-[140px] w-[140px] overflow-hidden rounded-[1px] border border-[#303235] bg-[#1f2124]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={140}
                    height={140}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-suisse)] text-[22px] font-[400] text-[#dedede]">
                  {member.name}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#818284]">
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