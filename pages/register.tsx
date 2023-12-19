import React, { useState } from 'react';
import { Button, Input } from '@nextui-org/react';

import DefaultLayout from '@/layouts/default';
import { createUser } from './api/api';

export default function Register() {
	const [userName, setUserName] = useState('');
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const fetchRegister = async (data: any) => {
		try {
			const result = await createUser(data);
			console.log(result);
		} catch (error) {}
	};

	return (
		<DefaultLayout>
			<h1>Registro</h1>
			<div className='w-full flex flex-col gap-4'>
				<div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
					<Input
						variant={'underlined'}
						label='Nombre de usuario'
						placeholder='Nombre de usuario'
						value={userName}
						onValueChange={setUserName}
					/>
				</div>
				<div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
					<Input
						variant={'underlined'}
						label='Nombre'
						placeholder='Nombre'
						value={name}
						onValueChange={setName}
					/>
					<Input
						variant={'underlined'}
						label='Apellido'
						placeholder='Apellido'
						value={lastName}
						onValueChange={setLastName}
					/>
				</div>
				<div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
					<Input
						type='email'
						variant={'underlined'}
						label='Email'
						placeholder='Email'
						value={email}
						onValueChange={setEmail}
					/>
				</div>
				<div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
					<Input
						type='password'
						variant={'underlined'}
						label='Contraseña'
						placeholder='Contraseña'
						value={password}
						onValueChange={setPassword}
					/>
				</div>
				<div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
					<Input
						type='password'
						variant={'underlined'}
						label='Confirmar Contraseña'
						placeholder='Confirmar Contraseña'
						value={confirmPassword}
						onValueChange={setConfirmPassword}
					/>
				</div>
				<div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 justify-center'>
					<Button
						color='primary'
						onPress={() => {
							const data = {
								name,
								lastName,
								userName,
								email,
								password,
							};
							fetchRegister(data);
						}}
					>
						Registrarse
					</Button>
				</div>
			</div>
		</DefaultLayout>
	);
}
