import { getPostBySlug, allPosts } from "@/lib/blog-posts"
import { notFound } from "next/navigation"
import { TransitionLink } from "@/components/transition-link"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 max-w-3xl">
        <TransitionLink
          href="/blog"
          className="group text-neutral-400 hover:text-white font-semibold flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="transition-transform group-hover:-translate-x-1" size={20} />
          Back to Blog
        </TransitionLink>
        <article>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">{post.title}</h1>
          <div className="text-neutral-300 text-lg leading-relaxed space-y-6">{post.content}</div>
        </article>
      </div>
    </div>
  )
}
