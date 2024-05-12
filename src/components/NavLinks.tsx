import Link from "next/link"
import { usePathname } from "next/navigation"
import NavItem from "./NavItem"

const mainNavItems = [
    ["About", "/about"],
    ["Work With Us", "/work-with-us"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
    ["Login", "/api/auth/signin"],
]
const NavLinksHorizontal = () => {
    const beforeContent =
        "before:content-['•'] sm:before:mr-2 before:mr-3 before:text-white before:text-3xl "
    const bottomBorder =
        "absolute bottom-0.5 left-5 w-0 h-[1.5px] bg-white transition-width duration-300 ease peer-hover:w-[calc(100%-1.4rem)]"

    const pathName = usePathname()
    const active = "border-b-2 border-white"
    const isActive = (href: string) => (pathName === href ? active : "")
    const [firstItemTitle, firstItemUrl] = mainNavItems[0]

    return (
        <div>
            <nav className="flex-10 flex flex-row items-center justify-end gap-3 text-xl text-white first:before:content-none ">
                <div
                    className={`relative before:content-[' '] before:text-white before:text-3xl`}
                >
                    <Link
                        className={`${isActive(
                            firstItemUrl
                        )} uppercase font-bold relative peer`}
                        href={firstItemUrl}
                    >
                        {firstItemTitle}
                    </Link>
                    <span className={"absolute bottom-0.5 left-0 w-0 h-[1.5px] bg-white transition-width duration-300 ease peer-hover:w-full"} />
                </div>
                {mainNavItems.slice(1).map(([title, url], i) => (
                    <div key={i} className={`${beforeContent} relative`}>
                        <Link
                            className={`${isActive(
                                url
                            )} uppercase font-bold relative peer`}
                            href={url}
                        >
                            {title}
                        </Link>
                        <span className={`${bottomBorder}`} />
                    </div>
                ))}
            </nav>
        </div>
    )
}

export const NavLinksVertical = () => {
    return (
        <span>
            <nav className="flex flex-col justify-start items-end gap-8 text-4xl text-white pt-10 pr-8">
                {mainNavItems.map(([title, url]) => (
                    <NavItem key={title} title={title} url={url} />
                ))}
            </nav>
        </span>
    )
}

export default NavLinksHorizontal
