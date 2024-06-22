import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import WaitlistForm from "@/components/WaitlistForm";

export default function Page() {
	return (
		<>
			<main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
				<FullWidthColorBackground variant="white" textColor="secondary">
					<h2 className="font-transat-bold text-4xl text-center uppercase mb-16 text-darkgreen-500">
						YOU’VE GOT GREAT GUT INSTINCTS!
					</h2>
					<p className="max-w-2xl text-balance">
						Enter your info below to be the first to know when coaching spots
						open up.
					</p>
				</FullWidthColorBackground>
				<WaitlistForm />
			</main>
		</>
	);
}
