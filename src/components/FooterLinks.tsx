import Link from "next/link";

const FooterLinks = () => (
	<div className="font-transat-bold mt-6 flex flex-col sm:p-8 sm:flex-row flex-wrap items-top justify-center text-center text-xl text-brightgreen-500 uppercase gap-4 w-full max-w-7xl">
		<Link
			href="/about"
			className="border-b-2 border-b-brightgreen-500 hover:border-b-brightgreen-400 hover:text-brightgreen-400 uppercase text-nowrap"
		>
			About
		</Link>
		<Link
			href="/blog"
			className="border-b-2 border-b-brightgreen-500 hover:border-b-brightgreen-400 hover:text-brightgreen-400 uppercase text-nowrap"
		>
			Blog
		</Link>
		<Link
			href="/newsletter"
			className="border-b-2 border-b-brightgreen-500 hover:border-b-brightgreen-400 hover:text-brightgreen-400 uppercase text-nowrap"
		>
			Newsletter
		</Link>
		<Link
			href="/contact"
			className="border-b-2 border-b-brightgreen-500 hover:border-b-brightgreen-400 hover:text-brightgreen-400 uppercase text-nowrap"
		>
			Contact
		</Link>
		<Link
			href="/work-with-us"
			className="border-b-2 border-b-brightgreen-500 hover:border-b-brightgreen-400 hover:text-brightgreen-400 uppercase text-nowrap"
		>
			Work With Us
		</Link>
		<Link
			href="/body-wisdom"
			className="border-b-2 border-b-brightgreen-500 hover:border-b-brightgreen-400 hover:text-brightgreen-400 uppercase text-nowrap"
		>
			Online Classes
		</Link>
		<Link
			href="https://my.practicebetter.io/#/6452605f4c15a8e1b30dd2df/bookings?c=6641804b6c0a3ac512999b29"
			className="border-b-2 border-b-brightgreen-500 hover:border-b-brightgreen-400 hover:text-brightgreen-400 uppercase text-nowrap"
		>
			Body Wisdom Mini-Course
		</Link>
		<Link
			href="/call"
			className="border-b-2 border-b-brightgreen-500 hover:border-b-brightgreen-400 hover:text-brightgreen-400 uppercase text-nowrap"
		>
			Book A Discovery Call
		</Link>
	</div>
);

export default FooterLinks;
