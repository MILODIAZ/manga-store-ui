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
} from '@nextui-org/react';

import { link as linkStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';

import { ThemeSwitch } from '@/components/theme-switch';
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	LoginIcon,
	CartIcon,
	DeleteIcon,
	LockIcon,
} from '@/components/icons';

import { Logo } from '@/components/icons';

export const Navbar = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
							<Table
								removeWrapper
								aria-label='Example static collection table'
							>
								<TableHeader>
									<TableColumn>PRODUCTO</TableColumn>
									<TableColumn>CANTIDAD</TableColumn>
									<TableColumn>MONTO</TableColumn>
									<TableColumn>{''}</TableColumn>
								</TableHeader>
								<TableBody>
									<TableRow key='1'>
										<TableCell>Naruto #1</TableCell>
										<TableCell>x2</TableCell>
										<TableCell>$10000</TableCell>
										<TableCell>
											<Button
												isIconOnly
												color='danger'
												variant='light'
											>
												<DeleteIcon />
											</Button>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
							<Button color='primary'>Checkout</Button>
						</PopoverContent>
					</Popover>

					<Button isIconOnly onPress={onOpen} variant='light'>
						<LoginIcon />
					</Button>
					<Modal
						isOpen={isOpen}
						onOpenChange={onOpenChange}
						placement='top-center'
					>
						<ModalContent>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col gap-1'>
										Log in
									</ModalHeader>
									<ModalBody>
										<Input
											autoFocus
											endContent={<LoginIcon />}
											label='Nombre de usuario'
											placeholder='Ingresa tu nombre de usuario'
											variant='bordered'
										/>
										<Input
											endContent={
												<LockIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
											}
											label='Contraseña'
											placeholder='Ingresa tu contraseña'
											type='password'
											variant='bordered'
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
												href='#'
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
											onPress={onClose}
										>
											Ingresar
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
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
						<Table
							removeWrapper
							aria-label='Example static collection table'
						>
							<TableHeader>
								<TableColumn>PRODUCTO</TableColumn>
								<TableColumn>CANTIDAD</TableColumn>
								<TableColumn>MONTO</TableColumn>
								<TableColumn>{''}</TableColumn>
							</TableHeader>
							<TableBody>
								<TableRow key='1'>
									<TableCell>Naruto #1</TableCell>
									<TableCell>x2</TableCell>
									<TableCell>$10000</TableCell>
									<TableCell>
										<Button
											isIconOnly
											color='danger'
											variant='light'
										>
											<DeleteIcon />
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
						<Button color='primary'>Checkout</Button>
					</PopoverContent>
				</Popover>
				<Button isIconOnly onPress={onOpen} variant='light'>
					<LoginIcon />
				</Button>
				<Modal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					placement='top-center'
				>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className='flex flex-col gap-1'>
									Log in
								</ModalHeader>
								<ModalBody>
									<Input
										autoFocus
										endContent={<LoginIcon />}
										label='Nombre de usuario'
										placeholder='Ingresa tu nombre de usuario'
										variant='bordered'
									/>
									<Input
										endContent={
											<LockIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
										}
										label='Contraseña'
										placeholder='Ingresa tu contraseña'
										type='password'
										variant='bordered'
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
											href='#'
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
									<Button color='primary' onPress={onClose}>
										Ingresar
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
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
