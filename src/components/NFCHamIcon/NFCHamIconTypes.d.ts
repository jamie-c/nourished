import type { VariantsOptions } from "@/utilities/globals";

export type NFCHamIconColors =
	| "stroke-bluegreen-500"
	| "stroke-brightgreen-500"
	| "stroke-lightgreen-500"
	| "stroke-darkgreen-500"
	| "stroke-white";

export type NFCHamIconVariantTypes = {
	[key in VariantsOptions]: NFCHamIconColors;
};

export type NFCHamIconProps = {
	active: boolean;
	color?: VariantsOptions;
};
