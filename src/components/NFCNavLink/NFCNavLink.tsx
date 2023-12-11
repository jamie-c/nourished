import Link from "next/link";

import { usePathname } from "next/navigation";
import type { NavLinkProps } from "./NFCNavLinkTypes";

const NFCNavLink: React.FC<NavLinkProps> = ({ url, disabled, title }) => {
  const pathName = usePathname();
  const active = pathName === url ? "border-b-2 border-white " : "";
  const isDisabled = disabled ? "opacity-50 cursor-not-allowed " : "";

  return (
    <div className="h-full relative flex items-center">
      <Link
        className={`${
          active + isDisabled
        } h-full uppercase text-white font-transat-bold translate-y-0.5 relative peer flex items-center`}
        href={url}
      >
        {title}
      </Link>
      {!disabled && (
        <span className="absolute bottom-5 w-0 h-0.5 bg-white transition-width duration-300 ease peer-hover:w-full"></span>
      )}
    </div>
  );
};

export default NFCNavLink;
