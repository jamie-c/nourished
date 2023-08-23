import { transatBold } from '@/app/fonts/fonts'


export default function Page() {
    return (
        <div
            className='flex flex-col items-center justify-start max-w-3xl md:max-w-7xl text-center px-4 sm:px-8 md:px-20'
        >
            <h2
                className={`${transatBold.className} text-ndag-500 text-5xl pt-28 uppercase`}
            >
                Book a Free Strategy Session
            </h2>    
            <p
                className='text-ndag-500 text-xl pt-8'
            >
                Please fill in the form below to schedule a 15-20 minute Strategy Session. I&apos;m looking forward to connecting with you!
            </p>
        </div>
    )
}