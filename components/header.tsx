"use client";
import { MobileNav } from "@/components/mobile-nav";
import { Button, buttonVariants } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggler } from "./theme-toggler";
import { Skeleton } from "./ui/skeleton";
import { UserAvatar } from "./user-avatar";

export const navLinks = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Blogs",
		href: "/blogs",
	},
	{
		label: "Create Blog",
		href: "/blogs/create-blog",
	}
];
export function Header() {
	const scrolled = useScroll(10);
	const { data: session, isPending } = useSession();
	const isAuthed = Boolean(session?.user);
	const pathname = usePathname();
	return (
		<header
			className={cn("fixed top-0 z-50 w-full border-transparent border-b", {
				"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
				<div className="rounded-md p-2 hover:bg-accent font-semibold text-lg flex items-center gap-1">
					<Link href="/">
						{/* <Logo className="h-4.5" /> */}
						<p className="font-semibold text-lg">
							Nex<span className="text-primary">Blog</span>
						</p>
					</Link>
				</div>
				<div className="hidden items-center gap-1 md:flex">
					<ThemeToggler />
					{navLinks.map((link, i) => {
						const isActive = Boolean(pathname === link.href);
						return (
							<Link
								className={cn(buttonVariants({ variant: "ghost" }), isActive && "bg-accent")}
								href={{ pathname: link.href }}
								key={i}
							>
								{link.label}
							</Link>
						)
					})}

					{isAuthed ? (
						<UserAvatar user={session?.user} />
					) : isPending ? (
						<Skeleton className="size-8 rounded-full" />
					) : (
						<Link href="/login">
							<Button variant="outline">Sign In</Button>
						</Link>
					)}
				</div>
				<MobileNav />
			</nav>
		</header >
	);
}
