import type React from "react";

interface InnerProps {
	textColor?: string;
	children: React.ReactNode;
}

const InnerProps: React.FC<InnerProps> = ({ textColor, children }) => {
	return (
		<div
			className={`max-w-3xl md:max-w-7xl ${textColor} text-2xl text-center text-balance px-4 sm:px-8 md:px-20`}
		>
			{children}
		</div>
	);
};

interface OuterProps {
	variant: string;
	textColor?: string;
	children: React.ReactNode;
}

type bgColorsType = {
	[key: string]: string;
};

const bgColors: bgColorsType = {
	primary: "bg-bluegreen-500",
	secondary: "bg-brightgreen-500",
	tertiary: "bg-lightgreen-500",
	dark: "bg-darkgreen-500",
	white: "bg-white",
};

const textColors: bgColorsType = {
	primary: "text-bluegreen-500",
	secondary: "text-brightgreen-500",
	tertiary: "text-lightgreen-500",
	dark: "text-darkgreen-500",
	white: "text-white",
};

const FullWidthColorBackground: React.FC<OuterProps> = ({
	variant,
	textColor,
	children,
}) => {
	const bgColor = bgColors[variant] ? bgColors[variant] : bgColors.primary;
	let txtColor: string;
	if (textColor) {
		txtColor = textColors[textColor];
	} else {
		txtColor = textColors.white;
	}

	return (
		<div
			className={`relative w-full ${bgColor} py-28 flex flex-col items-center justify-center`}
		>
			<InnerProps textColor={txtColor}>{children}</InnerProps>
		</div>
	);
};

export default FullWidthColorBackground;
