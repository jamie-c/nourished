import CTAFeelNourished from "@/components/CTAFeelNourished";
import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient";
import Script from "next/script";

export default function OnePanRecipes() {
	return (
		<main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
			<Script
				src="https://nourishedco.ck.page/commerce.js"
				async
				defer
				strategy="lazyOnload"
			/>
			<FullWidthImageBehindGradient
				variant="primary"
				imageUrl="/images/headers/one-pan-dinners-header.jpg"
				align="center"
			>
				<p className="font-transat-bold w-full text-center drop-shadow-lg uppercase">
					One Pan Recipes
				</p>
			</FullWidthImageBehindGradient>
			<FullWidthColorBackground variant="white" textColor="secondary">
				<h1 className="font-transat-bold text-balance text-2xl sm:text-3xl md:text-5xl text-center">
					<span className="text-brightgreen-500 uppercase">
						Spend less time stressing over meals so you can spend more time on
						the things you love...
					</span>
				</h1>
			</FullWidthColorBackground>
			<FullWidthColorBackground variant="primary">
				<>
					<h2 className="text-4xl font-semibold mb-4">
						Seven 30-Minute One-Pan Dinners
					</h2>
					<p className="font-transat-light-obl mb-8">
						The recipes in this download are designed to help you get
						nourishing, balanced meals on the table in less time and with less
						brain power!
					</p>
					<a
						className="font-transat-med rounded-md pt-5 pb-4 px-10 text-lg text-white hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed bg-lightgreen-500 uppercase"
						href="https://nourishedco.ck.page/products/one-pan-dinners"
						data-commerce
					>
						Get The Recipes Now!
					</a>
				</>
			</FullWidthColorBackground>
			<FullWidthColorBackground variant="white" textColor="secondary">
				<div className="w-full text-left max-w-5xl flex flex-col gap-2 mb-12">
					<div className="w-full mx-auto p-2">
						<h2 className="text-2xl md:text-3xl h-12 p-4 rounded-md leading-6 text-darkgreen-800 font-semibold select-none">
							HERE&apos;S THE SCOOP
						</h2>
						<div className="mt-3 text-xl leading-6 whitespace-normal text-slate-600 transition-all duration-150 ease-in-out">
							<p>
								You don&apos;t need a lot of cooking skills to bring these
								recipes to the table, and they&apos;re incredibly flexible. Best
								of all, they come together in only 30 minutes, so you can spend
								your evenings doing more of the things you enjoy while sticking
								to your healthy eating goals.
							</p>
						</div>
					</div>
					<div className="w-full mx-auto p-2">
						<details
							className="open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg transition-all duration-150 ease-in-out"
							open
						>
							<summary className="text-2xl md:text-3xl h-12 p-4 rounded-md leading-6 text-darkgreen-800 font-semibold select-none">
								HERE&apos;S THE SCOOP
							</summary>
							<div className="mt-3 text-xl leading-6 whitespace-normal text-slate-600 transition-all duration-150 ease-in-out">
								<p>
									7 one-pan dinner recipes designed to nourish your gut and your
									body with variety and balanced nutrients.
								</p>
							</div>
						</details>
					</div>
					<div className="w-full mx-auto p-2">
						<details
							className="open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg transition-all duration-150 ease-in-out"
							open
						>
							<summary className="text-2xl md:text-3xl h-12 p-4 rounded-md leading-6 text-darkgreen-800 font-semibold select-none">
								WHAT&apos;S INSIDE
							</summary>
							<div className="mt-3 text-xl leading-6 text-slate-600 transition-all duration-150 ease-in-out">
								<ul className="flex flex-wrap gap-6 items-center justify-between text-base">
									<li className="ring-2 ring-bluegreen-500 rounded-full px-4 pb-1 pt-2">
										One Pan Chicken & Broccoli
									</li>
									<li className="ring-2 ring-bluegreen-500 rounded-full px-4 pb-1 pt-2">
										One Pan Turkey, Chickpea & Sweet Potato
									</li>
									<li className="ring-2 ring-bluegreen-500 rounded-full px-4 pb-1 pt-2">
										Kale & Veggie Beef Hash
									</li>
									<li className="ring-2 ring-bluegreen-500 rounded-full px-4 pb-1 pt-2">
										One Pot Beef, Rice & Peas
									</li>
									<li className="ring-2 ring-bluegreen-500 rounded-full px-4 pb-1 pt-2">
										One Pan Turmeric Edamame & Veggies
									</li>
									<li className="ring-2 ring-bluegreen-500 rounded-full px-4 pb-1 pt-2">
										Campfire Skillet Veggie Nachos
									</li>
									<li className="ring-2 ring-bluegreen-500 rounded-full px-4 pb-1 pt-2">
										Everything Bagel Salmon & Veggies
									</li>
								</ul>
							</div>
						</details>
					</div>
				</div>
				<a
					className="font-transat-med rounded-md pt-5 pb-4 px-10 text-lg text-white hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed bg-bluegreen-500 uppercase"
					href="https://nourishedco.ck.page/products/one-pan-dinners"
					data-commerce
				>
					Get The Recipes Now!
				</a>
			</FullWidthColorBackground>
			<FullWidthColorBackground variant="primary">
				<CTAFeelNourished href="/call" />
			</FullWidthColorBackground>
		</main>
	);
}
