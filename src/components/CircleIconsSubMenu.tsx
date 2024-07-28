import type { VariantsOptions } from "@nourishedco/ui";
// import { NFCCircle } from "@nourishedco/ui";
import Image from "next/image";
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
		page: "work-with-us",
		icon: "clipboard",
		variant: "darkred",
		title: "Work With Me",
	},
];

const CircleIconsSubMenu = () => (
	<div className="flex flex-col md:flex-row items-center justify-evenly w-full py-28 md:py-32 max-w-7xl mx-auto">
		{navs.map((nav) => (
			<Link key={`${nav.page}-link`} href={`/${nav.page}`}>
				{/* <NFCCircle
					size="3xl"
					variant={nav.variant}
					title={nav.title}
					imageUrl={`/images/icons/${nav.icon}`}
				/> */}
				<Image
					className="py-6 md:py-0 px-24 sm:px-6 md:px-4 lg:px-10 w-auto h-auto"
					src={`/images/circle-icon-${nav.page}.png`}
					width={200}
					height={200}
					alt="Nourished"
				/>
			</Link>
		))}
	</div>
);

export default CircleIconsSubMenu;
