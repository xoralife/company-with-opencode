"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setDone(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      const data = await res.json();
      setError(data.error || "Something went wrong");
    }
    setSubmitting(false);
  }

  if (done) {
    return (
      <div className="rounded-[1px] border border-[#00d892] p-8 text-center" style={{ backgroundColor: "#181a1d" }}>
        <p className="font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#00d892]">
          &#10003; Message sent! We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-4 rounded-[1px] bg-[#002923] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#00d892] transition-colors hover:bg-[#005441]"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1px] border border-[#303235] p-6" style={{ backgroundColor: "#181a1d" }}>
      <div className="mb-5">
        <label className="font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#818284]">
          Name
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-[1px] border border-[#303235] bg-[#1f2124] px-3 py-2 font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#dedede] outline-none transition-colors focus:border-[#00d892]"
          placeholder="Your name"
        />
      </div>

      <div className="mb-5">
        <label className="font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#818284]">
          Email
        </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-[1px] border border-[#303235] bg-[#1f2124] px-3 py-2 font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#dedede] outline-none transition-colors focus:border-[#00d892]"
          placeholder="your@email.com"
        />
      </div>

      <div className="mb-5">
        <label className="font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#818284]">
          Message
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="mt-2 w-full rounded-[1px] border border-[#303235] bg-[#1f2124] px-3 py-2 font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#dedede] outline-none transition-colors focus:border-[#00d892]"
          placeholder="Tell us about your project..."
        />
      </div>

      {error && (
        <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#9f3f53]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="rounded-[1px] bg-[#002923] px-4 py-2 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#00d892] transition-colors hover:bg-[#005441] disabled:opacity-50"
      >
        {submitting ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
