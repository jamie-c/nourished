import NavLink from "@/components/NavLink/NavLink";

import type { NavLinks } from "@/components/NFCNavLinks/NFCNavLinksTypes";

const mainNavItems: NavLinks[] = [
	{
		title: "About",
		url: "/about",
		id: "about",
	},
	{
		title: "Work With Me",
		url: "/work-with-me",
		id: "work-with-me",
	},
	{
		title: "Blog",
		url: "/blog",
		id: "blog",
	},
	{
		title: "Contact",
		url: "/contact",
		id: "contact",
	},
];

export const NFCNavLinksHorizontal = () => {
	const navItems = mainNavItems.reduce(
		(acc: NavLinks[], { title, url, id }, i, a) => {
			if (i < a.length - 1) {
				acc.push({ title, url, id });
				acc.push({ title: "divider", url: "", id: `${id}-divider` });
			}
			if (i === a.length - 1) {
				acc.push({ title, url, id });
			}
			return acc;
		},
		[],
	);

	return (
		<nav className="flex-10 flex flex-row items-center justify-end gap-3 text-xl text-white first:before:content-none h-full">
			{navItems.map(({ title, url, id }) => {
				if (title !== "divider") {
					return <NavLink key={id} url={url} title={title} />;
				}
				if (title === "divider") {
					return (
						<span
							key={`${id}-divider`}
							className="bg-white h-1.5 rounded-full w-1.5"
						/>
					);
				}
				return;
			})}
			{/* <span className="bg-white h-1.5 rounded-full w-1.5" />
			<UserAccountIcon /> */}
		</nav>
	);
};

export const NFCNavLinksVertical = () => {
	return (
		<nav className="flex flex-col justify-start items-end gap-0 text-4xl text-white pt-10 pr-8">
			{mainNavItems.map(({ title, url }, i) => {
				if (title !== "divider") {
					return (
						<div key={title} className="h-20">
							<NavLink title={title} url={url} disabled={false} />
						</div>
					);
				}
				if (title === "divider") {
					return;
				}
				return;
			})}
		</nav>
	);
};
