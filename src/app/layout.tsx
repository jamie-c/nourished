import Copyright from "@/components/Copyright"
import FooterLinks from "@/components/FooterLinks"
import type { Metadata } from "next"
import ProviderWrapper from "./ProviderWrapper"
import { transatStandard } from "./fonts/fonts"
import "./globals.css"

export const metadata: Metadata = {
    title: "Nourished Co",
    description: "Functional Nutrition Consulting",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${transatStandard.className}`}>
                <ProviderWrapper>
                    {children}
                    <footer className="pb-32 w-screen flex flex-col items-center justify-start">
                        <Copyright />
                        <FooterLinks />
                    </footer>
                </ProviderWrapper>
            </body>
        </html>
    )
}
