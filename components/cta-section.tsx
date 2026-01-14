import { Button } from "@/components/ui/button";
import { ArrowRight02Icon, PlusSignFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="px-4 lg:px-12 text-center space-y-6 pb-16 md:pb-24">
            <div className="relative mx-auto flex w-full flex-col justify-between gap-y-4 border-y px-4 py-8 bg-background dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)]">
                <HugeiconsIcon
                    icon={PlusSignFreeIcons}
                    size={24}
                    color="currentColor"
                    strokeWidth={1}
                    className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
                />
                <HugeiconsIcon
                    icon={PlusSignFreeIcons}
                    size={24}
                    color="currentColor"
                    strokeWidth={1}
                    className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
                />
                <HugeiconsIcon
                    icon={PlusSignFreeIcons}
                    size={24}
                    color="currentColor"
                    strokeWidth={1}
                    className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
                />
                <HugeiconsIcon
                    icon={PlusSignFreeIcons}
                    size={24}
                    color="currentColor"
                    strokeWidth={1}
                    className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
                />

                <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
                <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />
                <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />
                <h2 className="text-center font-semibold text-xl md:text-3xl">
                    Start Building Your Blog Today
                </h2>
                <p className="text-balance text-center font-medium text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
                    Join NexBlog and publish your first article in minutes. No credit card required.
                </p>
                <div className="flex items-center justify-center">
                    <Button size="lg">
                        <Link href="/login" className="flex items-center gap-2">
                            Join Free
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
            </div>
        </section>
    )
}