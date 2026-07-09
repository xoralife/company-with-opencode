import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import TerminalPanel from "@/components/TerminalPanel";
import ServiceCard from "@/components/ServiceCard";
import CustomerLogoStrip from "@/components/CustomerLogoStrip";
import services from "@/data/services.json";

export default function Home() {
  return (
    <>
      <section className="border-b border-[#303235]" style={{ backgroundColor: "#0b0e12" }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <div className="md:w-5/12">
              <TerminalPanel />
            </div>
            <div className="md:w-7/12">
              <StatusBadge label="INITIALIZED" />
              <h1 className="mt-6 font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede] md:text-[65px] md:leading-[1.1] md:tracking-[-0.33px]">
                We build software
                <br />
                that powers business.
              </h1>
              <p className="mt-4 max-w-lg font-[family-name:var(--font-suisse)] text-[18px] font-[400] leading-[1.33] text-[#818284]">
                From web apps to mobile experiences, DevForge crafts digital
                solutions that drive real results for your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-[1px] bg-[#002923] px-4 py-2 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#00d892] transition-colors hover:bg-[#005441]"
                >
                  EXPLORE SERVICES
                </Link>
                <Link
                  href="/contact"
                  className="rounded-[1px] border border-[#bababb] px-4 py-2 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#bababb] transition-colors hover:border-[#dedede] hover:text-[#dedede]"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#303235]" style={{ backgroundColor: "#0b0e12" }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="mb-12">
            <StatusBadge label="SERVICES" variant="neutral" />
            <h2 className="mt-4 max-w-[700px] font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede]">
              What we do
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#a3a4a5] transition-colors hover:text-[#dedede]"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#303235]" style={{ backgroundColor: "#0b0e12" }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <CustomerLogoStrip />
        </div>
      </section>

      <section style={{ backgroundColor: "#0b0e12" }}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center">
          <StatusBadge label="READY TO BUILD" variant="active" />
          <h2 className="mt-4 font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede]">
            Let&apos;s create something great together
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#818284]">
            Have a project in mind? We&apos;d love to hear about it. Drop us a
            message and let&apos;s build the future.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-[1px] bg-[#002923] px-6 py-3 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#00d892] transition-colors hover:bg-[#005441]"
          >
            START A PROJECT
          </Link>
        </div>
      </section>
    </>
  );
}
