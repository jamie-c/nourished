export type NFCLogoSizes = "sm" | "md" | "lg" | "xl";
export type NFCLogoVariants = "white" | "rgb" | "rgbNoPad";

export type NFCLogoProps = {
  size?: NFCLogoSizes;
  bold?: boolean;
  variant?: NFCLogoVariants;
  imgUrl?: string;
};
