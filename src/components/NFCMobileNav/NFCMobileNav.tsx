"use client";

// import { useSession } from "next-auth/react"
import NFCLogo from "@/components/NFCLogo/NFCLogo";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import NFCHamIcon from "../NFCHamIcon/NFCHamIcon";
import { NFCNavLinksVertical } from "../NFCNavLinks/NFCNavLinks";

const NFCMobileNav = () => {
  const { data: session, status } = useSession()

  useEffect(() => {
  console.log(session, status)
  }, [session, status])

  const headerClassNames = {
    base: "top-0 left-0 w-screen z-40 bg-opacity-50 dark:bg-opacity-50 bg-nblg-500 dark:bg-nblg-700 backdrop-filter dark:backdrop-filter backdrop-blur-md dark:backdrop-blur-lg transition-all duration-300",
    mobileNavLinksHidden: "sticky",
    mobileNavLinksVisible: "fixed h-screen",
  };

  const [toggleHam, setToggleHam] = useState(false);
  const [headerClass, setHeaderClass] = useState(`${headerClassNames.mobileNavLinksHidden} ${headerClassNames.base}`,);

  const handleHamburgerIconClick = () => {
    const {base, mobileNavLinksHidden, mobileNavLinksVisible} = headerClassNames;
    setToggleHam(!toggleHam);
    if (toggleHam) {
      setHeaderClass(base + ' ' + mobileNavLinksHidden);
    } else {
      setHeaderClass(base + ' ' + mobileNavLinksVisible);
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={scrolled ? `drop-shadow-xl ${headerClass}` : headerClass}
      onClick={handleHamburgerIconClick}
    >
        <div className="px-7 flex flex-row items-center justify-between max-w-7xl h-16 m-auto ">
            <NFCLogo />
            <button
                className="flex md:hidden flex-row items-center h-16 justify-center m-0 overflow-hidden absolute w-12 right-4 top-0"
                onClick={handleHamburgerIconClick}
            >
                <NFCHamIcon active={toggleHam} />
            </button>
        </div>
            <div className="h-full flex flex-col">{toggleHam && <NFCNavLinksVertical />}</div>
    </header>
  );
};

export default NFCMobileNav;
