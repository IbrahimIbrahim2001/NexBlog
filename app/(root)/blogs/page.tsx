import BlogCard from "@/components/blog-card"
import { Blog } from "@/db/schema"


// add empty component and fetching logic later
export const blogs: Blog[] = [
    {
        id: "1",
        "userId": "user1",
        title: "First Blog Post",
        content: "This is the content of the first blog post.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        "userId": "user2",
        title: "Second Blog Post",
        content: "This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.This is the content of the second blog post.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "3",
        "userId": "user3",
        title: "Third Blog Post",
        content: "This is the content of the third blog post.",
        createdAt: new Date(),
        updatedAt: new Date(),
    }
]


export default function BlogsPage() {
    return (
        <div className="mx-auto grid content-center items-center w-full gap-8 p-4 pt-2 sm:gap-12 sm:p-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:p-12">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    )
}
