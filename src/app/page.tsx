import CTAFeelNourished from "@/components/CTAFeelNourished";
import CircleIconsSubMenu from "@/components/CircleIconsSubMenu";
import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient";
import FxFoodCoaching from "@/components/FxFoodCoaching";
import NFCHeader from "@/components/NFCHeader/NFCHeader";
import NFCMobileNav from "@/components/NFCMobileNav/NFCMobileNav";
import Testimonials from "@/components/Testimonials";
import { NFCButton } from "@nourishedco/ui";

export default function Home() {
	return (
		<main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
			<FullWidthImageBehindGradient
				imageUrl="/images/lindsey-headshots-014.jpg"
				variant="primary"
				align="right"
			>
				<p className="w-full text-center" />
			</FullWidthImageBehindGradient>
			<div className="w-full relative">
				<div className="absolute top-0 w-full h-16 bg-bluegreen-500 dark:bg-bluegreen-700" />
				<div className="sticky top-0 hidden md:flex z-50">
					<NFCHeader />
				</div>
				<div className="sticky top-0 flex md:hidden z-50">
					<NFCMobileNav />
				</div>
				<FxFoodCoaching />
				<FullWidthColorBackground variant="dark">
					<div className="flex flex-col gap-10">
						<span className="text-2xl sm:text-3xl">
							With our targeted guidance and perceptive insights, we help you
							focus on the actions and habits that will{" "}
							<em>create the health results you&apos;re seeking</em>.
						</span>
						<div className="w-max mx-auto">
							<NFCButton as="a" href="/call" variant="secondary">
								BOOK A CALL
							</NFCButton>
						</div>
					</div>
				</FullWidthColorBackground>
				<div className="w-full mt-28">
					<h1 className="font-transat-black-obl text-balance py-2 sm:pt-3 text-3xl sm:text-5xl text-center">
						<span className="text-bluegreen-500 uppercase"> Testimonials</span>
					</h1>
					<div className="bg-lightgreen-500 h-[425px] w-full">
						<Testimonials />
					</div>
				</div>
				<CircleIconsSubMenu />
				<FullWidthColorBackground textColor="white" variant="secondary">
					<div className="flex flex-col gap-10">
						<span className="text-2xl sm:text-3xl">
							We&apos;re going to walk alongside you until the changes
							you&apos;re seeking finally take root.
						</span>
						<div className="w-max mx-auto">
							<NFCButton as="a" href="/call" variant="tertiary">
								BOOK A CALL
							</NFCButton>
						</div>
					</div>
				</FullWidthColorBackground>
				<div className="w-full h-32" />
				<FullWidthImageBehindGradient
					variant="transparent"
					align="center"
					imageUrl="/images/we-are-not-perfectionists-or-impersonal.jpg"
				/>
				<div className="w-full h-32" />
				<FullWidthColorBackground textColor="white" variant="primary">
					<CTAFeelNourished>I WANT TO LEARN MORE</CTAFeelNourished>
				</FullWidthColorBackground>
			</div>
		</main>
	);
}
