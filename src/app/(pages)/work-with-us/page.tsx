import CTAFeelNourished from "@/components/CTAFeelNourished";
import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient";
import StyledButton from "@/components/StyledButton";
import WhoWeWorkWithV2 from "@/components/WhoWeWorkWithV2";

export default function Home() {
	return (
		<main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
			<FullWidthImageBehindGradient
				variant="tertiary"
				imageUrl="/images/headers/work-with-us-header-nourished-co.jpg"
				align="center"
			>
				<p className="font-transat-bold w-full text-center uppercase">
					Work With Us
				</p>
			</FullWidthImageBehindGradient>
			<FullWidthColorBackground variant="white" textColor="secondary">
				<h1 className="font-transat-black text-balance text-3xl sm:text-5xl text-center">
					<span className="text-lightgreen-500 uppercase">Functional </span>
					<span className="text-brightgreen-500 uppercase">
						Nutrition Counseling
					</span>
				</h1>
			</FullWidthColorBackground>
			<WhoWeWorkWithV2 />
			<FullWidthColorBackground variant="white">
				<StyledButton href="/call">BOOK A FREE STRATEGY SESSION</StyledButton>
			</FullWidthColorBackground>
			<FullWidthColorBackground variant="primary">
				<CTAFeelNourished href="/call">BOOK NOW</CTAFeelNourished>
			</FullWidthColorBackground>
		</main>
	);
}
