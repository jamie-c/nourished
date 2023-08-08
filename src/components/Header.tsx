"use client"

import HamburgerIcon from "@/components/icons/HamburgerIcon"
import { useEffect, useState } from "react"
import Logo from "./Logo"
import NavLinksHorizontal from "./NavLinks"


const Header = () => {

    const headerClassNames = {
        navLinksHidden: "sticky top-0 w-screen z-40 bg-opacity-50 dark:bg-opacity-50 bg-nblg-500 dark:bg-nblg-700 backdrop-filter dark:backdrop-filter backdrop-blur-md dark:backdrop-blur-lg transition-all duration-300",
        navLinksVisible: "fixed top-0 w-screen h-screen z-40 bg-opacity-50 dark:bg-opacity-50 bg-nblg-500 dark:bg-nblg-700 backdrop-filter dark:backdrop-filter backdrop-blur-md dark:backdrop-blur-lg transition-all duration-300"
    }

    const [ toggleHam, setToggleHam ] = useState(false)
    const [ headerClass, setHeaderClass ] = useState(headerClassNames.navLinksHidden)
    const active = toggleHam ? 'active' : ''

    const handleHamburgerIconClick = () => {
        setToggleHam(!toggleHam)
        if (active === 'active') {
            setHeaderClass(headerClassNames.navLinksHidden)
        } else {
            setHeaderClass(headerClassNames.navLinksVisible)
        }
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? `drop-shadow-xl ${headerClass}` : headerClass}>
            <div className="px-7 flex flex-row items-center justify-between max-w-7xl h-16 m-auto ">
                <Logo txtSize="text-2xl" bold={true} />
                <span className="hidden md:flex">
                    <NavLinksHorizontal />
                </span>
                <span 
                    className="flex md:hidden flex-row items-center h-16 justify-center m-0 overflow-hidden absolute w-12 right-4 top-0"
                    onClick={handleHamburgerIconClick}
                    >
                    <HamburgerIcon active={active} />
                </span>
            </div>
        </header>
    )
}

export default Header
