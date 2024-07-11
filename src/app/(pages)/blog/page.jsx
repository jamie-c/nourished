import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient";
import NewsletterForm from "@/components/NewsletterForm";
import PostImage from "@/components/postComponents/PostImage";
import { getSortedPostsData } from "@/lib/posts";
import dayjs from "dayjs";
import Link from "next/link";

async function getData() {
	const allPostsData = getSortedPostsData();
	if (!allPostsData) {
		throw new Error();
	}
	return allPostsData;
}

const Posts = async () => {
	// const allPostsData = await getAllPostData()
	const data = await getData();
	const mappedData = data.map(({ id, title, date }) => {
		const year = dayjs(date).year();
		const month = dayjs(date).format("YYYY-MM");

		return {
			date,
			year,
			month,
			id,
			title,
		};
	});

	return (
		<div className="w-full flex flex-col gap-20">
			<section className="relative">
				<FullWidthImageBehindGradient
					variant="dark"
					imageUrl="/images/nourished-typing-on-computer.jpg"
				>
					<p className="font-transat-bold w-full text-center uppercase drop-shadow-lg">
						Blog
					</p>
				</FullWidthImageBehindGradient>
			</section>
			<section className="relative w-full px-4 flex flex-col items-center">
				<div id="posts" className="max-w-7xl w-full flex flex-col items-center">
					<div className="relative grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{mappedData.map(({ id, title, date }, i, array) => {
							const [year, month, day, ...rest] = id.split("-"); // get the year, month, and day from the id
							return (
								<Link
									href={`/blog/${id}`}
									key={id}
									className="group rounded overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-darkgreen-200 transition-all duration-200 ease-in"
								>
									<PostImage
										variant="primary"
										imageUrl={`/images/blog/${year}/${month}/${day}/${id}.jpg`}
									>
										{title}
									</PostImage>
								</Link>
							);
						})}
					</div>
				</div>
			</section>
			<section
				id="newsletter"
				className="relative w-full flex flex-col items-center mb-10"
			>
				<p className="font-transat-light max-w-xl text-2xl text-center px-4 pb-10">
					Sign up for our newsletter for knowledge, know-how and advice for
					living an abundantly nourished life:
				</p>
				<NewsletterForm />
			</section>
		</div>
	);
};

export default Posts;
