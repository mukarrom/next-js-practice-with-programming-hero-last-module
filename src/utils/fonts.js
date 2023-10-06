import { Roboto, Trocchi } from 'next/font/google';
import banglaStyle from 'next/font/local';

export const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
	display: 'swap',
});

export const trocchi = Trocchi({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-trocchi',
	display: 'swap',
});

export const bnFont = banglaStyle({
	src: './../assets/fonts/banglaStyle.ttf',
	variable: '--font-bnFont',
	display: 'swap',
});
