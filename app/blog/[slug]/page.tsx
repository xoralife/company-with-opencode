import { notFound } from "next/navigation";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import blog from "@/data/blog.json";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = blog.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <section>
      <div className="mx-auto max-w-[800px] px-6 py-20">
        <Link
          href="/blog"
          className="font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#a3a4a5] transition-colors hover:text-[#dedede]"
        >
          &larr; Back to blog
        </Link>

        <div className="mt-8">
          <StatusBadge label={post.tag} variant="neutral" />
          <h1 className="mt-4 font-[family-name:var(--font-suisse)] text-[36px] font-[400] leading-[1.17] text-[#dedede] md:text-[50px] md:leading-[1.1] md:tracking-[-0.003em]">
            {post.title}
          </h1>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#5d5e61]">
            {post.date}
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="font-[family-name:var(--font-suisse)] text-[16px] font-[400] leading-[1.38] text-[#a3a4a5]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
