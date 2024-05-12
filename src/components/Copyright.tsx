import { NFCLogoCopyright } from '@nourishedco/ui'
import localFont from 'next/font/local'

const transatBold = localFont({
    src: '../app/fonts/transat/TransatBold.ttf',
    display: 'swap',
})

// get current year
const year = new Date().getFullYear()

const Copyright = () => (
    <div className="flex flex-col items-center justify-start text-center text-2xl gap-0">
        <NFCLogoCopyright imgUrl='/images/NOURISHED_LOGO_NOTAG_NOPAD_RGB.png'/>
    </div>
)

export default Copyright