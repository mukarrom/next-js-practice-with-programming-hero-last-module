import NavLink from '@/components/NavLink';

const navLinks = [
	{
		path: '/dashboard',
		title: 'Dashboard',
	},
	{
		path: '/dashboard/add-product',
		title: 'Add Product',
	},
	{
		path: '/dashboard/manage-products',
		title: 'Manage Products',
	},
	{
		path: '/',
		title: 'Home',
	},
];
function Sidebar() {
	return (
		<aside className="mr-10">
			<h1 className="text-3xl font-semibold">Dashboard</h1>
			<ul>
				{navLinks.map(({ path, title }) => (
					<li className="my-2" key={path}>
						<NavLink activeClassName="text-blue-500" href={path} exact>
							{title}
						</NavLink>
					</li>
				))}
			</ul>
		</aside>
	);
}

export default Sidebar;
