"use client";

import { useState, FormEvent } from "react";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, rating, message }),
    });

    if (res.ok) {
      setDone(true);
      setName("");
      setRating(5);
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
          &#10003; Review submitted successfully!
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-4 rounded-[1px] bg-[#002923] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#00d892] transition-colors hover:bg-[#005441]"
        >
          Write another
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
          Rating
        </label>
        <div className="mt-2 flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-[24px] transition-colors ${
                star <= rating ? "text-[#00d892]" : "text-[#303235]"
              }`}
            >
              &#9733;
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className="font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#818284]">
          Review
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-2 w-full rounded-[1px] border border-[#303235] bg-[#1f2124] px-3 py-2 font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#dedede] outline-none transition-colors focus:border-[#00d892]"
          placeholder="Share your experience..."
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
        {submitting ? "SUBMITTING..." : "SUBMIT REVIEW"}
      </button>
    </form>
  );
}
