import Link from 'next/link';
import { database as list } from '@/components/database';
import DefaultLayout from '@/layouts/default';
import { title, subtitle } from '@/components/primitives';
import { Button, Image, Card, CardBody, CardFooter } from '@nextui-org/react';
import { getProducts } from './api/api';
import { useEffect, useState } from 'react';
import { createTransaction } from './api/api';

export default function IndexPage() {
	const [hotProducts, setHotProducts] = useState([]);
	const [token, setToken] = useState('');
	const [url, setURL] = useState('');

	// const refreshPage = async () => {
	// 	setHotProducts([]);
	// };

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getProducts();
				setHotProducts(result);
			} catch (error) {}
		};
		fetchData();
	}, []);

	const createT = async () => {
		try {
			const result = await createTransaction();
			setToken(result.token);
			setURL(result.url);
		} catch (error) {}
	};

	return (
		<DefaultLayout>
			{/* <div>
				<Button className='text-xs py-1' onClick={refreshPage}>
					Mostrar datos GraphQL
				</Button>
			</div> */}
			<section>
				<Button onPress={() => createT()}>crear transacción</Button>
			</section>
			<section>
				<form method='get' action={url}>
					<input type='hidden' name='token_ws' value={token} />
					<input type='submit' value='Ir a pagar' />
				</form>
			</section>
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
					<Link href='/collection'>
						<Button color='primary' className='text-xs py-1'>
							VER NUESTRA COLECCIÓN
						</Button>
					</Link>
				</div>
			</section>

			<section className='flex flex-col items-center justify-center gap-12 py-8 md:py-10'>
				<div className='flex'>
					<h1 className={title({ color: 'yellow' })}>
						Novedades&nbsp;
					</h1>
				</div>
				<div className='gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
					{hotProducts.map(
						(item: any) =>
							item.isFavourite && (
								<Link
									href={`/product/${item.id}`}
									key={item.id}
								>
									<Card
										shadow='sm'
										isPressable
										onPress={() =>
											console.log('item pressed')
										}
									>
										<CardBody className='overflow-visible p-0'>
											<Image
												isZoomed
												shadow='sm'
												radius='lg'
												width='100%'
												alt={item.name}
												className='w-full object-cover h-[310px]'
												src={item.image}
											/>
										</CardBody>
										<CardFooter className='text-small justify-between max-w-[222px]'>
											<b>{item.name}</b>
											<p className='text-default-500'>
												${item.price}
											</p>
										</CardFooter>
									</Card>
								</Link>
							)
					)}
				</div>

				<Link href='/collection'>
					<Button color='primary' className='text-xs py-1'>
						VER NUESTRA COLECCIÓN
					</Button>
				</Link>
			</section>
		</DefaultLayout>
	);
}
