import Link from "next/link";
import SideNav from "../../../SideNav";
import { bodyWisdomCourseSections, titleToUrl } from "../../courseSections";

export const runtime = "edge";

const urls = bodyWisdomCourseSections.map(({ title }) => {
	return titleToUrl(title);
});

// Generate segments for [subSection] using the `params` passed from
// the parent segment's `generateStaticParams` function
export async function generateStaticParams({
	params: { section },
}: {
	params: { section: string };
}) {
	const courseSection = bodyWisdomCourseSections.find(
		({ title }: { title: string }) => {
			return titleToUrl(title) === section;
		},
	);

	if (!courseSection) {
		return []; // Return an empty array if courseSection is undefined
	}

	const sections = (
		courseSection as { sections: { title: string }[] }
	).sections.map(({ title }: { title: string }) => {
		return titleToUrl(title);
	});

	return sections.map((section: string) => ({
		subSection: section,
	}));
}

function Page({ params }: { params: { section: string; subSection: string } }) {
	const { section, subSection } = params;
	const sectionData = bodyWisdomCourseSections.find(
		({ title }: { title: string }) => {
			return titleToUrl(title) === section;
		},
	);

	if (!sectionData) {
		// if the section is not valid, automatically redirect to the course content page
		// console.log("redirecting to course content");
		return <Link href="/body-wisdom/course-content">Redirecting...</Link>;
	}

	const subSectionData = sectionData.sections.find(
		({ title }: { title: string }) => {
			return titleToUrl(title) === subSection;
		},
	);

	if (!subSectionData) {
		// if the subSection is not valid, automatically redirect to the first subSection
		// console.log("redirecting to first subSection");
		return (
			<Link href={`/body-wisdom/course-content/${section}/`}>
				Redirecting...
			</Link>
		);
	}

	return (
		<div className="min-h-screen w-full flex flex-col items-center">
			<div className="max-w-7xl w-full sm:w-7xl pl-4 pt-16">
				<h1 className="text-3xl mb-10">{subSectionData.title}</h1>
				<div className="flex flex-col gap-4">
					{subSectionData.title}
					<div>{subSectionData.content}</div>
				</div>
				<SideNav />
			</div>
		</div>
	);
}

export default Page;
