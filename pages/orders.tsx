import { title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import React, { useState, useEffect } from 'react';

import { useCart } from '@/hooks/useCart';
import { getOrders } from './api/api';
import {
	Card,
	CardHeader,
	Divider,
	CardBody,
	CardFooter,
	User,
} from '@nextui-org/react';
import Link from 'next/link';

export default function Orders() {
	const { inSession, inSessionUserName } = useCart();
	const [orders, setOrders] = useState([]);

	const fetchOrders = async (userName: string) => {
		try {
			const result = await getOrders(userName);
			setOrders(result.reverse());
			console.log(result);
		} catch (error) {}
	};

	useEffect(() => {
		if (inSessionUserName) {
			fetchOrders(inSessionUserName);
		}
	}, [inSession]);

	return (
		<DefaultLayout>
			<h1 className={title({ color: 'violet' })}>Mis compras</h1>
			{orders.map((order) => (
				<Card key={order.id} className='max-w-[400px] mt-10'>
					<CardHeader className='flex gap-3'>
						<User
							name={''}
							description={''}
							avatarProps={{
								src: 'https://styles.redditmedia.com/t5_3cz815/styles/communityIcon_sjqivpf4rkc81.png',
							}}
						/>
						<div className='flex flex-col'>
							<p className='text-md'>{`Orden #${order.id}`}</p>
							<p className='text-small text-default-500'>{`${order.items.length} items`}</p>
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
						{order.items.map((item) => (
							<div
								key={item.product.name}
								className='flex justify-between'
							>
								<p>{item.product.name}</p>
								<p>{`x ${item.quantity}`}</p>
							</div>
						))}
					</CardBody>
				</Card>
			))}
		</DefaultLayout>
	);
}
