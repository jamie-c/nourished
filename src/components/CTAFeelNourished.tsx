import localFont from 'next/font/local'
import Link from 'next/link'

const chalet1970 = localFont({
    src: '../app/fonts/chaletnewyorknineteenseventy.ttf',
    display: 'swap',
})

const CTAFeelNourished = () => (
    <>
        <p className='text-4xl mb-10'>LET&apos;S FIGURE OUT WHAT YOUR BODY NEEDS TO</p>
        <p className={`${chalet1970.className} text-npag-500 text-4xl mb-10 tracking-wide`}>FEEL NOURISHED.</p>
        <Link href={'/work-with-us'}>
            <button 
                className='bg-npag-500 rounded-md py-4 px-10 text-lg 
                hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'
            >
                I WANT TO LEARN MORE
            </button>
        </Link>
    </>
)

export default CTAFeelNourished