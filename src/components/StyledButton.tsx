import Link from "next/link"

interface ButtonProps {
    href: string
    variant?: string
    disabled?: boolean
    children: React.ReactNode
}

type variantsType = {
    [key: string]: string
}

const StyledButton: React.FC<ButtonProps> = ({
    href,
    disabled,
    variant,
    children,
    ...otherProps
}) => {
    let buttonClass =
        "rounded-md pt-5 pb-4 px-10 text-lg text-white hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"

    const variants: variantsType = {
        primary: "bg-bluegreen-500",
        secondary: "bg-brightgreen-500",
        tertiary: "bg-lightgreen-500",
        dark: "bg-darkgreen-500",
    }

    if (variant && Object.keys(variants).includes(variant)) {
        buttonClass = `${buttonClass} ${variants[variant]}`
    } else {
        buttonClass = `${buttonClass} ${variants.primary}`
    }

    const isDisabled = disabled ? disabled : false

    return (
        <Link href={href} {...otherProps}>
            <button
                type="button"
                disabled={isDisabled}
                className={`font-transat-med ${buttonClass}`}
            >
                {children}
            </button>
        </Link>
    )
}

export default StyledButton
