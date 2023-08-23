import { transatBold, transatLight } from '@/app/fonts/fonts'
import Image from "next/image"


const WhoWeWorkWith = () => (
    <>
    <h2 className={`${transatBold.className} text-4xl text-center uppercase mt-32 mb-16 text-ndag-500`}>WHO WE WORK WITH</h2>
    <div className="flex flex-col sm:flex-row items-start content-center gap-20">
        <div id="work-with-individuals" className="flex flex-col items-center max-w-xs text-center text-nbrg-500">
            <Image
                className='mb-4' 
                src="/images/heart-nbrg-circle.png"
                width={300}
                height={300}
                alt="Individuals Seeking Health and Wellness"
            />
            <h2 className={`${transatBold.className} uppercase text-3xl`}>INDIVIDUALS SEEKING HEALTH & FOOD-CHANGE</h2>
            <p className={`${transatLight.className} my-16 text-2xl`}>With our combined knowledge of the body&apos;s systems and food, we help people optimize how their bodies function, working with diet and lifestyle changes that lead to impactful, sustainable health change. Every recommendation is made with the individual in mind. This is not about fixed plans or one-size-fits-all approaches — it&apos;s a whole-person approach to health.</p>
        </div>
        <div id="work-with-professionals" className="flex flex-col items-center max-w-xs text-center text-nblg-500">
            <Image
                className='mb-4' 
                src="/images/cross-nblg-circle.png"
                width={300}
                height={300}
                alt="Other Health and Wellness Professionals"
            />
            <h2 className={`${transatBold.className} uppercase text-3xl`}>OTHER HEALTH & WELLNESS PROFESSIONALS</h2>
            <p className={`${transatLight.className} my-16 text-2xl`}>Over the past decade, we&apos;ve helped people navigate health challenges due to immune, weight, digestive, and energy issues (to name just a few!). We&apos;ve consulted with medical professionals in need of food support for their patients. We&apos;ve served over 10,000 people our one-of-a-kind recipes through our plant-based, allergen-friendly restaurant in Oklahoma City. </p>
        </div>
    </div>
    </>
)

export default WhoWeWorkWith