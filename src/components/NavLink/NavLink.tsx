"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavLinkProps } from "./NavLinkTypes";

const NavLink: React.FC<NavLinkProps> = ({ url, disabled, title }) => {
	const pathName = usePathname();
	const [active, setActive] = useState<boolean>(pathName === url);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setActive(pathName === url);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathName]);

	const staticClasses =
		"uppercase text-white flex group text-nowrap translate-y-1 items-center transform-gpu justify-center font-transat-bold h-16 relative";
	const cursorClasses = `${disabled ? "cursor-not-allowed" : "cursor-pointer"}`;
	const disabledClasses = `${cursorClasses} ${disabled ? "opacity-50" : ""}`;

	const linkClasses = `${staticClasses} ${disabledClasses}`;

	return (
		<Link href={!disabled ? url : ""} className={linkClasses}>
			<div className="relative">
				<div>
					<span className={`relative ${cursorClasses}`}>{title}</span>
				</div>
				{!disabled && !active && (
					<span className="absolute bottom-0 left-0 w-0 border-b-2 border-white transition-width duration-300 ease-out group-hover:w-full hover:w-full cursor-pointer" />
				)}
				{active && (
					<span className="absolute bottom-0 left-0 w-full border-b-2 border-white" />
				)}
			</div>
		</Link>
	);
};

export default NavLink;
