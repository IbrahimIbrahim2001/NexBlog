import BlogCard from "@/components/blog-card"
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { getBlogs } from "@/server/blog";
import { BloggerIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cacheLife, cacheTag } from "next/cache";
import Link from "next/link";

export default async function BlogsPage() {
    return (
        <main className="w-full mx-auto space-y-4">
            <h1 className="text-6xl font-semibold text-center">blogs</h1>
            <LoadBlogList />
        </main>
    )
}

async function LoadBlogList() {
    "use cache"
    cacheLife("hours");
    cacheTag("blogs");

    const blogs = await getBlogs();

    if (!blogs || blogs.length === 0) {
        return <EmptyBlogs />
    }

    return (
        <div className="mx-auto grid content-center items-center w-full gap-8 p-4 pt-2 sm:gap-12 sm:p-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:p-12" >
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </ div>
    )
}

async function EmptyBlogs() {
    return (
        <Empty className="w-full mx-auto bg-primary-foreground border border-dashed max-w-xl">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <HugeiconsIcon
                        icon={BloggerIcon}
                    />
                </EmptyMedia>
                <EmptyTitle>No blogs</EmptyTitle>
                <EmptyDescription>No blogs found</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Button variant="secondary">
                    <Link href="/blogs/create-blog">
                        create blog
                    </Link>
                </Button>
            </EmptyContent>
        </Empty>
    )
}