import localFont from 'next/font/local'
import Image from "next/image"
import Link from 'next/link'

const transatBold = localFont({
    src: '../app/fonts/transat/TransatBold.ttf',
    display: 'swap',
})


const AboutLindseyAndJamie = () => (
    <div className="flex flex-col sm:flex-row items-start content-center gap-20">
        <div id="lindsey-conway" className="flex flex-col items-center sm:items-end max-w-xs text-center sm:text-right text-nblg-500">
            <Image
                className='mb-4' 
                src="/images/lindsey-conway.jpg"
                width={300}
                height={300}
                alt="Lindsey Conway"
            />
            <h2 className={`${transatBold.className} uppercase text-2xl`}>FOOD STRATEGY & GUIDANCE WITH LINDSEY</h2>
            <p className='my-20 text-xl'>&quot;I figure out the best steps to methodically take to move toward the health outcomes and visions you hold for yourself. And then provide encouragement to get there.&quot;</p>
            <Link href="/about">
                <button className="bg-nblg-500 hover:bg-opacity-80 text-white font-bold py-4 px-10 rounded-md uppercase">
                    About Lindsey
                </button>
            </Link>
        </div>
        <div id="jamie-conway" className="flex flex-col items-center sm:items-start max-w-xs text-center sm:text-left text-ndag-500">
            <Image
                className='mb-4' 
                src="/images/jamie-conway.jpg"
                width={300}
                height={300}
                alt="Jamie Conway"
            />
            <h2 className={`${transatBold.className} uppercase text-2xl`}>FOOD ALCHEMY & RECIPES WITH JAMIE</h2>
            <p className='my-20 text-xl'>&quot;I teach you everything you need to know (and nothing you don&apos;t) about how to create approachable, time-honored, and nutrient-dense food to bring to your table.&quot;</p>
            <Link href="/about">
                <button className="bg-ndag-500 hover:bg-opacity-80 text-white font-bold py-4 px-10 rounded-md uppercase">
                    About Jamie
                </button>
            </Link>
        </div>
    </div>
)

export default AboutLindseyAndJamie