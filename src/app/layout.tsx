import NFCLogoCopyright from "@/components/Copyright";
import FooterLinks from "@/components/FooterLinks";
import TermsOfServiceLinks from "@/components/TermsOfServiceLinks";

import SocialLinks from "@/components/SocialIcons";
import type { Metadata, Viewport } from "next";
import ProviderWrapper from "./ProviderWrapper";
import "./globals.css";

export const metadata: Metadata = {
	title: "Nourished Co",
	description: "Functional Nutrition Consulting",
};

export const viewport: Viewport = {
	themeColor: "#009681",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="font-transat">
				<ProviderWrapper>
					{children}
					<footer className="w-full flex flex-col pb-2 pt-16 gap-16 items-center justify-start">
						<NFCLogoCopyright />
						<SocialLinks />
						<FooterLinks />
						<TermsOfServiceLinks />
					</footer>
				</ProviderWrapper>
			</body>
		</html>
	);
}
