import { NFCLogo } from "@nourishedco/ui";
import { NFCNavLinksHorizontal } from "../NFCNavLinks/NFCNavLinks";

const Header = () => {

  const headerClassNames = {
    navLinksHidden:
      "sticky top-0 w-screen z-40 bg-opacity-50 dark:bg-opacity-50 bg-bluegreen-500 dark:bg-bluegreen-700 backdrop-blur-xl dark:backdrop-blur-xl transition-all duration-300",
    navLinksVisible:
      "fixed top-0 w-screen h-screen z-40 bg-opacity-50 dark:bg-opacity-50 bg-bluegreen-500 dark:bg-bluegreen-700 backdrop-blur-xl dark:backdrop-blur-xl transition-all duration-300",
  };

  return (
    <header
      className={`drop-shadow-xl ${headerClassNames.navLinksHidden}`}
    >
      <div className="px-7 flex flex-row items-center justify-between max-w-7xl h-16 m-auto">
        <NFCLogo imgUrl="/images/NOURISHED_LOGO_NOTAG_WHITE.png"/>
        <div className="h-full hidden md:flex">
          <NFCNavLinksHorizontal />
        </div>
        {/* <div
          className="flex md:hidden flex-row items-center h-16 justify-center m-0 overflow-hidden absolute w-12 right-4 top-0"
        >
          <NFCMobileNav />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
