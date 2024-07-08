import Link from "next/link";

const footerLinks = [
	{
		text: "About",
		href: "/about",
		id: "footer-link-about",
	},
	{
		text: "Blog",
		href: "/blog",
		id: "footer-link-blog",
	},
	{
		text: "Newsletter",
		href: "/newsletter",
		id: "footer-link-newsletter",
	},
	{
		text: "Contact",
		href: "/contact",
		id: "footer-link-contact",
	},
	{
		text: "Work With Us",
		href: "/work-with-us",
		id: "footer-link-work-with-us",
	},
	{
		text: "Online Classes",
		href: "/body-wisdom",
		id: "footer-link-body-wisdom",
	},
	{
		text: "Body Wisdom Mini-Course",
		href: "https://my.practicebetter.io/#/6452605f4c15a8e1b30dd2df/bookings?c=6641804b6c0a3ac512999b29",
		id: "footer-link-body-wisdom-mini-course",
	},
	{
		text: "Book A Discovery Call",
		href: "/call",
		id: "footer-link-call",
	},
];

const FooterLinks = () => (
	<div className="font-transat-bold mt-6 flex flex-col sm:p-8 sm:flex-row flex-wrap items-top justify-center text-center text-xl text-brightgreen-500 uppercase gap-4 w-full max-w-7xl">
		{footerLinks.map((link) => (
			<Link
				key={link.id}
				href={link.href}
				className="underline decoration-2 underline-offset-4 decoration-brightgreen-500 hover:decoration-brightgreen-400 hover:text-brightgreen-400 uppercase text-nowrap"
			>
				{link.text}
			</Link>
		))}
	</div>
);

export default FooterLinks;
