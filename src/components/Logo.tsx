import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"

type Props = {
    txtSize: string,
    bold: boolean
}

const Logo: NextPage<Props> = () => {

    const classNames = 'py-1'

    return (
    <div>
            <Link 
                href="/"
            >
                <Image
                    src="/images/NOURISHED_LOGO_NOTAG_WHITE.png"
                    alt="Nourished"
                    width={175}
                    height={40}
                />
            </Link>
    </div>
    )
}

export default Logo