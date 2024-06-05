import Image from "next/image";

interface InnerProps {
	children: React.ReactNode;
}

const InnerProps: React.FC<InnerProps> = ({ children }) => {
	return (
		<div className="absolute w-full h-full flex flex-row items-center content-center text-white text-2xl p-10">
			<p className="font-transat-bold text-balance text-center uppercase">
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
		primary: "absolute inset-0 bg-gradient-to-b opacity-75 from-bluegreen-500 from-50% to-transparent dark:from-darkgreen-500 dark:from-50% dark:to-transparent",
		secondary: "absolute inset-0 bg-gradient-to-b opacity-75 from-brightgreen-500 from-50% to-transparent dark:from-brightgreen-500 dark:from-50% dark:to-transparent",
		tertiary: "absolute inset-0 bg-gradient-to-b opacity-75 from-lightgreen-500 from-50% to-transparent dark:from-lightgreen-500 dark:from-50% dark:to-transparent",
		dark: "absolute inset-0 bg-gradient-to-b opacity-75 from-darkgreen-500 from-50% to-transparent dark:from-darkgreen-500 dark:from-50% dark:to-transparent",
	};
	const aligns = ["left", "center", "right"];
	const color = colors[variant] ? colors[variant] : colors.primary;

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
		<div className="relative h-72 w-96 max-w-xs sm:max-w-md max-h-md">
			<Image
				className={imageClassName}
				src={imageUrl}
				fill
				alt="blog post image"
				priority
			/>
			<div className={`${color}`} />
			<InnerProps>{children}</InnerProps>
		</div>
	);
};

export default PostImage;
