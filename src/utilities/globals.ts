export type VariantsColors =
  | "bg-bluegreen-500"
  | "bg-brightgreen-500"
  | "bg-lightgreen-500"
  | "bg-darkgreen-500"
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
  primary: "bg-bluegreen-500",
  secondary: "bg-brightgreen-500",
  tertiary: "bg-lightgreen-500",
  dark: "bg-darkgreen-500",
  white: "white",
};
