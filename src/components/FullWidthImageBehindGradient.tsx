import Image from "next/image"

interface InnerProps {
    children: React.ReactNode
}

const InnerProps: React.FC<InnerProps> = ({children}) => {
    return (
        <div className="absolute w-screen h-full flex flex-row items-center content-center text-white text-5xl sm:text-7xl pt-10">
            {children}
        </div>
    )
}

interface OuterProps {
    variant: string,
    imageUrl?: string,
    align?: string,
    children: React.ReactNode
}

type gradientColorsType = {
    [key: string]: string
}


const FullWidthImageBehindGradient: React.FC<OuterProps> = ({variant, imageUrl, align, children}) => {

    const colors: gradientColorsType = {
        primary: 'from-nblg-500 from-10% via-nblg-500 via-15% to-transparent to-75% dark:from-ndag-700 dark:from-5% dark:via-ndag-500 dark:via-10% dark:to-transparent',
        secondary: 'from-nbrg-500 from-10% via-nbrg-500 via-15% to-transparent to-75% dark:from-nbrg-700 dark:from-5% dark:via-nbrg-500 dark:via-10% dark:to-transparent',
        tertiary: 'from-npag-500 from-10% via-npag-500 via-15% to-transparent to-75% dark:from-npag-700 dark:from-5% dark:via-npag-500 dark:via-10% dark:to-transparent',
        dark: 'from-ndag-500 from-10% via-ndag-500 via-15% to-transparent to-75% dark:from-ndag-700 dark:from-5% dark:via-ndag-500 dark:via-10% dark:to-transparent',
        white: 'white',
        transparent: 'transparent'
    }
    const aligns = ['left', 'center', 'right']
    const color = colors[variant] ? colors[variant] : colors['primary']

    interface imageClassNamesType {
        [key: string]: string
    }

    const imageClassNames: imageClassNamesType = {
        left: "absolute inset-0 w-full h-full object-cover object-left",
        center: "absolute inset-0 w-full h-full object-cover object-center",
        right: "absolute inset-0 w-full h-full object-cover object-right",
    }

    let imageClassName = ""

    if (align && aligns.includes(align)) {
        imageClassName = imageClassNames[align]
    } else {
        imageClassName = imageClassNames['center']
    }

    return (
    <div className="relative h-screen-2/3 w-full">
        <Image
            className={imageClassName}
            src={imageUrl || "/images/NourishedCoJamieandLindsey-04.jpg"}
            width={1800}
            height={989}
            alt="Large image of Jamie and Lindsey Conway"
            priority
        />
        <div className={`absolute inset-0 bg-gradient-to-b opacity-75 ${color}`}
        />
        <InnerProps>
            {children}
        </InnerProps>
    </div>
)}

export default FullWidthImageBehindGradient