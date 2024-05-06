import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient"
import NewsletterForm from "@/components/NewsletterForm"
import PostImage from "@/components/postComponents/PostImage"
import { getSortedPostsData } from "@/lib/posts"
import dayjs from 'dayjs'
import Link from "next/link"

async function getData() {
    const allPostsData = getSortedPostsData()
    if (!allPostsData) {
        throw new Error
    }
    return allPostsData
}

const Posts = async () => {
    
    // const allPostsData = await getAllPostData()
    const data = await getData()
    const mappedData = data.map(({ id, title, date }) => {
        const year = dayjs(date).year()
        const month = dayjs(date).format('YYYY-MM')
  
        return {
            date,
            year,
            month,
            id,
            title
        }
    })

    return (
        <>
        <section className="relative">
        <FullWidthImageBehindGradient variant="dark" imageUrl="/images/nourished-typing-on-computer.jpg">
            <p className="font-transat-bold w-screen text-center uppercase">Blog</p>
        </FullWidthImageBehindGradient>
        </section>
        <section className="relative min-h-screen w-screen px-4 mt-16 flex flex-col items-center">
        <div id="posts" className="max-w-7xl w-full flex flex-col items-center">
            <div className="relative grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {mappedData.map(({ id, title, date, year, month }, i, array) => {
                    const lastItemAfter = array.length - 1 === i ? "after:content-[' hello ']" : ""
                    return (
                    <Link href={`/blog/${id}`} key={id} className={lastItemAfter}>
                        <PostImage variant="primary" imageUrl={`/images/blog/${id}.jpg`} >
                            {title}
                        </PostImage>
                    </Link>
                )})}
            </div>
        </div>
        </section>
        <section id="newsletter" className="relative mt-10 w-full flex flex-col items-center">
            <p className="font-transat-light max-w-xl text-2xl text-center px-4 pb-10">Sign up for our newsletter for knowledge, know-how and advice for living an abundantly nourished life:</p>
            <NewsletterForm />
        </section>
        </>
    )
}

export default Posts