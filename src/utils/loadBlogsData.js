const loadBlogsData = async () => {
	// fetch blogs data
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		cache: 'force-cache',
	});
	return response.json();
};

export default loadBlogsData;
