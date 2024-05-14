"use client"

import { NFCNavLink } from "@nourishedco/ui";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavLinkProps } from "./NavLinkTypes";

const NavLink: React.FC<NavLinkProps> = ({ url, disabled, title }) => {
    const pathName = usePathname();
    const [active, setActive] = useState<boolean>(pathName === url);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        setActive(pathName === url);
    }, [pathName]);

    return (
        <NFCNavLink url={url} title={title} active={active} disabled={disabled} />
    );
};

export default NavLink;
