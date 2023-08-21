import Link from "next/link"

interface ButtonProps {
    href: string,
    disabled?: boolean,
    children: React.ReactNode
}

const PrimaryButton: React.FC<ButtonProps> = ({ href, disabled, children }) => {

    const isDisabled = disabled ? disabled : false

    return (
        <Link href={href}>
            <button 
                disabled={isDisabled}
                className={`bg-nblg-500 rounded-md py-4 px-10 text-lg`
                + " hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"}
            >
                {children}
            </button>
        </Link>
    )
}

export default PrimaryButton