import StatusBadge from "@/components/StatusBadge";
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "@/components/ReviewForm";
import { promises as fs } from "fs";
import path from "path";

async function getReviews() {
  try {
    const raw = await fs.readFile(path.join(process.cwd(), "data", "reviews.json"), "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-32">
          <StatusBadge label="REVIEWS" variant="neutral" />
          <h1 className="mt-4 max-w-[700px] font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede] md:text-[65px] md:leading-[1.1] md:tracking-[-0.33px]">
            What our clients say
          </h1>
          <p className="mt-4 max-w-lg font-[family-name:var(--font-suisse)] text-[18px] font-[400] leading-[1.33] text-[#818284]">
            Real feedback from real clients. We let our work and our
            relationships speak for themselves.
          </p>
        </div>
      </section>

      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="mx-auto max-w-lg">
            <StatusBadge label="LEAVE A REVIEW" variant="active" />
            <h2 className="mt-4 mb-8 font-[family-name:var(--font-suisse)] text-[25px] font-[400] leading-[1.28] tracking-[0.5px] text-[#dedede]">
              Share your experience
            </h2>
            <ReviewForm />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <StatusBadge label="CLIENT FEEDBACK" variant="neutral" />
          <h2 className="mt-4 mb-12 font-[family-name:var(--font-suisse)] text-[25px] font-[400] leading-[1.28] tracking-[0.5px] text-[#dedede]">
            Recent reviews
          </h2>
          {reviews.length === 0 ? (
            <div className="rounded-[1px] border border-[#303235] p-8 text-center" style={{ backgroundColor: "#181a1d" }}>
              <p className="font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#818284]">
                No reviews yet. Be the first to share your experience!
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review: { id: string }) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
