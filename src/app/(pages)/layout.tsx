import NFCHeader from "@/components/NFCHeader/NFCHeader";
import NFCMobileNav from "@/components/NFCMobileNav/NFCMobileNav";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen">
			<div className="absolute top-0 w-full h-16 bg-bluegreen-500 dark:bg-bluegreen-700" />
			<div className="sticky top-0 hidden md:flex z-50">
				<NFCHeader />
			</div>
			<div className="sticky top-0 flex md:hidden z-50">
				<NFCMobileNav />
			</div>
			{children}
		</div>
	);
}
