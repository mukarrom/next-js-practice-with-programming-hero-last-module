import Navbar from '@/components/Navbar';

function WithLayout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
			<footer>Footer</footer>
		</div>
	);
}

export default WithLayout;
