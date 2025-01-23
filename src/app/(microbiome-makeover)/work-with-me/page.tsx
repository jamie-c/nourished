/* eslint-disable @next/next/no-img-element */
import CTAFeelNourished from "@/components/CTAFeelNourished"
import FullWidthColorBackground from "@/components/FullWidthColorBackground"
import Testimonials from "@/components/Testimonials"
import { NFCCircle, NFCHeroImage } from "@nourishedco/ui"

export default function Home() {
    return (
        <main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
            <NFCHeroImage
                variant="primary"
                imageUrl="/images/lindsey-headshots-032.jpg"
                align="center"
                title="Work With Me"
            />
            <FullWidthColorBackground variant="white" textColor="secondary">
                <h1 className="font-transat-black text-balance pt-2 sm:pt-3 text-3xl sm:text-5xl text-center">
                    <span className="text-lightgreen-500 uppercase">
                        Microbiome{" "}
                    </span>
                    <span className="text-brightgreen-500 uppercase">
                        {" "}
                        Makeover
                    </span>
                </h1>
            </FullWidthColorBackground>
            <div className="flex flex-col w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 text-xl px-2 sm:px-4 items-start content-center gap-20 max-w-7xl mx-auto">
                    <div
                        id="work-with-individuals"
                        className="relative flex flex-col gap-6 items-center max-w-[500px] mx-auto text-center text-brightgreen-500"
                    >
                        <div className="flex items-center overflow-hidden rounded-lg aspect-square">
                            <img
                                src="/images/lindsey-headshots-103.jpg"
                                width={400}
                                height={400}
                                alt="Lindsey Conway"
                                loading="eager"
                            />
                        </div>
                        <div className="flex flex-col font-transat-bold gap-4 text-2xl text-center text-balance">
                            <p>
                                You’re not willing to let your health issues,
                                like pain, fatigue, or brain fog take over your
                                life any longer.
                            </p>
                            <p>
                                <span className="font-transat">
                                    You’re on a mission to feel as good as
                                    possible -
                                </span>{" "}
                                because you know there’s a way!
                            </p>
                        </div>
                    </div>
                    <div
                        id="work-with-professionals"
                        className="flex flex-col gap-6 items-center max-w-[500px] mx-auto text-center text-bluegreen-500"
                    >
                        <div className="flex items-center overflow-hidden aspect-square">
                            <div className="font-transat-bold bg-lightgreen-500 text-xl h-full w-full max-h-[400px] max-w-[400px] text-darkgreen-500 rounded-lg p-8 flex flex-col items-center justify-center gap-8">
                                <p>
                                    You want your brain power going toward the
                                    things that matter most to you…like your
                                    family, your career, and your passions.
                                </p>
                                <p>
                                    …INSTEAD of spending your time preoccupied
                                    (held back) by the discomfort in your body.
                                </p>
                            </div>
                            {/* <img
								src="/images/microbiome-makeover-mockup-full-stack.png"
								width={400}
								height={400}
								alt="Other Health and Wellness Professionals"
								loading="lazy"
							/> */}
                        </div>
                        <div className="flex flex-col font-transat-bold gap-4 text-2xl text-center text-balance">
                            <p>
                                You have enough to deal with as an ambitious
                                woman.{" "}
                                <span className="underline decoration-current underline-offset-4">
                                    There are so many moving parts in your life
                                    already.
                                </span>
                            </p>
                            <p className="font-transat">
                                What if I told you your body is working
                                tirelessly to help you feel more energized,
                                balanced, and comfortable? With the right
                                approach, you can unlock a level of health
                                beyond your wildest dreams.
                            </p>
                            {/* <h2 className="text-3xl">WILLPOWER ISN’T YOUR PROBLEM</h2>
							<p>
								You’re known as a go-getter in your everyday life. But, you’re
								so tired and overwhelmed that everything feels like it’s taking
								10x more energy that it normally would.
							</p>
							<p>
								You want to figure out how to manage your pain and discomfort
								with a holistic approach to health…
							</p>
							<ul className="pl-8 text-left list-outside list-['→']">
								<li className="font-transat-med pl-2">
									There are a lot of moving parts in your life right now. And,
									your pain, exhaustion, and mental space is stopping you from
									reaching your full potential — from living to your fullness!
								</li>
								<li className="font-transat-med pl-2">
									But, it never feels like the right time…
								</li>
							</ul> */}
                        </div>
                    </div>
                </div>
                <div className="w-full my-32">
                    <FullWidthColorBackground variant="dark" textColor="white">
                        <div>
                            <p className="text-3xl font-transat-bold mb-8">
                                ONCE YOU START MASTERING AND RESTORING YOUR GUT
                                HEALTH…
                            </p>
                            You’ll emerge on the other side feeling like a new
                            person with more focus, motivation, confidence, and
                            energy (I could keep going!) to tackle your biggest
                            goals – seriously,{" "}
                            <span className="font-transat-bold">nothing</span>{" "}
                            beats the freedom and vitality you can unlock.
                        </div>
                    </FullWidthColorBackground>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 px-2 sm:px-4 items-start content-center gap-20 text-center text-balance  max-w-7xl mx-auto">
                    <div className="flex flex-col items-center gap-4 text-darkgreen-500 text-xl max-w-[400px] mx-auto">
                        <img
                            src="/images/nourished-website-icons-clipboard-circle.png"
                            width={300}
                            height={300}
                            alt="Individuals Seeking Health and Wellness"
                            loading="lazy"
                        />
                        <div className="uppercase text-darkgreen-500 mb-6 text-3xl font-transat-med">
                            What I Offer
                        </div>
                        <div className="grid grid-rows-[48px_48px_200px] gap-2">
                            <div className="mx-auto">
                                <NFCCircle
                                    variant="dark"
                                    design="filled"
                                    title="1"
                                />
                            </div>
                            <h2 className="font-transat-med text-2xl text-center text-balance">
                                EXPERIENCE
                            </h2>
                            <p>
                                Personally coached <b>DOZENS of women</b> –{" "}
                                <i>
                                    in addition to{" "}
                                    <b>
                                        running a top-rated health food
                                        restaurant
                                    </b>
                                </i>{" "}
                                – and studying the{" "}
                                <span className="underline decoration-current underline-offset-4">
                                    latest in digestive health in my nutrition
                                    practice
                                </span>
                                …
                            </p>
                        </div>
                        <div className="grid grid-rows-[48px_48px_200px] gap-2">
                            <div className="mx-auto">
                                <NFCCircle
                                    variant="dark"
                                    design="filled"
                                    title="2"
                                />
                            </div>
                            <h2 className="font-transat-med text-2xl text-center text-balance">
                                ROADMAP
                            </h2>
                            <p>
                                I offer a proven roadmap to support your gut
                                from top to bottom so you can show up in life as
                                fully as possible.
                            </p>
                        </div>
                        <div className="grid grid-rows-[48px_48px_200px] gap-2">
                            <div className="mx-auto">
                                <NFCCircle
                                    variant="dark"
                                    design="filled"
                                    title="3"
                                />
                            </div>
                            <h2 className="font-transat-med text-2xl text-center text-balance">
                                MINDSET PRINCIPLES
                            </h2>
                            <p>
                                I also utilize my training in cognitive coaching
                                (which is a blend of neurology and psychology)
                                to help you stay in action and develop health
                                habits that you can (and want!) to stick with
                                for the longhaul!
                            </p>
                        </div>
                        <div className="grid grid-rows-[48px_48px_200px] gap-2">
                            <div className="mx-auto">
                                <NFCCircle
                                    variant="dark"
                                    design="filled"
                                    title="4"
                                />
                            </div>
                            <h2 className="font-transat-med text-2xl text-center text-balance">
                                INSIGHT
                            </h2>
                            <p>
                                I’ve put together my experience, knowledge and
                                insight to help you{" "}
                                <span className="font-transat-bold">
                                    bypass your learning curve
                                </span>{" "}
                                without falling to prey to common traps so you
                                can stay consistent and make a real difference.
                                🏆
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-brightgreen-500 text-xl max-w-[400px] mx-auto">
                        <img
                            src="/images/nourished-website-icons-heart-circle.png"
                            width={300}
                            height={300}
                            alt="Individuals Seeking Health and Wellness"
                            loading="lazy"
                        />
                        <div className="uppercase text-brightgreen-500 mb-6 text-3xl font-transat-med text-center text-balance">
                            What You Get
                        </div>
                        <div className="grid grid-rows-[48px_48px_200px] gap-2">
                            <div className="mx-auto">
                                <NFCCircle
                                    variant="secondary"
                                    design="filled"
                                    title="1"
                                />
                            </div>
                            <h2 className="font-transat-med text-2xl text-center text-balance">
                                SUPPORT
                            </h2>
                            <p>
                                High-touch support through monthly 1:1 sessions,
                                weekly group Zoom calls to meet you where
                                you&apos;re at in life, establish your
                                customized action steps, and make sure
                                you&apos;re on track to reach your goals.
                                (Value: $5,000)
                            </p>
                        </div>
                        <div className="grid grid-rows-[48px_48px_200px] gap-2">
                            <div className="mx-auto">
                                <NFCCircle
                                    variant="secondary"
                                    design="filled"
                                    title="2"
                                />
                            </div>
                            <h2 className="font-transat-med text-2xl text-center text-balance">
                                HEALTHY GUT PROGRAM
                            </h2>
                            <p>
                                A proven, step-by-step path to restore your gut
                                health so you know exactly what to do to create
                                lasting energy, comfort, and brain power — plus,
                                lose weight with more ease.
                            </p>
                        </div>
                        <div className="grid grid-rows-[48px_48px_200px] gap-2">
                            <div className="mx-auto">
                                <NFCCircle
                                    variant="secondary"
                                    design="filled"
                                    title="3"
                                />
                            </div>
                            <h2 className="font-transat-med text-2xl text-center text-balance">
                                RESOURCE LIBRARY
                            </h2>
                            <p>
                                Access to my growing resource & training
                                library, including workshops and a private
                                podcast to help you stay focused and confident
                                as you create changes in your routines faster
                                and with more ease. (Value: $2,000)
                            </p>
                        </div>
                        <div className="grid grid-rows-[48px_48px_200px] gap-2">
                            <div className="mx-auto">
                                <NFCCircle
                                    variant="secondary"
                                    design="filled"
                                    title="4"
                                />
                            </div>
                            <h2 className="font-transat-med text-2xl text-center text-balance">
                                VOXER ACCESS
                            </h2>
                            <p>
                                Voxer Access with me to ask questions & get
                                on-demand support in the moments when you need
                                it most. (Value: $3,000)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-28">
                <h1 className="font-transat-black-obl text-balance py-2 sm:pt-3 text-3xl sm:text-5xl text-center">
                    <span className="text-bluegreen-500 uppercase">
                        {" "}
                        Testimonials
                    </span>
                </h1>
                <div className="bg-lightgreen-500 h-[425px] w-full">
                    <Testimonials />
                </div>
            </div>
            <div className="w-full my-20 overflow-hidden">
                <FullWidthColorBackground variant="white" textColor="secondary">
                    <div className="text-center font-transat-bold w-full text-balance text-3xl uppercase sm:text-4xl">
                        I teach you the science of your body & the strategy to
                        support it.
                    </div>
                </FullWidthColorBackground>
            </div>
            <div className="w-full overflow-hidden">
                <FullWidthColorBackground variant="primary">
                    <CTAFeelNourished href="/apply">
                        SUBMIT YOUR APPLICATION NOW
                    </CTAFeelNourished>
                </FullWidthColorBackground>
            </div>
        </main>
    )
}
