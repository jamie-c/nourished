import localFont from 'next/font/local'
import Image from "next/image"

const transatBold = localFont({
    src: '../app/fonts/transat/TransatBold.ttf',
    display: 'swap',
})


const WhoWeWorkWithV2 = () => (
    <>
    <h2 className={`${transatBold.className} text-4xl text-center uppercase mb-16 text-ndag-500`}>WHO WE WORK WITH</h2>
    <div className="flex flex-col sm:flex-row items-start content-center gap-20">
        <div id="work-with-individuals" className="flex flex-col items-center max-w-xs text-center text-nbrg-500">
            <Image
                className='mb-4' 
                src="/images/nourished-website-icons-heart-square.png"
                width={300}
                height={300}
                alt="Individuals Seeking Health and Wellness"
            />
            <p className='my-16 text-xl'>Are you <b>overwhelmed, stuck, or tired</b> of trying to find sustainable solutions to your health challenges? Whether they be digestive issues, lack of energy, brain fog, weight concerns, or autoimmunity. If you&apos;re ready to be proactive in improving health we&apos;re here to support you!</p>
        </div>
        <div id="work-with-professionals" className="flex flex-col items-center max-w-xs text-center text-nblg-500">
            <Image
                className='mb-4' 
                src="/images/nourished-website-icons-cross-square.png"
                width={300}
                height={300}
                alt="Other Health and Wellness Professionals"
            />
            <p className='my-16 text-xl'>Healthcare providers who are seeking functional-nutrition education and support for their patients. We help fill the gap between appointments, working with your patients to improve their everyday habits to create better health outcomes and stronger partnerships.</p>
        </div>
    </div>
    </>
)

export default WhoWeWorkWithV2