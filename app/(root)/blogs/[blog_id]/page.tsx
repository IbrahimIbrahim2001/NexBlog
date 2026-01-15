import { Button } from "@/components/ui/button";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "../page";
export default async function BlogPage({ params }: { params: Promise<{ blog_id: string }> }) {
    // await connection();
    const { blog_id } = await params;
    console.log(blog_id)
    const blog = blogs[blog_id as unknown as number - 1];
    return (
        <div className="mx-auto w-full max-w-7xl p-4 pt-2 sm:p-6 lg:p-1 flex flex-col gap-6">
            <Link href="/blogs">
                <Button variant="outline">
                    <HugeiconsIcon
                        icon={ArrowLeft02Icon}
                        size={16}
                        color="currentColor"
                        strokeWidth={1.5}
                        className="size-3.5 m-auto"
                    />
                    Go back
                </Button>
            </Link>
            <Image
                src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Photo by mymind on Unsplash"
                title="Photo by mymind on Unsplash"
                className="relative z-20 aspect-video w-full h-125 object-cover brightness-60 grayscale rounded-lg"
                width={400}
                height={500}
            />
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{blog.title}</h1>
                <p className="text-sm text-foreground/80 mb-4">{blog.userId} - {blog.createdAt.toDateString()}</p>
            </div>
            <p className="text-lg">{blog.content}</p>
            <p className="mb-24">comments (3)</p>
        </div>
    )
}
