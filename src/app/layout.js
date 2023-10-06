import { bnFont, roboto, trocchi } from '@/utils/fonts';
import './globals.css';

export const metadata = {
	title: 'Next Hero',
	description: 'Next Hero',
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body
				className={`${roboto.variable} ${trocchi.variable} ${bnFont.variable}`}
			>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
