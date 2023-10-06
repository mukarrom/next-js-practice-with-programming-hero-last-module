import loadBlogsData from '@/utils/loadBlogsData';
import loadSingleBlogData from '@/utils/loadSingleBlogData';
import React from 'react';

// generate metadata
export const generateMetaData = async ({ params }) => {
	const { title, body } = await loadSingleBlogData(params.id);
	return {
		title: title,
	};
};

export const generateStaticParams = async () => {
	const blogs = await loadBlogsData();

	return blogs.map(({ id }) => ({
		id: id.toString(),
	}));
};

const DynamicBlogPage = async ({ params }) => {
	const { title, body } = await loadSingleBlogData(params.id);
	return (
		<div className="container mx-auto mt-10">
			<h2 className="text-3xl text-center">{title}</h2>
			<p>{body}</p>
		</div>
	);
};

export default DynamicBlogPage;
