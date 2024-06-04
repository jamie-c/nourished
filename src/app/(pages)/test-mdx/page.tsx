import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import blogpost from "./2023-07-12-beautycounter-revolutionizing-the-beauty-industry-with-safer-and-sustainable-products.mdx";

console.log(blogpost);

export default async function RemoteMdxPage() {
	const mdxSource = await serialize(blogpost);
	return <MDXRemote {...mdxSource} />;
}
