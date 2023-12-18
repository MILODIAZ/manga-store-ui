import Link from 'next/link';
import { useEffect, useState } from 'react';
import { title } from '@/components/primitives';
import { DeleteIcon } from '@/components/icons';
import {
	Button,
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from '@nextui-org/react';
import React from 'react';

import { useCart } from '@/hooks/useCart';
import DefaultLayout from '@/layouts/default';
import { createTransaction } from './api/api';

export default function Checkout() {
	const { cartProducts, handleRemoveProductFromCart } = useCart();
	const [cartTotal, setCartTotal] = useState(0);

	const [token, setToken] = useState('');
	const [url, setURL] = useState('');

	const createT = async () => {
		try {
			const result = await createTransaction(cartTotal);
			setToken(result.token);
			setURL(result.url);
		} catch (error) {}
	};

	useEffect(() => {
		createT();
	}, [cartTotal]);

	useEffect(() => {
		if (cartProducts) {
			const newCartTotal = cartProducts.reduce(
				(acc, item) => acc + item.total,
				0
			);
			setCartTotal(newCartTotal);
		}
	}, [cartProducts]);

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
								onPress={() =>
									handleRemoveProductFromCart(product.product)
								}
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
		<DefaultLayout>
			<h1 className={title({ color: 'violet' })}>
				Resumen del carrito&nbsp;
			</h1>
			<Cart />
			<span>Total: ${cartTotal}</span>
			<form method='get' action={url}>
				<input type='hidden' name='token_ws' value={token} />
				<input
					disabled={cartTotal === 0}
					type='submit'
					value='Ir a pagar'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block mt-4'
				/>
			</form>
		</DefaultLayout>
	);
}
