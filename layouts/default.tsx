import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/link';
import { Head } from './head';
import { Logo } from '@/components/icons';
import NextLink from 'next/link';

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='relative flex flex-col h-screen'>
			<Head />
			<Navbar />
			<main className='flex flex-col container mx-auto max-w-6xl px-6 flex-grow justify-center'>
				{children}
			</main>
			<footer className='w-full flex items-center justify-center py-3'>
				<NextLink
					className='flex justify-start items-center gap-1'
					href='/'
				>
					<Logo />
					<p className='font-bold text-inherit pl-2'>Manga Kingdom</p>
				</NextLink>
			</footer>
		</div>
	);
}
