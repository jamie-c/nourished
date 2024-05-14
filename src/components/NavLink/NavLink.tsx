"use client"
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { NFCNavLink } from "@nourishedco/ui";
import { useEffect, useState } from "react";
import type { NavLinkProps } from "./NavLinkTypes";

const NavLink: React.FC<NavLinkProps> = ({ url, disabled, title }) => {
    const { data: session, update } = useSession()
    const pathName = usePathname();
    const active = pathName === url;
    const isDisabled = disabled ? "opacity-50 cursor-not-allowed " : "";
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [liveTitle, setLiveTitle] = useState(title);
    const [updatedUrl, setUpdatedUrl] = useState(url);

    useEffect(() => {
        if (session) {
            setIsLoggedIn(true);
        }
    }, [session]);

    useEffect(() => {
        if (title === "Login" && isLoggedIn) {
            setLiveTitle("Account");
            setUpdatedUrl("/account");
        } else {
            return;
        }
    }, [isLoggedIn, title]);

    return (
        <NFCNavLink url={updatedUrl} title={liveTitle} active={active} disabled={disabled} />
    );
};

export default NavLink;
