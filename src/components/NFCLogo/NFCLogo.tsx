import Image from "next/image";
import Link from "next/link";

const NourishedLogoRGBNoPad = "/images/NOURISHED_LOGO_NOTAG_NOPAD_RGB.png";
const NourishedLogoRGB = "/images/NOURISHED_LOGO_NOTAG_RGB.png";
const NourishedLogoWhite = "/images/NOURISHED_LOGO_NOTAG_WHITE.png";

import type { NFCLogoProps } from "./NFCLogoTypes";

const NFCLogo = ({ size, bold, imgUrl, variant }: NFCLogoProps) => {
  const imgSize = {
    sm: {
      width: 100,
      height: 25,
    },
    md: {
      width: 175,
      height: 40,
    },
    lg: {
      width: 200,
      height: 30,
    },
    xl: {
      width: 250,
      height: 55,
    },
  };

  const imgSrc = {
    white: NourishedLogoWhite,
    rgb: NourishedLogoRGB,
    rgbNoPad: NourishedLogoRGBNoPad,
  };

  const width = size ? imgSize[size].width : imgSize.md.width;
  const height = size ? imgSize[size].height : imgSize.md.height;
  const src = imgUrl ?? (variant ? imgSrc[variant] : imgSrc.white);

  return (
    <Link href="/">
      <Image src={src} alt="Nourished" width={width} height={height} />
    </Link>
  );
};

export default NFCLogo;
