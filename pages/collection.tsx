import DefaultLayout from '@/layouts/default';
import {
	Button,
	Image,
	Card,
	CardBody,
	CardFooter,
	Input,
	Kbd,
	CheckboxGroup,
	Checkbox,
	Pagination,
	Accordion,
	AccordionItem,
} from '@nextui-org/react';
import { title, subtitle } from '@/components/primitives';
import { SearchIcon } from '@/components/icons';

export default function CollectionPage() {
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
			<div className='flex justify-center'>
				<section className='flex flex-col items-center justify-center gap-12 py-8 md:py-10 max-w-[1540px]'>
					<div className='flex justify-center'>
						<Pagination
							isCompact
							showControls
							total={10}
							initialPage={1}
						/>
					</div>
					<div className='flex flex-col lg:flex-row gap-6 min-w-full justify-between'>
						<div className='w-1/4 hidden lg:flex flex-col gap-2'>
							<p className='text-sky-400/100 text-xl text-blue-700 font-bold'>
								Colección&nbsp;
							</p>
							<Input
								label='Nombre'
								aria-label='Search'
								classNames={{
									inputWrapper: 'bg-default-100',
									input: 'text-sm',
								}}
								labelPlacement='outside'
								placeholder='Buscar...'
								startContent={
									<SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />
								}
								type='search'
							/>
							<Input
								type='number'
								label='Precio mínimo'
								placeholder='-'
								labelPlacement='outside'
								startContent={
									<div className='pointer-events-none flex items-center'>
										<span className='text-default-400 text-small'>
											$
										</span>
									</div>
								}
							/>
							<Input
								type='number'
								label='Precio máximo'
								placeholder='-'
								labelPlacement='outside'
								startContent={
									<div className='pointer-events-none flex items-center'>
										<span className='text-default-400 text-small'>
											$
										</span>
									</div>
								}
							/>
							<div className='max-h-full overflow-y-auto'>
								<CheckboxGroup
									label='Categorías'
									defaultValue={['acción', 'carreras']}
								>
									<Checkbox value='acción'>Acción</Checkbox>
									<Checkbox value='artes marciales'>
										Artes Marciales
									</Checkbox>
									<Checkbox value='aventuras'>
										Aventuras
									</Checkbox>
									<Checkbox value='carreras'>
										Carreras
									</Checkbox>
									<Checkbox value='ciencia ficción'>
										Ciencia Ficción
									</Checkbox>
									<Checkbox value='comedia'>Comedia</Checkbox>
									<Checkbox value='demencia'>
										Demencia
									</Checkbox>
									<Checkbox value='demonios'>
										Demonios
									</Checkbox>
									<Checkbox value='deportes'>
										Deportes
									</Checkbox>
									<Checkbox value='drama'>Drama</Checkbox>
									<Checkbox value='ecchi'>Ecchi</Checkbox>
								</CheckboxGroup>
							</div>
						</div>
						<div className='w-full flex lg:hidden flex-col gap-2'>
							<Input
								aria-label='Search'
								classNames={{
									inputWrapper: 'bg-default-100',
									input: 'text-sm',
								}}
								labelPlacement='outside'
								placeholder='Buscar...'
								startContent={
									<SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />
								}
								type='search'
							/>
							<div className='flex flex-row gap-2'>
								<Input
									type='number'
									placeholder='Precio mínimo'
									labelPlacement='outside'
									startContent={
										<div className='pointer-events-none flex items-center'>
											<span className='text-default-400 text-small'>
												$
											</span>
										</div>
									}
								/>
								<Input
									type='number'
									placeholder='Precio máximo'
									labelPlacement='outside'
									startContent={
										<div className='pointer-events-none flex items-center'>
											<span className='text-default-400 text-small'>
												$
											</span>
										</div>
									}
								/>
							</div>
							<Accordion>
								<AccordionItem
									key='1'
									aria-label='Categorías'
									title='Categorías'
								>
									<div className='max-h-full'>
										<CheckboxGroup
											orientation='horizontal'
											defaultValue={[
												'acción',
												'carreras',
											]}
										>
											<Checkbox value='acción'>
												Acción
											</Checkbox>
											<Checkbox value='artes marciales'>
												Artes Marciales
											</Checkbox>
											<Checkbox value='aventuras'>
												Aventuras
											</Checkbox>
											<Checkbox value='carreras'>
												Carreras
											</Checkbox>
											<Checkbox value='ciencia ficción'>
												Ciencia Ficción
											</Checkbox>
											<Checkbox value='comedia'>
												Comedia
											</Checkbox>
											<Checkbox value='demencia'>
												Demencia
											</Checkbox>
											<Checkbox value='demonios'>
												Demonios
											</Checkbox>
											<Checkbox value='deportes'>
												Deportes
											</Checkbox>
											<Checkbox value='drama'>
												Drama
											</Checkbox>
											<Checkbox value='ecchi'>
												Ecchi
											</Checkbox>
										</CheckboxGroup>
									</div>
								</AccordionItem>
							</Accordion>
						</div>
						<div className='w-full lg:w-3/4'>
							<div className='flex flex-col gap-12 justify-center'>
								<div className='gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
									{list.map((item, index) => (
										<Card
											className='max-w-[222px]'
											shadow='sm'
											key={index}
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
													alt={item.title}
													className='w-full object-cover h-[300px] md:h-[340px]'
													src={item.img}
												/>
											</CardBody>
											<CardFooter className='text-small justify-between max-w-[222px]'>
												<b>{item.title}</b>
												<p className='text-default-500'>
													{item.price}
												</p>
											</CardFooter>
										</Card>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-center'>
						<Pagination
							isCompact
							showControls
							total={10}
							initialPage={1}
						/>
					</div>
				</section>
			</div>
		</DefaultLayout>
	);
}
