import NFCLogo from "@/components/NFCLogo/NFCLogo";
import { NFCNavLinksHorizontal } from "../NFCNavLinks/NFCNavLinks";

const Header = () => {

  const headerClassNames = {
    navLinksHidden:
      "sticky top-0 w-screen z-40 bg-opacity-50 dark:bg-opacity-50 bg-nblg-500 dark:bg-nblg-700 backdrop-filter dark:backdrop-filter backdrop-blur-md dark:backdrop-blur-lg transition-all duration-300",
    navLinksVisible:
      "fixed top-0 w-screen h-screen z-40 bg-opacity-50 dark:bg-opacity-50 bg-nblg-500 dark:bg-nblg-700 backdrop-filter dark:backdrop-filter backdrop-blur-md dark:backdrop-blur-lg transition-all duration-300",
  };

  return (
    <header
      className={`drop-shadow-xl ${headerClassNames.navLinksHidden}`}
    >
      <div className="px-7 flex flex-row items-center justify-between max-w-7xl h-16 m-auto">
        <NFCLogo />
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
