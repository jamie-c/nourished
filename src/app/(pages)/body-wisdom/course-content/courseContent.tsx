/* eslint-disable @next/next/no-img-element */
import StyledLink from "@/components/StyledLink";

export function WelcomeStartHere() {
	return (
		<div className="flex flex-col gap-4 text-xl w-full">
			<h2 className="text-4xl mt-10">Welcome to the Body Wisdom Course!</h2>
			<p>
				Join the private facebook group{" "}
				<StyledLink href="https://www.facebook.com/groups/579579973886618/">
					here
				</StyledLink>
				.
			</p>
			<div className="flex flex-row w-full items-center justify-center my-10">
				<img
					src="/images/body-wisdom-course-images/body-wisdom-mini-course-mockup-nourished-co.png"
					alt="Body Wisdom Mini Course Mockup"
					width={500}
					height={500}
					loading="lazy"
				/>
			</div>
			<p>
				Hello and welcome to the Body Wisdom Mini-Course. I&apos;m so excited
				that you are here!
			</p>
			<p>
				In this mini course, I&apos;m going to show you how to find the foods
				that support the best version of you.
			</p>
			<p>
				Through my purposeful food journaling method. I&apos;m going to help you
				tune in to how your body responds to food. So you can begin to
				prioritize the foods that genuinely support your health and your
				happiness.
			</p>
			<p>
				So to give you an idea of the flow of this course, you&apos;ll find the
				content categorized into four modules.
			</p>
			<p>
				In the first module, you&apos;ll learn more about what makes this method
				of food journaling different from other approaches.
			</p>
			<p>
				And in the second module, I&apos;ll walk you through how to use the
				purposeful food journal to track three key areas of Health.
			</p>
			<p>
				And in the third module, I&apos;ll walk you through how to begin
				assessing your Journal.
			</p>
			<p>
				The fourth module is where you&apos;ll find any bonus content like
				worksheets tutorials and just any future bonus content that we decide to
				add to the course.
			</p>
			<p>
				Now if we haven&apos;t met yet, my name is Lindsey Conway and my goal
				with this course is to teach you how to move out of overwhelm or apathy
				when it comes to nutrition and health and into the easy actions that
				will help you feel better in your body more easily. I&apos;m a certified
				holistic health coach certified nutrition consultant and certified
				functional nutrition counselor, and I&apos;ve been in the field of
				holistic health and functional nutrition for over a decade now.
			</p>
			<p>
				I help people learn how to nourish their bodies with quality nutrition
				and habits so they can feel good do the things in life. They want to be
				doing and find a path to health that they can maintain for a lifetime.
			</p>
			<p>
				So once again, welcome to the Body Wisdom Mini-Course, I&apos;m so
				excited for you to get started with this signature method.
			</p>
		</div>
	);
}
