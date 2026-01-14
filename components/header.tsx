"use client";
import { MobileNav } from "@/components/mobile-nav";
import { Button, buttonVariants } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggler } from "./theme-toggler";
import { Activity } from "react";
import { Badge } from "./ui/badge";

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
		href: "#",
	}
];

export function Header() {
	const scrolled = useScroll(10);
	const isAuth = false;
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
					{navLinks.map((link, i) => (
						<Link
							className={buttonVariants({ variant: "ghost" })}
							href={{ pathname: link.href }}
							key={i}
						>
							{link.label}
						</Link>
					))}
					<Activity mode={isAuth ? "visible" : "hidden"}>
						<Badge>authed</Badge>
					</Activity>
					<Activity mode={isAuth ? "hidden" : "visible"}>
						<Button variant="outline">
							<Link href="/login" >Sign In</Link>
						</Button>
						<Button>
							<Link href="/signup" >Get Started</Link>
						</Button>
					</Activity>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
