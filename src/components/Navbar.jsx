import NavLink from './NavLink';

const navLinks = [
	{
		path: '/',
		title: 'Home',
	},
	{
		path: '/about',
		title: 'About',
	},
	{
		path: '/profile',
		title: 'Profile',
	},
	{
		path: '/blogs',
		title: 'Blogs',
	},
	{
		path: '/dashboard',
		title: 'Dashboard',
	},
];

function Navbar() {
	return (
		<nav className="flex items-center justify-between container mx-auto shadow-md p-4">
			<h1 className="text-3xl font-semibold">Next hero</h1>
			<ul className="flex items-center justify-center">
				{navLinks.map(({ path, title }) => (
					<li className="mx-2" key={path}>
						<NavLink
							activeClassName="text-blue-500"
							href={path}
							exact={path === '/'} // check exact path name
						>
							{title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
