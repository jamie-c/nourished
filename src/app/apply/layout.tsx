import { NFCButton, NFCLogo } from "@nourishedco/ui";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen">
			<div className="absolute top-0 w-full h-16 bg-bluegreen-500 dark:bg-bluegreen-700" />
			<div className="sticky top-0 flex z-50">
				<header className="sticky top-0 w-full z-40 bg-opacity-50 dark:bg-opacity-50 bg-bluegreen-500 dark:bg-bluegreen-700 backdrop-blur-xl dark:backdrop-blur-xl transition-all duration-300">
					<div className="px-2 sm:px-7 flex flex-row items-center justify-between max-w-7xl h-16 m-auto">
						<NFCLogo imgUrl="/images/NOURISHED_LOGO_NOTAG_WHITE.png" />
						<div className="h-full flex items-center max-w-full">
							<NFCButton href="#" as="a" variant="tertiary" classes="h-12">
								APPLY NOW
							</NFCButton>
						</div>
					</div>
				</header>
			</div>
			{children}
		</div>
	);
}
