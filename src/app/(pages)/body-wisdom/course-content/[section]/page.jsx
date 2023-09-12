import Link from "next/link"
import { bodyWisdomCourseSections, titleToUrl } from "../courseSections"

const urls = bodyWisdomCourseSections.map(({ title }) => {
    return titleToUrl(title)
})

export async function generateStaticParams() {
    // map the courseSections to the url [name]
    return urls.map((url) => ({
        section: url,
    }))
}

function Page({ params }) {
    const { section } = params
    const sectionData = bodyWisdomCourseSections.find(({ title }) => {
        return titleToUrl(title) === section
    })

    if (!sectionData) {
        // if the section is not valid, automatically redirect to the course content page
        console.log("redirecting to course content")
        return <Link href="/body-wisdom/course-content">Redirecting...</Link>
    }

    return (
        <div className="min-h-screen w-screen flex flex-col items-center">
            <div className="max-w-7xl w-screen sm:w-7xl pl-4 pt-16">
                <h1 className="text-3xl mb-10">{sectionData.title}</h1>
                <div className="flex flex-col gap-4">
                    {sectionData.sections.map((subSection, index) => {
                        const { title, uuid, content } = subSection
                        const subSectionUrl = titleToUrl(title)
                        return (
                            <div
                                key={`${subSectionUrl}-${index}`}
                                className="h-4 mb-2"
                            >
                                <Link
                                    href={`/body-wisdom/course-content/${section}/${subSectionUrl}`}
                                >
                                    <button className="text-nblg-500 font-semibold border-b-2 hover:border-b-0 border-b-nblg-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed">
                                        {title}
                                    </button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Page
