import { transatBold } from '@/app/fonts/fonts';
import CTAFeelNourished from "@/components/CTAFeelNourished";
import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient";
import StyledButton from "@/components/StyledButton";
import WhoWeWorkWithV2 from "@/components/WhoWeWorkWithV2";


export default function Home() {
  return (
<>
    <main className="top-0 w-screen flex min-h-screen flex-col items-center justify-start">
        <FullWidthImageBehindGradient variant="tertiary" imageUrl="/images/lindsey_conway_edible-22.jpg" align="center"><p className={`${transatBold.className} w-screen text-center uppercase`}>Work With Us</p></FullWidthImageBehindGradient>
        <FullWidthColorBackground variant="white" textColor="secondary">
            <h1 className={`${transatBold.className} font-extraBold text-3xl sm:text-5xl text-center`}>
                <span className="text-npag-500 uppercase">Functional </span>
                <span className="text-nbrg-500 uppercase">Nutrition Counseling</span>
            </h1>
        </FullWidthColorBackground>
        <WhoWeWorkWithV2 />
        <FullWidthColorBackground variant="white">
            <StyledButton href="/call" >Book a Strategy Session to Learn More</StyledButton>
        </FullWidthColorBackground>
        <FullWidthColorBackground variant="primary">
            <CTAFeelNourished />
        </FullWidthColorBackground>
    </main>
</>
  )
}
