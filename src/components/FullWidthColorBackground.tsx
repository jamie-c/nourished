import React from "react"

interface InnerProps {
    textColor?: string,
    children: React.ReactNode
}

const InnerProps: React.FC<InnerProps> = ({textColor, children}) => {
    return (
        <div className={`max-w-3xl md:max-w-7xl text-${textColor} text-2xl text-center px-4 sm:px-8 md:px-20`}>
            {children}
        </div>
    )
}

interface OuterProps {
    variant: string,
    textColor?: string,
    children: React.ReactNode
}

type bgColorsType = {
    [key: string]: string
}

const colors: bgColorsType = {
    primary: 'nblg-500',
    secondary: 'nbrg-500',
    tertiary: 'npag-500',
    dark: 'ndag-500',
    white: 'white',
}

const FullWidthColorBackground: React.FC<OuterProps> = ({variant, textColor, children}) => {

    const bgColor = colors[variant] ? colors[variant] : colors['primary']
    let txtColor
    if (textColor) {
        txtColor = colors[textColor]
    } else {
        txtColor = colors['white']
    }

    return (
        <div className={`relative w-full bg-${bgColor} py-28 flex flex-col items-center justify-center`}>
            <InnerProps textColor={txtColor}>
                {children}
            </InnerProps>
        </div>
    )
}

export default FullWidthColorBackground