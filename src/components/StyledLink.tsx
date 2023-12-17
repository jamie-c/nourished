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

const StyledLink: React.FC<ButtonProps> = ({
    href,
    disabled,
    variant,
    children,
}) => {
    let linkClass = "border-b-2 disabled:cursor-not-allowed"

    const variants: variantsType = {
        primary:
            "text-nblg-500 border-b-nblg-500 hover:border-b-nblg-700 hover:text-nblg-700",
        secondary:
            "text-nbrg-500 border-b-nbrg-500 hover:border-b-nbrg-700 hover:text-nbrg-700",
        tertiary:
            "text-npag-500 border-b-npag-500 hover:border-b-npag-700 hover:text-npag-700",
        dark: "text-ndag-500 border-b-ndag-500 hover:border-b-ndag-700 hover:text-ndag-700",
        white: "text-white border-b-white hover:border-b-0 hover:text-white",
    }

    if (variant && Object.keys(variants).includes(variant)) {
        linkClass = `${linkClass} ${variants[variant]}`
    } else {
        linkClass = `${linkClass} ${variants.primary}`
    }

    const isDisabled = disabled ? disabled : false

    const externalProps = href.startsWith("http")
        ? {
              target: "_blank",
              rel: "noopener noreferrer",
          }
        : {}

    return (
        <span className="relative h-4 mb-2">
            <Link className={linkClass} href={href} {...externalProps}>
                <button disabled={isDisabled}>{children}</button>
            </Link>
        </span>
    )
}

export default StyledLink
