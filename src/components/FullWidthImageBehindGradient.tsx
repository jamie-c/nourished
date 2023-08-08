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
    children: React.ReactNode
}

const FullWidthImageBehindGradient: React.FC<OuterProps> = ({variant, children}) => (
    <div className="relative h-screen-2/3 w-full">
        <Image
            className="absolute inset-0 w-full h-full object-cover object-right"
            src="/images/NourishedCoJamieandLindsey-04.jpg"
            width={1800}
            height={989}
            alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b opacity-75 
            from-ndag-500 from-10% 
            via-ndag-500 via-10%
            to-transparent to-75%
            dark:from-ndag-700 dark:from-5% 
            dark:via-ndag-500 dark:via-10%
            dark:to-transparent" 
        />
        <InnerProps>
            {children}
        </InnerProps>
    </div>
)

export default FullWidthImageBehindGradient