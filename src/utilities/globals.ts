export type VariantsColors =
  | "bg-nblg-500"
  | "bg-nbrg-500"
  | "bg-npag-500"
  | "bg-ndag-500"
  | "white";
export type VariantsOptions =
  | "primary"
  | "secondary"
  | "tertiary"
  | "dark"
  | "white";

export type Variants = {
  [key in VariantsOptions]: VariantsColors;
};

export const variants: Variants = {
  primary: "bg-nblg-500",
  secondary: "bg-nbrg-500",
  tertiary: "bg-npag-500",
  dark: "bg-ndag-500",
  white: "white",
};
