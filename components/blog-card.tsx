import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Blog } from "@/db/schema"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
    blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <Link key={blog.id} href={{ pathname: `/blogs/${blog.id}` }}>
            <Card className="relative w-full max-w-sm overflow-hidden pt-0">
                <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
                <Image
                    src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Photo by mymind on Unsplash"
                    title="Photo by mymind on Unsplash"
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
                    width={300}
                    height={200}
                />
                <CardHeader>
                    <CardTitle>{blog.title}</CardTitle>
                    <CardDescription className="h-15 line-clamp-3 overflow-hidden">
                        {blog.content}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                    <p>{blog.userId}</p>
                    <p>{blog.createdAt.toDateString()}</p>
                </CardFooter>
            </Card>
        </Link>
    )
}
