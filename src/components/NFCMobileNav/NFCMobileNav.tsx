"use client";

// import { useSession } from "next-auth/react"
import { NFCHamIcon, NFCLogo } from "@nourishedco/ui";
import { useSession } from "next-auth/react";
import type React from "react";
import { useEffect, useState } from "react";
import { NFCNavLinksVertical } from "../NFCNavLinks/NFCNavLinks";

const NFCMobileNav = () => {
	const { data: session, status } = useSession();

	useEffect(() => {
		console.log(session, status);
	}, [session, status]);

	const headerClassNames = {
		base: "flex flex-col items-start justify-start top-0 left-0 w-full overflow-hidden h-16 z-40 bg-opacity-50 dark:bg-opacity-50 bg-bluegreen-500 dark:bg-bluegreen-700 backdrop-filter dark:backdrop-filter backdrop-blur-xl dark:backdrop-blur-xl transition-all duration-150 ease-in",
		mobileNavLinksHidden: "sticky",
		mobileNavLinksVisible: "fixed h-screen",
	};

	const [toggleHam, setToggleHam] = useState(false);
	const [headerClass, setHeaderClass] = useState(
		`${headerClassNames.mobileNavLinksHidden} ${headerClassNames.base}`,
	);

	const closeNav = () => {
		setToggleHam(false);
		setHeaderClass(
			`${headerClassNames.base} ${headerClassNames.mobileNavLinksHidden}`,
		);
	};

	const handleHamburgerIconClick = (
		event: React.MouseEvent | React.KeyboardEvent,
	) => {
		event.preventDefault();
		event.stopPropagation();
		if ("key" in event && event.key === "Escape") {
			setToggleHam(false);
			setHeaderClass(
				`${headerClassNames.base} ${headerClassNames.mobileNavLinksHidden}`,
			);
			return;
		}
		if ("key" in event && event.key !== "Enter") {
			console.log("event.key", event.key);
			return;
		}
		const { base, mobileNavLinksHidden, mobileNavLinksVisible } =
			headerClassNames;
		setToggleHam(!toggleHam);
		if (toggleHam) {
			setHeaderClass(`${base} ${mobileNavLinksHidden}`);
		} else {
			setHeaderClass(`${base} ${mobileNavLinksVisible}`);
		}
	};

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={scrolled ? `drop-shadow-xl ${headerClass}` : headerClass}
			onClick={closeNav}
			onKeyDown={closeNav}
		>
			<div className="px-7 flex flex-row items-center justify-between w-full max-w-7xl max-h-16 min-h-16">
				<NFCLogo />
				<button
					type="button"
					className="flex md:hidden flex-row items-center h-16 justify-center m-0 overflow-hidden absolute w-12 right-4 top-0"
					onClick={handleHamburgerIconClick}
					onKeyDown={handleHamburgerIconClick}
				>
					<NFCHamIcon active={toggleHam} />
				</button>
			</div>
			<div className="w-full">
				<NFCNavLinksVertical />
			</div>
			{/* <div className="h-full flex flex-col">
				{toggleHam && <NFCNavLinksVertical />}
			</div> */}
		</header>
	);
};

export default NFCMobileNav;
