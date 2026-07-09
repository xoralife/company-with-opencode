import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        className="rounded-[1px] border border-[#303235] p-5 transition-colors hover:border-[#5d5e61]"
        style={{ backgroundColor: "#181a1d" }}
      >
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-mono)] text-[10px] font-[400] uppercase tracking-[0.064em] text-[#00d892]">
            {post.tag}
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[10px] font-[400] tracking-[0.064em] text-[#5d5e61]">
            {post.date}
          </span>
        </div>
        <h3 className="mt-3 font-[family-name:var(--font-suisse)] text-[20px] font-[400] leading-[1.3] tracking-[0.28px] text-[#dedede]">
          {post.title}
        </h3>
        <p className="mt-2 font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#818284]">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
