import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function HeroSection() {
    return (
        <>
            <AnimatedGridPattern className="text-primary pt-14" numSquares={26} maxOpacity={0.4} />
            <section className="container px-4 pt-24 text-center h-screen flex flex-col max-w-7xl">
                <Link
                    href="/blogs"
                    className="hover:bg-background dark:hover:border-t-border bg-background backdrop-blur-sm group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-sm">Browse All Articles</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                            <span className="flex size-6">
                                <HugeiconsIcon
                                    icon={ArrowRight02Icon}
                                    size={16}
                                    color="currentColor"
                                    strokeWidth={1.5}
                                    className="size-4 m-auto"
                                />
                            </span>
                            <span className="flex size-6">
                                <HugeiconsIcon
                                    icon={ArrowRight02Icon}
                                    size={16}
                                    color="currentColor"
                                    strokeWidth={1.5}
                                    className="size-4 m-auto"
                                />
                            </span>
                        </div>
                    </div>
                </Link>
                <h1 className="mt-8 mx-auto text-center md:max-w-4xl lg:max-w-7xl text-4xl sm:text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                    Welcome to the <span className="text-primary">NexBlog</span> Community
                </h1>
                <h2 className="mt-8 mx-auto max-w-2xl text-balance text-xl text-foreground/90">
                    A space for developers to share tutorials, insights, and build together.
                </h2>
            </section>
        </>
    )
}