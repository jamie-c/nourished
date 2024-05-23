import Link from "next/link";

interface ButtonProps {
	href: string;
	variant?: string;
	disabled?: boolean;
	children: React.ReactNode;
}

type variantsType = {
	[key: string]: string;
};

const StyledLink: React.FC<ButtonProps> = ({
	href,
	disabled,
	variant,
	children,
}) => {
	let linkClass = "border-b-2 disabled:cursor-not-allowed";

	const variants: variantsType = {
		primary:
			"text-bluegreen-500 border-b-bluegreen-500 hover:border-b-bluegreen-700 hover:text-bluegreen-700",
		secondary:
			"text-brightgreen-500 border-b-brightgreen-500 hover:border-b-brightgreen-700 hover:text-brightgreen-700",
		tertiary:
			"text-lightgreen-500 border-b-lightgreen-500 hover:border-b-lightgreen-700 hover:text-lightgreen-700",
		dark: "text-darkgreen-500 border-b-darkgreen-500 hover:border-b-darkgreen-700 hover:text-darkgreen-700",
		white: "text-white border-b-white hover:border-b-0 hover:text-white",
	};

	if (variant && Object.keys(variants).includes(variant)) {
		linkClass = `${linkClass} ${variants[variant]}`;
	} else {
		linkClass = `${linkClass} ${variants.primary}`;
	}

	const isDisabled = disabled ? disabled : false;

	const externalProps = href.startsWith("http")
		? {
				target: "_blank",
				rel: "noopener noreferrer",
		  }
		: {};

	return (
		<span className="relative h-4 mb-2">
			<Link className={linkClass} href={href} {...externalProps}>
				<button disabled={isDisabled}>{children}</button>
			</Link>
		</span>
	);
};

export default StyledLink;
