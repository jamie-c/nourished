import Link from "next/link";
import React from "react";
import { variants } from "../../utilities/globals";

import type { ButtonProps } from "./NFCButtonTypes";

const NFCButton: React.FC<ButtonProps> = ({
    href,
    disabled,
    variant,
    children,
    classes,
}) => {
    const customClass = classes ?? "";

    let defaultClass =
        "font-transat-med rounded-md pt-5 pb-4 px-10 text-lg text-white text-center";

    if (disabled) {
        defaultClass += " opacity-50 cursor-not-allowed";
    } else {
        defaultClass += " hover:bg-opacity-90";
    }

    if (variant && Object.keys(variants).includes(variant)) {
        defaultClass += ` ${variants[variant]}`;
    } else {
        defaultClass += ` ${variants.primary}`;
    }

    if (customClass.length > 0) {
        defaultClass += ` ${customClass}`;
    }

    return (
        <Link href={href} className={defaultClass}>
            {children}
        </Link>
    );
};

export default NFCButton;
