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
	Select,
	SelectItem,
} from '@nextui-org/react';
import { SearchIcon } from '@/components/icons';
import { useEffect, useState } from 'react';
import { getProducts, getCategories } from './api/api';

export default function CollectionPage() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [categoryFilter, setCategoryFilter] = useState<string>('');
	const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCategoryFilter(e.target.value);
	};
	const [nameFilter, setNameFilter] = useState<string>('');
	const [minPriceFilter, setMinPriceFilter] = useState<string>('');
	const [maxPriceFilter, setMaxPriceFilter] = useState<string>('');
	const cleanFilters = () => {
		setMinPriceFilter('');
		setMaxPriceFilter('');
		setNameFilter('');
		fetchProducts();
	};

	const fetchProducts = async (
		categoryId?: number,
		search?: string,
		minPrice?: number,
		maxPrice?: number
	) => {
		try {
			const result = await getProducts(
				categoryId !== 0 ? categoryId : undefined,
				search !== '' ? search : undefined,
				minPrice !== 0 ? minPrice : undefined,
				maxPrice !== 0 ? maxPrice : undefined
			);
			setProducts(result);
		} catch (error) {}
	};

	const fetchCategories = async () => {
		try {
			const result = await getCategories();
			setCategories(result);
		} catch (error) {}
	};

	useEffect(() => {
		fetchProducts();
		fetchCategories();
	}, []);

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
								value={nameFilter}
								onValueChange={setNameFilter}
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
								value={minPriceFilter}
								onValueChange={setMinPriceFilter}
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
								value={maxPriceFilter}
								onValueChange={setMaxPriceFilter}
							/>
							<div className='max-h-full overflow-y-auto'>
								<Select
									selectedKeys={categoryFilter}
									onChange={handleSelectionChange}
									label='Categoría'
									placeholder='Elige una categoría'
									className='max-w-xs'
								>
									<SelectItem key={0} value={0}>
										Todas
									</SelectItem>
									{categories.map((category: any) => (
										<SelectItem
											key={category.id}
											value={category.id}
										>
											{category.name}
										</SelectItem>
									))}
								</Select>
							</div>
							<Button
								color='primary'
								onPress={() => {
									fetchProducts(
										parseInt(categoryFilter, 10),
										nameFilter,
										parseInt(minPriceFilter, 10),
										parseInt(maxPriceFilter, 10)
									);
								}}
							>
								Aplicar filtros
							</Button>
							<Button
								color='danger'
								onPress={() => {
									cleanFilters();
								}}
							>
								Quitar filtros
							</Button>
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
								value={nameFilter}
								onValueChange={setNameFilter}
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
									value={minPriceFilter}
									onValueChange={setMinPriceFilter}
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
									value={maxPriceFilter}
									onValueChange={setMaxPriceFilter}
								/>
							</div>
							<div className='max-h-full overflow-y-auto'>
								<Select
									selectedKeys={categoryFilter}
									onChange={handleSelectionChange}
									label='Categoría'
									placeholder='Elige una categoría'
									className='max-w-xs'
								>
									<SelectItem key={0} value={0}>
										Todas
									</SelectItem>
									{categories.map((category: any) => (
										<SelectItem
											key={category.id}
											value={category.id}
										>
											{category.name}
										</SelectItem>
									))}
								</Select>
							</div>
							<Button
								color='primary'
								onPress={() => {
									fetchProducts(
										parseInt(categoryFilter, 10),
										nameFilter,
										parseInt(minPriceFilter, 10),
										parseInt(maxPriceFilter, 10)
									);
								}}
							>
								Aplicar filtros
							</Button>
							<Button
								color='danger'
								onPress={() => {
									cleanFilters();
								}}
							>
								Quitar filtros
							</Button>
						</div>
						<div className='w-full lg:w-3/4'>
							<div className='flex flex-col gap-12 justify-center'>
								<div className='gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
									{products.map((item: any, index) => (
										<Link
											key={item.id}
											href={`/product/${item.id}`}
										>
											<Card
												className='max-w-[222px]'
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
														className='w-full object-cover h-[300px] md:h-[340px]'
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
