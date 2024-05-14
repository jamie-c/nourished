"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import type { NavLinkProps } from "./NFCNavLinkTypes";

const NFCNavLink: React.FC<NavLinkProps> = ({ url, disabled, title }) => {
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
        <div className="h-full relative flex items-center">
            {!disabled && !active && (
                <span className="absolute bottom-5 w-0 h-0.5 bg-white transition-width duration-300 ease peer-hover:w-full hover:w-full cursor-pointer" />
            )}
            {active && (
                <span className="absolute bottom-5 w-full h-0.5 bg-white transition-all duration-300 ease cursor-pointer" />
            )}
            <Link
                className={`${isDisabled} h-full uppercase text-white font-transat-bold translate-y-0.5 relative peer flex items-center`}
                href={url}
            >
                {liveTitle}
            </Link>
        </div>
    );
};

export default NFCNavLink;
