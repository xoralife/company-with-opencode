"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StatusBadge from "@/components/StatusBadge";

interface Review {
  id: string;
  name: string;
  rating: number;
  message: string;
  date: string;
}

export default function AdminPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token !== "authenticated") {
      router.push("/admin/login");
    } else {
      setAuthed(true);
      fetchReviews();
    }
  }, [router]);

  async function fetchReviews() {
    try {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      setReviews(data);
    } catch {
      setReviews([]);
    }
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this review?")) return;
    try {
      const res = await fetch("/api/reviews", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setReviews((prev) => prev.filter((r) => r.id !== id));
      }
    } catch {
      alert("Failed to delete");
    }
  }

  function handleLogout() {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  }

  if (!authed) return null;

  return (
    <div className="mx-auto max-w-[1000px] px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <StatusBadge label="ADMIN" variant="active" />
          <h1 className="mt-3 font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede]">
            Review Management
          </h1>
        </div>
        <button
          onClick={handleLogout}
          className="rounded-[1px] border border-[#9f3f53] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#9f3f53] transition-colors hover:bg-[#9f3f53] hover:text-[#0b0e12]"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p className="font-[family-name:var(--font-suisse)] text-[14px] text-[#818284]">Loading...</p>
      ) : reviews.length === 0 ? (
        <div className="rounded-[1px] border border-[#303235] p-8 text-center" style={{ backgroundColor: "#181a1d" }}>
          <p className="font-[family-name:var(--font-suisse)] text-[14px] text-[#818284]">No reviews yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex items-start justify-between rounded-[1px] border border-[#303235] p-5"
              style={{ backgroundColor: "#181a1d" }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#00d892]">
                    {review.name}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] font-[400] tracking-[0.064em] text-[#5d5e61]">
                    {review.date}
                  </span>
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={`text-[12px] ${i < review.rating ? "text-[#00d892]" : "text-[#303235]"}`}>
                        &#9733;
                      </span>
                    ))}
                  </span>
                </div>
                <p className="mt-2 font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#a3a4a5]">
                  {review.message}
                </p>
              </div>
              <button
                onClick={() => handleDelete(review.id)}
                className="ml-4 rounded-[1px] border border-[#9f3f53] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[10px] font-[400] uppercase tracking-[0.064em] text-[#9f3f53] transition-colors hover:bg-[#9f3f53] hover:text-[#0b0e12]"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
