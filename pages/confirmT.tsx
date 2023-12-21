import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { title } from '@/components/primitives';
import {
	Button,
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Spinner,
} from '@nextui-org/react';
import React from 'react';

import { useCart } from '@/hooks/useCart';
import DefaultLayout from '@/layouts/default';
import { confirmTransaction, purchase } from './api/api';

export default function ConfirmTransaction() {
	const router = useRouter();
	const { token_ws } = router.query;

	const { cartProducts, handleEmptyCart, inSession, inSessionUserName } =
		useCart();

	const [transactionResult, setTransactionResult] = useState('standby');

	const [orderItems, setOrderItems] = useState([]);
	const [orderTotal, setOrderTotal] = useState(0);

	const fetchData = async (token: string) => {
		try {
			const result = await confirmTransaction(token_ws);
			setTransactionResult(result);
			if (result === 'AUTHORIZED') {
				setOrderItems(cartProducts);
				const newOrderTotal = cartProducts.reduce(
					(acc, item) => acc + item.total,
					0
				);
				setOrderTotal(newOrderTotal);
				const productNames = cartProducts.map((item) => ({
					name: item.product,
					quantity: item.quantity,
				}));

				if (inSession) {
					const itemIds = cartProducts.map((item) =>
						parseInt(item.id)
					);
					purchase(inSessionUserName, itemIds, productNames);
				} else {
					purchase('', [], productNames);
				}
				handleEmptyCart();
			}
		} catch (error) {}
	};

	useEffect(() => {
		fetchData(token_ws);
	}, [token_ws]);

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

					default:
						return cellValue;
				}
			},
			[]
		);

		if (!orderItems || orderItems.length === 0) {
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
				<TableBody items={orderItems}>
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
		<DefaultLayout>
			{(() => {
				switch (transactionResult) {
					case 'standby':
						return <Spinner label='Loading...' color='warning' />;
					case 'FAILED':
						return (
							<div>
								<h1 className={title({ color: 'violet' })}>
									Transacción Rechazada :/
								</h1>
								<div className='flex justify-around mt-10'>
									<Button
										href='/checkout'
										as={Link}
										color='primary'
									>
										Reintentar
									</Button>
									<Button href='/' as={Link} color='primary'>
										Volver al Inicio
									</Button>
								</div>
							</div>
						);
					case 'AUTHORIZED':
						if (!orderItems || orderItems.length === 0) {
							return (
								<div>
									<h1 className={title({ color: 'red' })}>
										Esta página ya no está disponible.
									</h1>
								</div>
							);
						}

						return (
							<div>
								<h1 className={title({ color: 'yellow' })}>
									Pago confirmado!! :D
								</h1>
								<br />
								<h2 className={title({ color: 'violet' })}>
									Resumen de tu orden&nbsp;
								</h2>
								<Cart />
								<div className='flex justify-center mt-5'>
									<h1>TOTAL ${orderTotal}</h1>
								</div>
								<div className='flex justify-around mt-10'>
									<Button href='/' as={Link} color='primary'>
										Volver al Inicio
									</Button>
								</div>
							</div>
						);
					default:
						return null;
				}
			})()}
		</DefaultLayout>
	);
}
