const loadSingleBlogData = async (id) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		cache: 'no-cache', // This is dynamic fetch. we defined 'no-cache' to be more insure.
	});
	return res.json();
};

export default loadSingleBlogData;
