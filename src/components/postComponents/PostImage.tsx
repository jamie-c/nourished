/* eslint-disable @next/next/no-img-element */

interface InnerProps {
	children: React.ReactNode;
}

const InnerProps: React.FC<InnerProps> = ({ children }) => {
	return (
		<div className="absolute w-full h-full flex flex-row items-center content-center text-white text-2xl p-10">
			<p className="font-chalet-ny text-balance text-center uppercase line-clamp-4">
				{children}
			</p>
		</div>
	);
};

interface OuterProps {
	variant: string;
	imageUrl: string;
	align?: string;
	children: React.ReactNode;
}

type gradientColorsType = {
	[key: string]: string;
};

const PostImage: React.FC<OuterProps> = ({
	variant,
	imageUrl,
	align,
	children,
}) => {
	const colors: gradientColorsType = {
		primary: "from-bluegreen-500/75 dark:from-darkgreen-500/75",
		secondary: "from-brightgreen-500/75 dark:from-brightgreen-500/75",
		tertiary: "from-lightgreen-500/75 dark:from-lightgreen-500/75",
		dark: "from-darkgreen-500/75 dark:from-darkgreen-500/75",
	};
	const aligns = ["left", "center", "right"];
	const color = colors[variant] ? colors[variant] : colors.primary;
	const baseClassName =
		"absolute inset-0 bg-gradient-to-b from-100% to-transparent mix-blend-multiply backdrop-blur-lg";
	const bgColorClassName = `${baseClassName} ${color}`;

	interface imageClassNamesType {
		[key: string]: string;
	}

	const imageClassNames: imageClassNamesType = {
		left: "absolute inset-0 w-full h-full object-cover object-left",
		center: "absolute inset-0 w-full h-full object-cover object-center",
		right: "absolute inset-0 w-full h-full object-cover object-right",
	};

	let imageClassName = "";

	if (align && aligns.includes(align)) {
		imageClassName = imageClassNames[align];
	} else {
		imageClassName = imageClassNames.center;
	}

	return (
		<div className="relative h-72 w-96 max-w-full max-h-md">
			<img
				className={imageClassName}
				src={imageUrl}
				alt="blog post"
				loading="lazy"
			/>
			<div className={bgColorClassName} />
			<InnerProps>{children}</InnerProps>
		</div>
	);
};

export default PostImage;
