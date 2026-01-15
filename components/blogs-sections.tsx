import { blogs } from "@/app/(root)/blogs/page";
import { Button } from "@/components/ui/button";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import BlogCard from "./blog-card";
/* 
    - update card image, and card component
    - fetch only three newest blogs
    - update the links
*/
export function BlogsSection() {
    const latestBlogs = blogs.slice(0, 3);
    return (
        <section className="space-y-8 w-full grid">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg md:text-3xl">Latest Articles</h2>
                <Link
                    href="/blogs"
                    className="text-primary hover:underline text-sm font-medium"
                >
                    View all →
                </Link>
            </div>
            <div className="mx-auto grid content-center items-center w-full gap-8 p-4 pt-2 sm:gap-12 sm:p-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:p-12">
                {latestBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
            <div className="flex justify-center pt-4">
                <Button variant="outline">
                    <Link href="/blogs" className="flex items-center gap-2">
                        View All Articles
                        <HugeiconsIcon
                            icon={ArrowRight02Icon}
                            size={16}
                            color="currentColor"
                            strokeWidth={1.5}
                            className="size-4 m-auto"
                        />
                    </Link>
                </Button>
            </div>
        </section>
    )
}