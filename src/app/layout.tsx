import NFCLogoCopyright from '@/components/Copyright';
import FooterLinks from '@/components/FooterLinks';

import type { Metadata } from 'next';

import './globals.css';
import ProviderWrapper from "./ProviderWrapper";

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
            <body>
                <ProviderWrapper>
                    {children}
                    <footer className="pt-10 pb-32 w-screen flex flex-col items-center justify-start">
                        <NFCLogoCopyright />
                        <FooterLinks />
                    </footer>
                </ProviderWrapper>
            </body>
        </html>
    )
}
