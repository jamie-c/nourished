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

export const NFCHamIconVariants: NFCHamIconVariantTypes = {
  primary: "stroke-nblg-500",
  secondary: "stroke-nbrg-500",
  tertiary: "stroke-npag-500",
  dark: "stroke-ndag-500",
  white: "stroke-white",
};
