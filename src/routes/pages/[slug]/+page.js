export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, dir, icon } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		dir,
		icon
	};
}
