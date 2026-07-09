interface Review {
  id: string;
  name: string;
  rating: number;
  message: string;
  date: string;
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="rounded-[1px] border border-[#303235] p-5"
      style={{ backgroundColor: "#181a1d" }}
    >
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#00d892]">
          {review.name}
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[10px] font-[400] tracking-[0.064em] text-[#5d5e61]">
          {review.date}
        </span>
      </div>
      <div className="mt-2 flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`text-[14px] ${i < review.rating ? "text-[#00d892]" : "text-[#303235]"}`}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p className="mt-3 font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#a3a4a5]">
        {review.message}
      </p>
    </div>
  );
}
