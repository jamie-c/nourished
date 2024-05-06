import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient"
import { getAllPostIds, getPostData } from "@/lib/posts"
import dayjs from "dayjs"
import Link from "next/link"

// use generateStaticParams to generate all url ids at build to be statically served
export async function generateStaticParams() {
    // get all post ids, which will serve as the url id, i.e. /posts/id
    const posts = getAllPostIds()

    // map the ids to the url ids
    return posts.map((post) => {
        return {
            id: post.params.id,
        }
    })
}

// define the page content for each post
async function Page({ params }) {
    // Read contents of the .md file from the server
    async function getHTML(id) {
        const postData = await getPostData(id)
        return postData // return html content as string
    }

    const { id, contentHtml, title, date, author } = await getHTML(params.id) // get all meta data

    const formattedDate = dayjs(date).format("MMM DD, YYYY") // format the date for display on the page

    const authors = {
        "Jamie Conway": "https://twitter.com/jamie_conway",
        "Lindsey Conway": "https://www.instagram.com/nourishedco",
    }

    const postAuthorUrl =
        author && authors[author]
            ? authors[author]
            : "https://www.instagram.com/nourishedco"

    return (
        <>
            <FullWidthImageBehindGradient
                variant="primary"
                imageUrl={`/images/blog/${id}.jpg`}
            >
                <p className="font-transat-bold w-screen text-center text-balance uppercase px-4 md:px-20">
                    {title}
                </p>
            </FullWidthImageBehindGradient>
            <section className="relative w-screen flex flex-col items-center">
                <div
                    id="post-content"
                    className="px-8 md:px-24 lg:px-48 max-w-7xl w-full flex flex-col items-start"
                >
                    {/* element containing a back arrow and link back to the previous page */}
                    <div id="back-link">
                        <Link
                            href="/blog"
                            className="group relative flex flex-row items-center justify-start my-4"
                        >
                            <svg
                                className="w-6 h-6 mr-1 pb-1 group-hover:stroke-nblg-700"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#009681"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <title>Back Chevron Arrow</title>
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                            <span className="text-lg relative text-nblg-500 group-hover:text-nblg-700">
                                Posts
                            </span>
                        </Link>
                    </div>
                    {/* element containing the title in a heading */}
                    <h1
                        id="post-title"
                        className="text-3xl md:text-5xl font-transat-bold mt-8 mb-4"
                    >
                        {title}
                    </h1>
                    {/* element containing the post content starting with formattedDate, vertical line, link to author */}
                    <div
                        id="post-metadata"
                        className="flex flex-row items-center justify-start text-sm font-transat-light mb-8 divide-x-2 divide-ndag-500"
                    >
                        <div className="text-nbrg-500 pr-6">
                            {formattedDate}
                        </div>
                        <div className="pl-6">
                            <a
                                className="text-nblg-500 hover:text-nblg-700"
                                href={postAuthorUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {author}
                            </a>
                        </div>
                    </div>
                    {/* finally, element containing the post content */}
                    <div
                        id="inner-html"
                        className="text-xl flex flex-col gap-4"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </div>
            </section>
        </>
    )
}

export default Page
