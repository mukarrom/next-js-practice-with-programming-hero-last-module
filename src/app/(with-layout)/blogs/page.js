import loadBlogsData from '@/utils/loadBlogsData';
import Link from 'next/link';

export const metadata = {
	title: 'next | blog',
	description: 'Blogs',
};

const BlogPage = async () => {
	const blogs = await loadBlogsData();

	return (
		<div className="container mx-auto">
			{blogs.map(({ id, title, body }) => (
				<Link
					className="block border border-blue-500 p-2 my-2"
					href={`/blogs/${id}`}
					key={id}
				>
					{title}
				</Link>
			))}
		</div>
	);
};

export default BlogPage;
