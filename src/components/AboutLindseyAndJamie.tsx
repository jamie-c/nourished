/* eslint-disable @next/next/no-img-element */
import { NFCButton } from "@nourishedco/ui";
import type React from "react";

const AboutLindseyAndJamie: React.FC = () => (
	<div className="flex flex-col p-2 sm:p-4 sm:flex-row items-start content-center gap-20">
		<div
			id="lindsey-conway"
			className="flex flex-col items-center sm:items-end max-w-[400px] text-center sm:text-right text-bluegreen-500"
		>
			<img
				className="mb-4 rounded-md"
				src="/images/lindsey-conway.jpg"
				width={400}
				height={400}
				alt="Lindsey Conway"
				loading="lazy"
			/>
			<h2 className="font-transat-bold text-balance uppercase text-2xl">
				FOOD STRATEGY & GUIDANCE WITH LINDSEY
			</h2>
			<p className="font-transat text-balance mt-4 text-xl h-44">
				&quot;I figure out the best steps to methodically take to move toward
				the health outcomes and visions you hold for yourself. And then provide
				encouragement to get there.&quot;
			</p>
			<NFCButton href="/about" variant="primary" classes="w-full h-12">
				ABOUT LINDSEY
			</NFCButton>
		</div>
		<div
			id="jamie-conway"
			className="flex flex-col items-center sm:items-start max-w-[400px] text-center sm:text-left text-darkgreen-500"
		>
			<img
				className="mb-4 rounded-md"
				src="/images/jamie-conway.jpg"
				width={400}
				height={400}
				alt="Jamie Conway"
				loading="lazy"
			/>
			<h2 className="font-transat-bold text-balance uppercase text-2xl">
				FOOD ALCHEMY & RECIPES WITH JAMIE
			</h2>
			<p className="font-transat text-balance mt-4 text-xl h-44">
				&quot;I teach you everything you need to know (and nothing you
				don&apos;t) about how to create approachable, time-honored, and
				nutrient-dense food to bring to your table.&quot;
			</p>
			<NFCButton href="/about" variant="dark" classes="w-full h-12">
				ABOUT JAMIE
			</NFCButton>
		</div>
	</div>
);

export default AboutLindseyAndJamie;
