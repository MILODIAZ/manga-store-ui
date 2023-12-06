import { useRouter } from 'next/router';
import { Chip, Image, Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import DefaultLayout from '@/layouts/default';
import { title } from '@/components/primitives';
import { Button } from '@nextui-org/react';
import { getProduct } from '../api/api';

export default function ProductDetail() {
	const router = useRouter();
	const { productId } = router.query;

	const [product, setProduct] = useState<any>(null);
	const [quantity, setQuantity] = useState<number>(1);

	const fetchData = async (id: number) => {
		try {
			const result = await getProduct(id);
			setProduct(result);
		} catch (error) {}
	};

	useEffect(() => {
		if (productId && !isNaN(Number(productId))) {
			const id = Number(productId);
			console.log(id);
			fetchData(id);
		}
	}, [productId]);

	return (
		<DefaultLayout>
			{product && (
				<section className='flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10 max-w-6xl'>
					<div className='w-full md:w-1/2 flex justify-center'>
						<Image
							className='w-full mx-auto'
							alt={product.name}
							src={product.image}
						/>
					</div>
					<div className='flex w-5/6 md:w-1/2 justify-center'>
						<div className='md:w-4/6'>
							<h1 className={title({ color: 'yellow' })}>
								{product.name}
							</h1>

							<p className='text-xl'>Precio: ${product.price} </p>
							<p className='text-sm'>
								Disponibles: {product.totalStock}
							</p>
							<div className='flex flex-row mt-8'>
								<Input
									type='number'
									placeholder='1'
									labelPlacement='outside'
									startContent={
										<div className='pointer-events-none flex items-center'>
											<span className='text-default-400 text-small'>
												Cantidad:
											</span>
										</div>
									}
									min={1}
									max={product.totalStock}
									value={quantity}
									onValueChange={setQuantity}
								/>
								<Button
									color={
										product.totalStock === 0
											? 'danger'
											: 'primary'
									}
									className='text-xs py-1'
									onClick={() => console.log('click')}
									disabled={product.totalStock === 0}
								>
									{product.totalStock === 0
										? 'Out of Stock'
										: 'Añadir al carrito'}
								</Button>
							</div>

							<br />
							<br />
							<p>Autor: {product.author}</p>
							<br />
							<p className='text-justify'>
								Descripción: {product.description}
							</p>
							<br />
							<div className='flex flex-wrap justify-around'>
								<p>Categorías:</p>
								{product.categories.map((category: any) => (
									<Chip key={category.id}>
										{category.name}
									</Chip>
								))}
							</div>
						</div>
					</div>
				</section>
			)}
		</DefaultLayout>
	);
}
