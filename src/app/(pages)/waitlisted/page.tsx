import FullWidthColorBackground from "@/components/FullWidthColorBackground";

export default function Page() {
	return (
		<>
			<main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
				<FullWidthColorBackground variant="white" textColor="secondary">
					<h2 className="font-transat-bold text-4xl text-center uppercase mb-16 text-darkgreen-500">
						YOU’VE GOT GREAT GUT INSTINCTS!
					</h2>
					<p className="max-w-2xl text-balance">
						Consider yourself officially waitlisted! 🥳 We can&apos;t wait to
						roll out the red carpet for you. Stay tuned for updates!
					</p>
				</FullWidthColorBackground>
			</main>
		</>
	);
}
