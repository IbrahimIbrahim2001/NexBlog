import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
/* 
    - update card image, and card component
    - fetch only three newest blogs
    - update the links
*/
export function BlogsSection() {
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
                <Card className="relative w-full max-w-sm overflow-hidden pt-0">
                    <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
                    <img
                        src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Photo by mymind on Unsplash"
                        title="Photo by mymind on Unsplash"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
                    />
                    <CardHeader>
                        <CardTitle>Observability Plus is replacing Monitoring</CardTitle>
                        <CardDescription>
                            Switch to the improved way to explore your data, with natural
                            language. Monitoring will no longer be available on the Pro plan in
                            November, 2025
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>

                        <Badge variant="secondary" className="ml-auto">
                            Warning
                        </Badge>
                    </CardFooter>
                </Card>
                <Card className="relative w-full max-w-sm overflow-hidden pt-0">
                    <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
                    <img
                        src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Photo by mymind on Unsplash"
                        title="Photo by mymind on Unsplash"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
                    />
                    <CardHeader>
                        <CardTitle>Observability Plus is replacing Monitoring</CardTitle>
                        <CardDescription>
                            Switch to the improved way to explore your data, with natural
                            language. Monitoring will no longer be available on the Pro plan in
                            November, 2025
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Badge variant="secondary" className="ml-auto">
                            Warning
                        </Badge>
                    </CardFooter>
                </Card>
                <Card className="relative w-full max-w-sm overflow-hidden pt-0">
                    <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
                    <img
                        src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Photo by mymind on Unsplash"
                        title="Photo by mymind on Unsplash"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
                    />
                    <CardHeader>
                        <CardTitle>Observability Plus is replacing Monitoring</CardTitle>
                        <CardDescription>
                            Switch to the improved way to explore your data, with natural
                            language. Monitoring will no longer be available on the Pro plan in
                            November, 2025
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Badge variant="secondary" className="ml-auto">
                            Warning
                        </Badge>
                    </CardFooter>
                </Card>
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