import { NextPage } from "next"
import Link from "next/link"

type Props = {
    title: string,
    url: string,
}

const NavItem: NextPage<Props> = ({ title, url } ) => {
    return <Link 
                className={`uppercase font-semibold z-50`}
                href={url}
            >
                {title}
            </Link>
}

export default NavItem