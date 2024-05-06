import type { NFCHamIconProps, NFCHamIconVariantTypes } from "./NFCHamIconTypes";

const NFCHamIconVariants: NFCHamIconVariantTypes = {
	primary: "stroke-bluegreen-500",
	secondary: "stroke-brightgreen-500",
	tertiary: "stroke-lightgreen-500",
	dark: "stroke-darkgreen-500",
	white: "stroke-white",
};

const NFCHamIcon = ({ active, color }: NFCHamIconProps) => {
  const className = `ham z-50 hamRotate ${active ? "active" : ""}`;
  const variant = NFCHamIconVariants[color ?? "white"];

  return (
    <svg className={className} viewBox="0 0 100 100" width="50">
      <title>Menu Icon</title>
      <path
        className={`line top ${variant}`}
        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
      />
      <path className={`line middle ${variant}`} d="m 70,50 h -40" />
      <path
        className={`line bottom ${variant}`}
        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
      />
    </svg>
  );
};

export default NFCHamIcon;
