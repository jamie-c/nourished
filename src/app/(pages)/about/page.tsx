import AboutLindseyAndJamie from "@/components/AboutLindseyAndJamie"
import CTAFeelNourished from "@/components/CTAFeelNourished"
import FullWidthColorBackground from "@/components/FullWidthColorBackground"
import WhoWeWorkWith from "@/components/WhoWeWorkWith"
import { NFCHeroImage } from "@nourishedco/ui"

export default function Home() {
    return (
        <main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
            <NFCHeroImage
                variant="primary"
                align="right"
                title="Functional Food Coaching"
            />
            <FullWidthColorBackground variant="white" textColor="secondary">
                We&apos;re Jamie and Lindsey. We teach people how to build
                confidence in their kitchens and optimize their health habits so
                they can feel better in their bodies.
            </FullWidthColorBackground>
            <AboutLindseyAndJamie />
            <WhoWeWorkWith />
            <FullWidthColorBackground variant="primary">
                <CTAFeelNourished>I WANT TO LEARN MORE</CTAFeelNourished>
            </FullWidthColorBackground>
        </main>
    )
}
