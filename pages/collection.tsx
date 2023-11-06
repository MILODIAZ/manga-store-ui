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
	Link,
} from '@nextui-org/react';
import { title, subtitle } from '@/components/primitives';
import { SearchIcon } from '@/components/icons';
import { database as list } from '@/components/database';

export default function CollectionPage() {
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
										<Link key={item.id} href={`/product/${item.id}`}>
										
										  <Card
											className='max-w-[222px]'
											shadow='sm'
											isPressable
											onPress={() => console.log('item pressed')}
										  >
											<CardBody className='overflow-visible p-0'>
											  <Image
												isZoomed
												shadow='sm'
												radius='lg'
												width='100%'
												alt={item.name}
												className='w-full object-cover h-[300px] md:h-[340px]'
												src={item.image}
											  />
											</CardBody>
											<CardFooter className='text-small justify-between max-w-[222px]'>
											  <b>{item.name}</b>
											  <p className='text-default-500'>{item.price}</p>
											</CardFooter>
										  </Card>
					
									  </Link>
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
