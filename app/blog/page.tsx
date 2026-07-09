import StatusBadge from "@/components/StatusBadge";
import BlogCard from "@/components/BlogCard";
import blog from "@/data/blog.json";

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-[#303235]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-32">
          <StatusBadge label="BLOG" variant="neutral" />
          <h1 className="mt-4 max-w-[700px] font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede] md:text-[65px] md:leading-[1.1] md:tracking-[-0.33px]">
            Insights and ideas
          </h1>
          <p className="mt-4 max-w-lg font-[family-name:var(--font-suisse)] text-[18px] font-[400] leading-[1.33] text-[#818284]">
            Thoughts on web development, design, and building digital products
            that make a difference.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {blog.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
