import * as z from "zod"

export const createBlogSchema = z.object({
    title: z.string().min(2, "Post title must be at least 5 characters.").max(100, "Post title must be at most 100 characters."),
    content: z.string().min(100, "Content must be at least 100 characters.")
        .max(1000, "Content must be at most 100 characters."),
    image_url: z.url(),
})

export type createBlogSchemaType = z.infer<typeof createBlogSchema>