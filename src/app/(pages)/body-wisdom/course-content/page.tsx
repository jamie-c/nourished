import Link from "next/link"
import { bodyWisdomCourseSections, titleToUrl } from "./courseSections"

function Page() {
    return (
        <div className="min-h-screen w-screen flex flex-col items-center">
            <div className="max-w-7xl w-screen sm:w-7xl pl-4 pt-16">
                <h1 className="text-3xl mb-10">
                    Welcome to the Purposeful Food Journal
                </h1>
                <div className="flex flex-col gap-4">
                    {bodyWisdomCourseSections.map((section, index) => {
                        const sectionUrl = titleToUrl(section.title)
                        return (
                            <div
                                key={`${sectionUrl}-${index}`}
                                className="h-4 mb-2"
                            >
                                <Link
                                    href={`/body-wisdom/course-content/${sectionUrl}`}
                                >
                                    <button className="text-nblg-500 font-semibold border-b-2 hover:border-b-0 border-b-nblg-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed">
                                        {section.title}
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
