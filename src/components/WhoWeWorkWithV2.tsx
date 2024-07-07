import { NFCButton, NFCCircle } from "@nourishedco/ui";
import Image from "next/image";
import FullWidthColorBackground from "./FullWidthColorBackground";

const WhoWeWorkWithV2 = () => (
	<div className="flex flex-col">
		<h2 className="font-transat-bold text-4xl text-center uppercase mb-16 text-darkgreen-500 px-16 sm:px-4">
			WHO WE WORK WITH
		</h2>
		<div className="grid grid-cols-1 sm:grid-cols-2 text-xl px-2 sm:px-4 items-start content-center gap-20">
			<div
				id="work-with-individuals"
				className="flex flex-col gap-6 items-center max-w-[400px] mx-auto text-center text-brightgreen-500"
			>
				<Image
					src="/images/nourished-website-icons-heart-square.png"
					width={400}
					height={400}
					alt="Individuals Seeking Health and Wellness"
				/>
				<p className="text-justify text-balance">
					Are you{" "}
					<span className="font-transat-med">overwhelmed, stuck, or tired</span>{" "}
					of trying to find sustainable solutions to your health challenges?
					Whether they be digestive issues, lack of energy, brain fog, weight
					concerns, or autoimmunity. If you&apos;re ready to be proactive in
					improving health we&apos;re here to support you!
				</p>
			</div>
			<div
				id="work-with-professionals"
				className="flex flex-col gap-6 items-center max-w-[400px] mx-auto text-center text-bluegreen-500"
			>
				<Image
					src="/images/nourished-website-icons-cross-square.png"
					width={400}
					height={400}
					alt="Other Health and Wellness Professionals"
				/>
				<p className="text-justify text-balance">
					Healthcare providers who are seeking functional-nutrition education
					and support for their patients. We help fill the gap between
					appointments, working with your patients to improve their everyday
					habits to create better health outcomes and stronger partnerships.
				</p>
			</div>
		</div>
		<FullWidthColorBackground variant="white" textColor="secondary">
			<NFCButton as="a" href="/call" classes="max-w-max mx-auto">
				BOOK A STRATEGY SESSION TO LEARN MORE
			</NFCButton>
		</FullWidthColorBackground>
		<div className="grid grid-cols-1 sm:grid-cols-2 px-2 sm:px-4 items-start content-center gap-20 text-center text-balance">
			<div className="flex flex-col items-center gap-4 text-darkgreen-500 text-xl max-w-[400px] mx-auto">
				<Image
					src="/images/nourished-website-icons-clipboard-circle.png"
					width={300}
					height={300}
					alt="Individuals Seeking Health and Wellness"
				/>
				<div className="uppercase text-darkgreen-500 mb-6 text-3xl font-transat-med">
					Food Coaching & What You Get
				</div>
				<div className="grid grid-rows-[48px_72px_200px] gap-2">
					<div className="mx-auto">
						<NFCCircle variant="dark" design="filled" title="1" />
					</div>
					<h2 className="font-transat-med text-2xl text-center text-balance">
						BI-WEEKLY COACHING SESSIONS
					</h2>
					<p>
						Designed to help you better understand your body and determine the
						foods and habits that will lead to the results you’re seeking. They
						provide regular check-ins to ensure you’re consistent and focused on
						the most effect habits for your health.
					</p>
				</div>
				<div className="grid grid-rows-[48px_72px_200px] gap-2">
					<div className="mx-auto">
						<NFCCircle variant="dark" design="filled" title="2" />
					</div>
					<h2 className="font-transat-med text-2xl text-center text-balance">
						ACCESS TO OUR LIBRARY OF TOOLS
					</h2>
					<p>
						For support, education, and inspiration between sessions and beyond.
						Dig in to our on-demand cooking classes, recipes, private community
						group, journal prompts/exercises, and more.
					</p>
				</div>
				<div className="grid grid-rows-[48px_72px_200px] gap-2">
					<div className="mx-auto">
						<NFCCircle variant="dark" design="filled" title="3" />
					</div>
					<h2 className="font-transat-med text-2xl text-center text-balance">
						ONGOING SUPPORT & GUIDANCE
					</h2>
					<p>
						The most important work happens outside of our sessions — it’s
						taking action everyday. We provide continuous support and focused
						direction with Voxer access and set check-ins along the way.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 text-brightgreen-500 text-xl max-w-[400px] mx-auto">
				<Image
					src="/images/nourished-website-icons-heart-circle.png"
					width={300}
					height={300}
					alt="Individuals Seeking Health and Wellness"
				/>
				<div className="uppercase text-brightgreen-500 mb-6 text-3xl font-transat-med text-center text-balance">
					Our Functional Approach
				</div>
				<div className="grid grid-rows-[48px_72px_200px] gap-2">
					<div className="mx-auto">
						<NFCCircle variant="secondary" design="filled" title="1" />
					</div>
					<h2 className="font-transat-med text-2xl text-center text-balance">
						ASSESS
					</h2>
					<p>
						We start by getting to know who we’re helping — that’s you! —
						through a comprehensive overview of your health history and
						presenting challenges. This in-depth assessment helps us uncover the
						best next steps toward lasting health changes.
					</p>
				</div>
				<div className="grid grid-rows-[48px_72px_200px] gap-2">
					<div className="mx-auto">
						<NFCCircle variant="secondary" design="filled" title="2" />
					</div>
					<h2 className="font-transat-med text-2xl text-center text-balance">
						RECOMMEND
					</h2>
					<p>
						We make dietary & lifestyle recommendations that are appropriate for
						you and what’s going on with your body. We create highly
						individualized recommendations that lead to results.
					</p>
				</div>
				<div className="grid grid-rows-[48px_72px_200px] gap-2">
					<div className="mx-auto">
						<NFCCircle variant="secondary" design="filled" title="3" />
					</div>
					<h2 className="font-transat-med text-2xl text-center text-balance">
						TRACK
					</h2>
					<p>
						We use tracking tools to make important connections between your
						diet, habits, and symptoms to make sure you’re engaging in the most
						effective changes for your body.
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default WhoWeWorkWithV2;
