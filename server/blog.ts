"use server";

import { db } from "@/db/drizzle";
import { Blog, blog, user } from "@/db/schema";
import { auth } from "@/lib/auth";
import { createBlogSchemaType } from "@/schemas/create-blog-schema";
import { desc, eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";

//* fetch all blogs
export const getBlogs = async (): Promise<Blog[]> => {
    try {
        return await db.query.blog.findMany({
            orderBy: [desc(blog.createdAt)],
        });
    } catch (error) {
        console.error("fetch blogs error:", error);
        throw new Error(error instanceof Error ? error.message : "Failed to fetch blogs");
    }
};

//* fetch blog
export const getBlog = async (id: string): Promise<Blog | undefined> => {
    try {
        return await db.query.blog.findFirst({
            where: (
                eq(blog.id, id)
            )
        });
    } catch (error) {
        console.error("fetch blogs error:", error);
        throw new Error(error instanceof Error ? error.message : "Failed to fetch blogs");
    }
};

//* create new blog
export const createBlog = async (payload: createBlogSchemaType) => {
    const heads = await headers();
    try {
        const session = await auth.api.getSession({
            headers: heads
        });
        const userId = session?.user.id;
        if (!userId) {
            return {
                status: false,
                message: "User not authenticated",
            };
        }
        const existingUser = await db.query.user.findFirst({
            where: eq(user.id, userId),
        });
        if (!existingUser) {
            return {
                status: false,
                message: "User not found",
            };
        }
        await db.insert(blog).values({ ...payload, userId, })
        revalidateTag("blogs", "max")
        // redirect("/blogs"); //TODO: must be fixed
        return {
            status: true,
            message: "Blog created successfully",
        };
    } catch (error) {
        console.error("Create blog error:", error);
        return {
            status: false,
            message: error instanceof Error ? error.message : "Failed to create blog",
        };
    }
};