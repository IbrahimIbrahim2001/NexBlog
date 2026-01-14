import { Button, buttonVariants } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from '@hugeicons/react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Activity } from "react";
import { createPortal } from "react-dom";
import { ModeToggle } from "./mode-toggle";

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
	},
	{
		label: "Profile",
		href: "/profile",
	}
];

export function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const { isMobile } = useMediaQuery();
	const { data: session } = useSession();
	const isAuthed = Boolean(session?.user);
	const pathname = usePathname();
	// 🚫 Disable body scroll when open
	React.useEffect(() => {
		if (open && isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		// Cleanup on unmount too
		return () => {
			document.body.style.overflow = "";
		};
	}, [open, isMobile]);

	return (
		<>
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				{open ? (
					<HugeiconsIcon
						icon={Cancel01Icon}
						size={18}
						color="currentColor"
						strokeWidth={1.5}
					/>
				) : (
					<HugeiconsIcon
						icon={Menu01Icon}
						size={18}
						color="currentColor"
						strokeWidth={1.5}
					/>
				)}
			</Button>
			{open &&
				createPortal(
					<div
						className={cn(
							"bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50",
							"fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden"
						)}
						id="mobile-menu"
					>
						<div
							className={cn(
								"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
								"size-full p-4"
							)}
							data-slot={open ? "open" : "closed"}
						>
							<div className="grid gap-y-2">
								{navLinks.map((link) => {
									const isActive = Boolean(pathname === link.href);
									if (link.href === "/profile" && !isAuthed) {
										return null;
									}
									return (
										<Link
											className={cn(buttonVariants({
												variant: "ghost",
												className: "justify-start",
											}), isActive && "text-primary")}
											onClick={() => setOpen(false)}
											href={{ pathname: link.href }}
											key={link.label}
										>
											{link.label}
										</Link>
									);
								})}
							</div>
							<Activity mode={isAuthed ? "hidden" : "visible"}>
								<div className="mt-12 flex flex-col gap-2">
									<Link href="/login" >
										<Button className="w-full" variant="outline" onClick={() => setOpen(false)}>
											Sign In
										</Button>
									</Link>
								</div>
							</Activity>
							<div className="absolute bottom-5 right-5">
								<ModeToggle />
							</div>
						</div>
					</div>,
					document.body
				)}
		</>
	);
}
