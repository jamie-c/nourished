import FullWidthColorBackground from "@/components/FullWidthColorBackground"
import NewsletterForm from "@/components/forms/NewsletterForm"
import { NFCHeroImage } from "@nourishedco/ui"

export default function Page() {
    return (
        <>
            <NFCHeroImage
                variant="tertiary"
                align="center"
                imageUrl="/images/headers/nourished-newsletter.jpg"
                title="Newsletter"
            />
            <main className="top-0 w-full flex mb-24 flex-col items-center justify-start">
                <FullWidthColorBackground variant="white" textColor="secondary">
                    <h2 className="font-transat-bold text-4xl text-center uppercase mb-16 text-darkgreen-500">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="max-w-2xl">
                        Sign up for our exclusive monthly newsletters for
                        knowledge, know-how, and advice for living an abundantly
                        nourished life.
                    </p>
                </FullWidthColorBackground>
                <NewsletterForm />
            </main>
        </>
    )
}
