import Link from "next/link";

const TermsOfServiceLinks = () => (
	<div className="font-transat flex flex-col sm:flex-row flex-wrap items-top justify-center text-xl text-center gap-4 w-full max-w-7xl">
		<Link
			href="/terms-of-service"
			className="underline underline-offset-4 decoration-brightgreen-500 hover:decoration-brightgreen-400 text-brightgreen-500 hover:text-brightgreen-400 text-nowrap"
		>
			Terms of Service
		</Link>
	</div>
);

export default TermsOfServiceLinks;
