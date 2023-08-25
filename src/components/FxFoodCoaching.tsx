import localFont from 'next/font/local'

const transatBold = localFont({
    src: '../app/fonts/transat/TransatBold.ttf',
    display: 'swap',
})

const FxFoodCoaching = () => {
    return (
        <div className='w-full pl-8 py-32 md:pl-16 max-w-7xl'>
            <h1 className={`${transatBold.className} font-extraBold text-3xl sm:text-5xl text-left pb-3 pr-8`}>
                <span className="text-npag-500 uppercase">Functional </span>
                <span className="text-nbrg-500 uppercase">Food </span>
                <span className="text-nblg-500 uppercase">Coaching</span>
            </h1>
            <p className='pb-3 text-3xl sm:text-5xl'>
                <span className='text-[#a2aaad]'>for </span>
                <span className={`${transatBold.className} text-[#a2aaad] uppercase`}> powerful shifts</span>
                </p>
            <p className='text-[#a2aaad] uppercase sm:text-xl'>in eating // thinking // feeling</p>
        </div>
    )
}

export default FxFoodCoaching