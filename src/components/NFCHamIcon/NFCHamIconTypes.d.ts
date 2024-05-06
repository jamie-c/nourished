import type { VariantsOptions } from "@/utilities/globals";

export type NFCHamIconColors =
	| "stroke-nblg-500"
	| "stroke-nbrg-500"
	| "stroke-npag-500"
	| "stroke-ndag-500"
	| "stroke-white";

export type NFCHamIconVariantTypes = {
	[key in VariantsOptions]: NFCHamIconColors;
};

export type NFCHamIconProps = {
	active: boolean;
	color?: VariantsOptions;
};
