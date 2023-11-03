import NextLink from 'next/link';
import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import DefaultLayout from '@/layouts/default';
import { Button, Image, Card, CardBody, CardFooter } from '@nextui-org/react';

export default function IndexPage() {
	const list = [
		{
			title: 'Naruto #1',
			img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/49/bb/49bbd5156c3b634e5a118938c974440b.jpg',
			price: '$5.50',
		},
		{
			title: 'Attack on Titan #1',
			img: 'https://cdnx.jumpseller.com/shazam-online/image/17332513/1.jpg?1625328829',
			price: '$3.00',
		},
		{
			title: 'Hunter X Hunter #1',
			img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/5c/55/5c558c0472e5b78726e7c703aa5a55e8.jpg',
			price: '$10.00',
		},
		{
			title: 'Slam Dunk #1',
			img: 'https://cdnx.jumpseller.com/shazam-online/image/16713613/187399676_10159106106169246_2618465024110458039_n__2_.jpg?1644614770',
			price: '$5.30',
		},
		{
			title: 'Full Metal Alchemist #1',
			img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/35/ad/35adda162d2241148a057fae26520792.jpg',
			price: '$15.70',
		},
		{
			title: 'Dr. Stone #1',
			img: 'https://cdnx.jumpseller.com/kioscosch/image/17176007/Dr._Stone_1.jpg?1623959648',
			price: '$8.00',
		},
		{
			title: 'Dragon Ball Z #3',
			img: 'https://www.worldsendcomics.com//images/content/products/2018-10/78200903353000311.jpg',
			price: '$7.50',
		},
		{
			title: 'Akira #1',
			img: 'https://www.crazyallcomics.cl/media/catalog/product/cache/23/image/500x400/17f82f742ffe127f42dca9de82fb58b1/a/k/akira_esp_01.jpg',
			price: '$12.20',
		},
	];

	return (
		<DefaultLayout>
			<section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
				<div className='inline-block text-center justify-center'>
					<h1 className={title({ color: 'violet' })}>
						Manga Kingdom,&nbsp;
					</h1>
					<h1 className={title()}>tu fuente de manga </h1>
					<h1 className={title({ color: 'yellow' })}>#1&nbsp;</h1>
					<h1 className={title()}>del país.</h1>
					<h4 className={subtitle({ class: 'mt-4' })}>
						Lo último en tus mangas favoritos.
					</h4>
				</div>

				<div className='max-w-full'>
					<Image
						isZoomed
						width={1500}
						alt='Slide Image'
						src='https://elvortex.com/wp-content/uploads/2018/01/Slider-028-Mejores-Animes-2017.jpg'
					/>
				</div>

				<div>
					<Button color='primary' className='text-xs py-1'>
						VER NUESTRA COLECCIÓN
					</Button>
				</div>

				{/* <div className='flex gap-3'>
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.docs}
						className={buttonStyles({
							color: 'primary',
							radius: 'full',
							variant: 'shadow',
						})}
					>
						Documentation
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({
							variant: 'bordered',
							radius: 'full',
						})}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>

				<div className='mt-8'>
					<Snippet hideSymbol hideCopyButton variant='bordered'>
						<span>
							Get started by editing{' '}
							<Code color='primary'>pages/index.tsx</Code>
						</span>
					</Snippet>
				</div> */}
			</section>
			<section className='flex flex-col items-center justify-center gap-12 py-8 md:py-10'>
				<div className='flex'>
					<h1 className={title({ color: 'yellow' })}>
						Novedades&nbsp;
					</h1>
				</div>
				<div className='gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
					{list.map((item, index) => (
						<Card
							shadow='sm'
							key={index}
							isPressable
							onPress={() => console.log('item pressed')}
						>
							<CardBody className='overflow-visible p-0'>
								<Image
									isZoomed
									shadow='sm'
									radius='lg'
									width='100%'
									alt={item.title}
									className='w-full object-cover h-[310px]'
									src={item.img}
								/>
							</CardBody>
							<CardFooter className='text-small justify-between max-w-[222px]'>
								<b>{item.title}</b>
								<p className='text-default-500'>{item.price}</p>
							</CardFooter>
						</Card>
					))}
				</div>
				<Button color='primary' className='text-xs py-1'>
					VER NUESTRA COLECCIÓN
				</Button>
			</section>
		</DefaultLayout>
	);
}
