"use client";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import { UploadDropzone } from "@/lib/uploadthing";
import { createBlogSchema, createBlogSchemaType, } from "@/schemas/create-blog-schema";
import { createBlog } from "@/server/blog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";
import Image from "next/image";
export function CreateBlogForm() {
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(createBlogSchema),
        defaultValues: {
            title: "",
            content: "",
            image_url: "",
        },
    })
    const imageUrl = useWatch({ name: "image_url", control: form.control });
    async function onSubmit(data: createBlogSchemaType) {
        const res = await createBlog(data);
        if (res.status) {
            toast.success(res.message)
            router.push("/blogs")
        } else {
            toast.error(res.message)
        }
        form.reset();
    }

    const handleImageUpload = (res: { ufsUrl: string; }[]) => {
        form.setValue("image_url", res[0].ufsUrl, { shouldValidate: true });
    };

    const handleRemoveImage = () => {
        form.setValue("image_url", "", { shouldValidate: true });
    };
    return (
        <div className="w-full max-w-3xl mx-auto md:py-10 px-4 sm:px-6 lg:px-8">
            <form id="create-blog-form" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <div className="space-y-2">
                        <FieldLabel>Cover Image</FieldLabel>
                        {imageUrl ? (
                            <div className="relative inline-block">
                                <div className="relative w-32 h-32 overflow-hidden rounded-lg border">
                                    <Image
                                        src={imageUrl}
                                        alt="Blog cover"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <Button
                                    type="button"
                                    variant="destructive"
                                    size="sm"
                                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                                    onClick={handleRemoveImage}
                                >
                                    ×
                                </Button>
                            </div>
                        ) : (
                            <UploadDropzone
                                className="border bg-accent/20 rounded-lg p-4"
                                endpoint="imageUploader"
                                onClientUploadComplete={handleImageUpload}
                                onUploadError={(error: Error) => {
                                    toast.error(`Upload failed: ${error.message}`);
                                }}
                            />
                        )}
                    </div>
                    {/* Post title */}
                    <Controller
                        name="title"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-title">
                                    Post Title
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="form-title"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="New Blog"
                                    autoComplete="off"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    {/* Post content */}
                    <Controller
                        name="content"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-content">
                                    content
                                </FieldLabel>
                                <InputGroup>
                                    <InputGroupTextarea
                                        {...field}
                                        id="form-content"
                                        placeholder="post content"
                                        rows={10}
                                        className="min-h-24 resize-none"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    <InputGroupAddon align="block-end">
                                        <InputGroupText className="tabular-nums">
                                            {field.value?.length}/1000 characters
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Field orientation="horizontal">
                        <Button type="button" variant="outline" onClick={() => form.reset()}>
                            Reset
                        </Button>
                        <Button type="submit" disabled={form.formState.isSubmitting}>
                            {
                                form.formState.isSubmitting
                                    ?
                                    <Spinner />
                                    :
                                    "Submit"
                            }
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}