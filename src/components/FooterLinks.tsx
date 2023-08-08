import localFont from 'next/font/local';
import Link from "next/link";

const transatBold = localFont({
    src: '../app/fonts/transat/TransatBold.ttf',
    display: 'swap',
})


const FooterLinks = () => (
    <div className={`${transatBold.className} pt-32 flex flex-col sm:flex-row items-top justify-between text-center text-2xl text-nbrg-500 uppercase gap-8 w-screen max-w-7xl`}>
        <span className='w-full sm:w-screen-1/3 flex flex-col items-center justify-start gap-6'>
            <Link className="border-b-2 border-b-nbrg-500" href="/about-us">About</Link>
            <Link className="border-b-2 border-b-nbrg-500" href="/blog">Blog</Link>
            <Link className="border-b-2 border-b-nbrg-500" href="/newsletter">Newsletter</Link>
            <Link className="border-b-2 border-b-nbrg-500" href="/contact">Contact</Link>
        </span>
        <span className='w-full sm:w-screen-1/3 flex flex-col items-center justify-start gap-6'>
            <Link className="border-b-2 border-b-nbrg-500" href="/work-with-us">Work With Us</Link>
            <Link className="border-b-2 border-b-nbrg-500" href="/body-wisdom-mini-course">Online Classes</Link>
            <Link className="border-b-2 border-b-nbrg-500" href="/body-wisdom-mini-course">Body Wisdom Mini-Course</Link>
            <Link className="border-b-2 border-b-nbrg-500" href="/call">Book A Discovery Call</Link>
        </span>
    </div>
)

export default FooterLinks