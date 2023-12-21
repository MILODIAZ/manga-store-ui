import {
	Button,
	Kbd,
	Link,
	Input,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	useDisclosure,
	Checkbox,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	getKeyValue,
	User,
} from '@nextui-org/react';

import { link as linkStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';

import { ThemeSwitch } from '@/components/theme-switch';
import { LoginIcon, CartIcon, DeleteIcon, LockIcon } from '@/components/icons';

import { Logo } from '@/components/icons';
import { useCart } from '@/hooks/useCart';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { deleteItem, loginAPI } from '@/pages/api/api';

export const Navbar = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const {
		cartProducts,
		handleRemoveProductFromCart,
		handleEmptyCart,
		handleLogin,
		inSession,
		handleLogout,
		inSessionName,
		inSessionLastName,
		inSessionUserName,
		inSessionEmail,
		handleLoadUserCart,
	} = useCart();

	const [loginUserName, setLoginUserName] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const fetchLogin = async (data: any) => {
		try {
			const result = await loginAPI(data);
			if (result.data) {
				toast.success('Acceso exitoso!');
				setLoginUserName('');
				setLoginPassword('');
				const userData = result.data.login.user;
				userData.jwt = result.data.login.jwt;
				handleLogin(userData);
				console.log(result.data.login.cart);
				handleLoadUserCart(result.data.login.cart);
			} else {
				toast.error('Usuario o contraseña incorrectos :/');
			}
		} catch (error) {}
	};

	const columns = [
		{
			key: 'product',
			label: 'PRODUCTO',
		},
		{
			key: 'quantity',
			label: 'CANTIDAD',
		},
		{
			key: 'total',
			label: 'MONTO',
		},
		{
			key: 'actions',
			label: '',
		},
	];

	const Cart = () => {
		const renderCell = React.useCallback(
			(product: any, columnKey: React.Key) => {
				const cellValue = product[columnKey as any];
				switch (columnKey) {
					case 'product':
						return <h1>{product.product}</h1>;
					case 'quantity':
						return (
							<h1 className='text-end'>X {product.quantity}</h1>
						);
					case 'total':
						return <h1 className='text-end'>${product.total}</h1>;
					case 'actions':
						return (
							<Button
								onPress={() => {
									if (inSession) {
										deleteItem(
											parseInt(product.id, 10),
											inSessionUserName
										);
									}

									handleRemoveProductFromCart(
										product.product
									);
								}}
								variant='light'
							>
								<DeleteIcon />
							</Button>
						);
					default:
						return cellValue;
				}
			},
			[]
		);

		if (!cartProducts || cartProducts.length === 0) {
			return <h1>Carro vacío</h1>;
		}

		return (
			<Table removeWrapper aria-label='Example static collection table'>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>
							{column.label}
						</TableColumn>
					)}
				</TableHeader>
				<TableBody items={cartProducts}>
					{(item) => (
						<TableRow key={item.product}>
							{(columnKey) => (
								<TableCell>
									{renderCell(item, columnKey)}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
		);
	};

	return (
		<NextUINavbar maxWidth='xl' position='sticky'>
			<NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
				<NavbarBrand className='gap-3 max-w-fit'>
					<NextLink
						className='flex justify-start items-center gap-1'
						href='/'
					>
						<Logo />
						<p className='font-bold text-inherit pl-2'>
							Manga Kingdom
						</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<div className='hidden lg:flex gap-4 justify-start ml-2'>
				{siteConfig.navItems.map((item) => (
					<NavbarItem key={item.href}>
						<NextLink
							className={clsx(
								linkStyles({ color: 'foreground' }),
								'data-[active=true]:text-primary data-[active=true]:font-medium'
							)}
							color='foreground'
							href={item.href}
						>
							{item.label}
						</NextLink>
					</NavbarItem>
				))}
			</div>

			<NavbarContent
				className='hidden sm:flex basis-1/5 sm:basis-full'
				justify='end'
			>
				<NavbarItem className='hidden lg:flex gap-2'>
					<ThemeSwitch />
					<Popover placement='bottom-end' backdrop='blur'>
						<PopoverTrigger>
							<Button isIconOnly variant='light'>
								<CartIcon className='text-default-500' />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='p-0 pb-4'>
							<Cart />
							<Button
								href='/checkout'
								as={Link}
								color='primary'
								isDisabled={
									!cartProducts || cartProducts.length === 0
								}
							>
								Checkout
							</Button>
						</PopoverContent>
					</Popover>

					<Button isIconOnly onPress={onOpen} variant='light'>
						<LoginIcon />
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className='lg:hidden basis-1 pl-4' justify='end'>
				<ThemeSwitch />
				<Popover placement='bottom-end' backdrop='blur'>
					<PopoverTrigger>
						<Button isIconOnly variant='light'>
							<CartIcon className='text-default-500' />
						</Button>
					</PopoverTrigger>
					<PopoverContent className='p-0 pb-4'>
						<Cart />
						<Button
							href='/checkout'
							as={Link}
							color='primary'
							isDisabled={
								!cartProducts || cartProducts.length === 0
							}
						>
							Checkout
						</Button>
					</PopoverContent>
				</Popover>
				<Button isIconOnly onPress={onOpen} variant='light'>
					<LoginIcon />
				</Button>
				{inSession ? (
					<Modal
						isOpen={isOpen}
						onOpenChange={onOpenChange}
						placement='top-center'
					>
						<ModalContent>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col gap-1'>
										Bienvenido {inSessionUserName}
									</ModalHeader>

									<ModalBody>
										<User
											name={
												inSessionName +
												' ' +
												inSessionLastName
											}
											description={inSessionEmail}
											avatarProps={{
												src: 'https://styles.redditmedia.com/t5_3cz815/styles/communityIcon_sjqivpf4rkc81.png',
											}}
										/>
									</ModalBody>

									<ModalFooter>
										<Button
											href='/orders'
											as={Link}
											color='primary'
											onPress={onClose}
										>
											Mis compras
										</Button>
										<Button
											color='danger'
											variant='flat'
											onPress={() => {
												handleLogout();
												onClose();
												handleEmptyCart();
												toast.success('Sesión cerrada');
											}}
										>
											Cerrar Sesión
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
				) : (
					<Modal
						isOpen={isOpen}
						onOpenChange={onOpenChange}
						placement='top-center'
					>
						<ModalContent>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col gap-1'>
										Log In
									</ModalHeader>

									<ModalBody>
										<Input
											autoFocus
											endContent={<LoginIcon />}
											label='Nombre de usuario'
											placeholder='Ingresa tu nombre de usuario'
											variant='bordered'
											value={loginUserName}
											onValueChange={setLoginUserName}
										/>
										<Input
											endContent={
												<LockIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
											}
											label='Contraseña'
											placeholder='Ingresa tu contraseña'
											type='password'
											variant='bordered'
											value={loginPassword}
											onValueChange={setLoginPassword}
										/>
										<div className='flex py-2 px-1 justify-between'>
											<Checkbox
												classNames={{
													label: 'text-small',
												}}
											>
												Recuérdame
											</Checkbox>
											<Link
												color='primary'
												href='/register'
												size='sm'
											>
												¿Aún no tienes una cuenta?
											</Link>
										</div>
									</ModalBody>

									<ModalFooter>
										<Button
											color='danger'
											variant='flat'
											onPress={onClose}
										>
											Cerrar
										</Button>
										<Button
											color='primary'
											onPress={() => {
												const data = {
													userName: loginUserName,
													password: loginPassword,
												};
												fetchLogin(data);
												onClose();
											}}
										>
											Ingresar
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
				)}

				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{/* {searchInput} */}
				<div className='mx-4 mt-2 flex flex-col gap-2'>
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 1
										? 'primary'
										: index ===
										  siteConfig.navMenuItems.length - 1
										? 'danger'
										: 'foreground'
								}
								href='#'
								size='lg'
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
