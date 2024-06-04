import AboutLindseyAndJamie from "@/components/AboutLindseyAndJamie";
import CTAFeelNourished from "@/components/CTAFeelNourished";
import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";

export default function Home() {
	return (
		<main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
			<FullWidthImageBehindGradient variant="primary" align="right">
				<p className="font-transat-bold w-full text-center uppercase">
					Functional Food Coaching
				</p>
			</FullWidthImageBehindGradient>
			<FullWidthColorBackground variant="white" textColor="secondary">
				We&apos;re Jamie and Lindsey. We teach people how to build confidence in
				their kitchens and optimize their health habits so they can feel better
				in their bodies.
			</FullWidthColorBackground>
			<AboutLindseyAndJamie />
			<WhoWeWorkWith />
			<FullWidthColorBackground variant="primary">
				<CTAFeelNourished>I WANT TO LEARN MORE</CTAFeelNourished>
			</FullWidthColorBackground>
		</main>
	);
}
