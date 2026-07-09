import StatusBadge from "@/components/StatusBadge";
import ContactForm from "@/components/ContactForm";
import contact from "@/data/contact.json";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-32">
          <StatusBadge label="CONTACT" variant="neutral" />
          <h1 className="mt-4 max-w-[700px] font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede] md:text-[65px] md:leading-[1.1] md:tracking-[-0.33px]">
            Let&apos;s build something
          </h1>
          <p className="mt-4 max-w-lg font-[family-name:var(--font-suisse)] text-[18px] font-[400] leading-[1.33] text-[#818284]">
            Have a project in mind? Fill out the form and we&apos;ll get back to
            you within 24 hours.
          </p>
        </div>
      </section>

      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="mx-auto max-w-lg">
            <ContactForm />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {contact.map((item) => (
              <div
                key={item.title}
                className="rounded-[1px] border border-[#303235] p-5 text-center"
                style={{ backgroundColor: "#181a1d" }}
              >
                <span className="font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#818284]">
                  {item.title}
                </span>
                <p className="mt-2 font-[family-name:var(--font-suisse)] text-[16px] font-[400] text-[#dedede]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}