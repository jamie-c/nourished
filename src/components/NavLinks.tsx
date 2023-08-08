import Link from "next/link"
import { usePathname } from 'next/navigation'
import NavItem from "./NavItem"

const mainNavItems = [['About', '/about'], ['Work With Us', '/work-with-us'], ['Blog', '/blog'], ['Contact', '/contact']]
const beforeContent = "before:content-['•'] before:mr-4 before:text-white"

const NavLinksHorizontal = () => {

    const pathName = usePathname()
    const active = 'border-b-2 border-white'
    const isActive = (href: string) => pathName === href ? active : ''

    return (
        <span>
            <nav className="flex-10 flex flex-row items-center justify-end gap-4 text-xl text-white first:before:content-none ">
                <div><Link className={`${isActive(mainNavItems[0][1])} uppercase font-bold `}href={mainNavItems[0][1]}>{mainNavItems[0][0]}</Link></div>
                <div className={beforeContent}><Link className={`${isActive(mainNavItems[1][1])} uppercase font-bold`}href={mainNavItems[1][1]}>{mainNavItems[1][0]}</Link></div>
                <div className={beforeContent}><Link className={`${isActive(mainNavItems[2][1])} uppercase font-bold`}href={mainNavItems[2][1]}>{mainNavItems[2][0]}</Link></div>
                <div className={beforeContent}><Link className={`${isActive(mainNavItems[3][1])} uppercase font-bold`}href={mainNavItems[3][1]}>{mainNavItems[3][0]}</Link></div>
            </nav>
        </span>
    )
}

export const NavLinksVertical = () => {

    return (
        <span>
            <nav className="flex flex-col justify-start items-end gap-8 text-5xl text-white pt-10 pr-8">
                {mainNavItems.map(([ title, url ]) => (
                    <NavItem key={title} title={title} url={url} />
                ))}
            </nav>
        </span>
    )
}

export default NavLinksHorizontal