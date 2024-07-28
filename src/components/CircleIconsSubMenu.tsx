import type { VariantsOptions } from "@nourishedco/ui";
import { NFCCircle } from "@nourishedco/ui";
import Link from "next/link";

type Nav = {
	page: string;
	icon: string;
	variant: VariantsOptions;
	title: string;
};

const navs: Nav[] = [
	{
		page: "about",
		icon: "speech-bubble",
		variant: "lighttan",
		title: "About Us",
	},
	{
		page: "blog",
		icon: "leaf",
		variant: "peach",
		title: "Blog",
	},
	{
		page: "newsletter",
		icon: "envelope",
		variant: "pink",
		title: "Newsletter",
	},
	{
		page: "work-with-me",
		icon: "clipboard",
		variant: "darkred",
		title: "Work With Me",
	},
];

const CircleIconsSubMenu = () => (
	<div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 lg:flex lg:flex-row items-center justify-evenly gap-4 w-full my-28 max-w-7xl mx-auto">
		{navs.map((nav) => (
			<Link key={`${nav.page}-link`} href={`/${nav.page}`}>
				<NFCCircle
					size="3xl"
					variant={nav.variant}
					title={nav.title}
					imageUrl={`/images/icons/${nav.icon}.png`}
					classes="shrink m-auto"
				/>
			</Link>
		))}
	</div>
);

export default CircleIconsSubMenu;
