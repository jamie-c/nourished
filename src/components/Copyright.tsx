import localFont from 'next/font/local'
import Image from "next/image"

const transatBold = localFont({
    src: '../app/fonts/transat/TransatBold.ttf',
    display: 'swap',
})

// get current year
const year = new Date().getFullYear()

const Copyright = () => (
    <div className="flex flex-col items-center justify-start text-center text-2xl gap-0">
        <Image
            className='pt-10 pb-1 m-0' 
            src="/images/NOURISHED_LOGO_NOTAG_NOPAD_RGB.png"
            width={200}
            height={30}
            alt="Nourished"
        />
        <p className={`${transatBold.className} text-sm text-[#a2aaad]`}>COPYRIGHT {year}</p>
    </div>
)

export default Copyright