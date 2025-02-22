/* eslint-disable @next/next/no-img-element */

const WhoWeWorkWith = () => (
	<>
		<h2 className="font-transat-bold text-4xl text-center uppercase mt-32 mb-16 text-darkgreen-500 px-16 sm:px-4">
			WHO WE WORK WITH
		</h2>
		<div className="flex flex-col sm:flex-row items-start content-center gap-20 px-4">
			<div
				id="work-with-individuals"
				className="flex flex-col items-center max-w-[400px] text-center text-brightgreen-500"
			>
				<img
					className="mb-4"
					src="/images/heart-brightgreen-circle.png"
					width={300}
					height={300}
					alt="Individuals Seeking Health and Wellness"
					loading="lazy"
				/>
				<h2 className="font-transat-bold text-balance uppercase text-3xl">
					INDIVIDUALS SEEKING HEALTH & FOOD-CHANGE
				</h2>
				<p className="my-16 text-xl text-justify">
					With our combined knowledge of the body&apos;s systems and food, we
					help people optimize how their bodies function, working with diet and
					lifestyle changes that lead to impactful, sustainable health change.
					Every recommendation is made with the individual in mind. This is not
					about fixed plans or one-size-fits-all approaches — it&apos;s a
					whole-person approach to health.
				</p>
			</div>
			<div
				id="work-with-professionals"
				className="flex flex-col items-center max-w-[400px] text-center text-bluegreen-500"
			>
				<img
					className="mb-4"
					src="/images/cross-bluegreen-circle.png"
					width={300}
					height={300}
					alt="Other Health and Wellness Professionals"
					loading="lazy"
				/>
				<h2 className="font-transat-bold text-balance uppercase text-3xl">
					OTHER HEALTH & WELLNESS PROFESSIONALS
				</h2>
				<p className="my-16 text-xl text-justify">
					Over the past decade, we&apos;ve helped people navigate health
					challenges due to immune, weight, digestive, and energy issues (to
					name just a few!). We&apos;ve consulted with medical professionals in
					need of food support for their patients. We&apos;ve served over 10,000
					people our one-of-a-kind recipes through our plant-based,
					allergen-friendly restaurant in Oklahoma City.{" "}
				</p>
			</div>
		</div>
	</>
);

export default WhoWeWorkWith;
