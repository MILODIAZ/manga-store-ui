import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { fontSans, fontMono } from '@/config/fonts';
import type { AppProps } from 'next/app';
import CartProvider from '@/providers/CartProvider';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<NextThemesProvider>
				<Toaster
					toastOptions={{
						style: { background: 'rgb(51 65 85)', color: '#fff' },
					}}
				/>
				<CartProvider>
					<Component {...pageProps} />
				</CartProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
