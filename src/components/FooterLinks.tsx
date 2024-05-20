import localFont from "next/font/local";
import Link from "next/link";

const transatBold = localFont({
	src: "../app/fonts/transat/TransatBold.ttf",
	display: "swap",
});

const FooterLinks = () => (
	<div
		className={`${transatBold.className} pt-32 flex flex-col sm:flex-row items-top justify-between text-center text-2xl text-brightgreen-500 uppercase gap-8 w-screen max-w-7xl`}
	>
		<span className="w-full sm:w-screen-1/3 flex flex-col items-center justify-start gap-6">
			<Link href="/about">
				<button
					type="button"
					className="border-b-2 border-b-brightgreen-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
				>
					About
				</button>
			</Link>
			<Link href="/blog">
				<button
					type="button"
					className="border-b-2 border-b-brightgreen-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Blog
				</button>
			</Link>
			<Link href="/newsletter">
				<button
					type="button"
					className="border-b-2 border-b-brightgreen-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Newsletter
				</button>
			</Link>
			<Link href="/contact">
				<button
					type="button"
					className="border-b-2 border-b-brightgreen-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Contact
				</button>
			</Link>
		</span>
		<span className="w-full sm:w-screen-1/3 flex flex-col items-center justify-start gap-6">
			<Link href="/work-with-us">
				<button
					type="button"
					className="border-b-2 border-b-brightgreen-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Work With Us
				</button>
			</Link>
			<Link href="/body-wisdom">
				<button
					type="button"
					className="border-b-2 border-b-brightgreen-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Online Classes
				</button>
			</Link>
			<Link href="/body-wisdom/course-content">
				<button
					type="button"
					className="border-b-2 border-b-brightgreen-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Body Wisdom Mini-Course
				</button>
			</Link>
			<Link href="/call">
				<button
					type="button"
					className="border-b-2 border-b-brightgreen-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Book A Discovery Call
				</button>
			</Link>
		</span>
	</div>
);

export default FooterLinks;
