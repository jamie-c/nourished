/* eslint-disable @next/next/no-img-element */
import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import FreeGuideForm from "@/components/forms/FreeGuideForm";

export default function Page() {
	return (
		<>
			<main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
				<FullWidthColorBackground variant="white" textColor="secondary">
					<div className="w-full flex flex-col p-2 md:p-16 md:flex-row items-center gap-10">
						<div className="w-full md:w-1/3 flex items-center justify-center">
							<img
								src="/images/previews/help-your-body-heal.jpg"
								alt="Help Your Body Heal"
								className="w-full max-w-[300px] rounded-lg object-center -rotate-1 shadow-xl"
							/>
						</div>
						<div className="flex flex-col gap-10">
							<h2 className="text-4xl text-center font-transat-bold uppercase text-darkgreen-500">
								READY TO HELP YOUR BODY HEAL?
							</h2>
							<p className="max-w-2xl font-transat-bold text-balance">
								ENTER YOUR DETAILS AND YOUR FREE GUIDE WILL BE ON ITS WAY TO YOU
								💌
							</p>
							<FreeGuideForm />
						</div>
					</div>
				</FullWidthColorBackground>
			</main>
		</>
	);
}
