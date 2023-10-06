'use client';
/**
 * Active NaveLink
 * hooks is used in client side. not in server side. so if we use hooks we have to use 'use client';
 */
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import classNames from '@/utils/classNames';

function NavLink({ children, href, exact = false, activeClassName, ...props }) {
	// usePathname hook will give current path name like in this url 'example.com/about' it will give path name: '/about'
	const path = usePathname();

	const active = exact ? path === href : path.startsWith(href);
	const classes = classNames(props.className, active && activeClassName);
	if (classes) {
		props.className = classes;
	}

	return (
		<Link href={href} {...props}>
			{children}
		</Link>
	);
}

export default NavLink;
