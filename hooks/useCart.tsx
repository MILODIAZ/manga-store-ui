import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import toast from 'react-hot-toast';

type CartContextType = {
	cartTotalQty: number;
	cartProducts: any[] | null;
	handleAddProductToCart: (product: any) => void;
	handleRemoveProductFromCart: (productName: string) => void;
	handleEmptyCart: () => void;
	handleLoadUserCart: (cart: any) => void;

	inSession: boolean | null;
	inSessionUserName: string | null;
	inSessionName: string | null;
	inSessionLastName: string | null;
	inSessionEmail: string | null;
	inSessionJwt: string | null;
	handleLogin: (userData: any) => void;
	handleLogout: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
	[propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
	const [cartTotalQty, setCartTotalQty] = useState(0);
	const [cartProducts, setCartProducts] = useState(null);

	const [inSession, setInSession] = useState(null);
	const [inSessionUserName, setInSessionUserName] = useState('');
	const [inSessionName, setInSessionName] = useState('');
	const [inSessionLastName, setInSessionLastName] = useState('');
	const [inSessionEmail, setInSessionEmail] = useState('');
	const [inSessionJwt, setInSessionJwt] = useState('');

	useEffect(() => {
		const cartItems: any = localStorage.getItem('eShopCartItems');
		const cProducts: any[] | null = JSON.parse(cartItems);
		setCartProducts(cProducts);

		const nSession: any = localStorage.getItem('inSession');
		const is: boolean | null = JSON.parse(nSession);
		setInSession(is);

		const nSessionUserName: any = localStorage.getItem('userName');
		const isUserName: string | null = JSON.parse(nSessionUserName);
		setInSessionUserName(isUserName);

		const nSessionName: any = localStorage.getItem('name');
		const isName: string | null = JSON.parse(nSessionName);
		setInSessionName(isName);

		const inSessionLastName: any = localStorage.getItem('lastName');
		const isLastName: string | null = JSON.parse(inSessionLastName);
		setInSessionLastName(isLastName);

		const inSessionEmail: any = localStorage.getItem('email');
		const isEmail: string | null = JSON.parse(inSessionEmail);
		setInSessionEmail(isEmail);

		const inSessionJwt: any = localStorage.getItem('jwt');
		const isJwt: string | null = JSON.parse(inSessionJwt);
		setInSessionJwt(isJwt);
	}, []);

	const handleAddProductToCart = useCallback((product: any) => {
		setCartProducts((prev) => {
			let updatedCart;
			if (prev) {
				updatedCart = [...prev, product];
			} else {
				updatedCart = [product];
			}
			localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
			toast.success('Agregado al carrito ;D');
			return updatedCart;
		});
	}, []);

	const handleRemoveProductFromCart = useCallback(
		(productName: string) => {
			if (cartProducts) {
				const filteredProducts = cartProducts.filter((item) => {
					console.log(item.product);
					return item.product !== productName;
				});
				console.log(productName);
				setCartProducts(filteredProducts);
				localStorage.setItem(
					'eShopCartItems',
					JSON.stringify(filteredProducts)
				);
				toast.error('Eliminado del carrito :)');
			}
		},
		[cartProducts]
	);

	const handleEmptyCart = useCallback(() => {
		setCartProducts([]);
		localStorage.setItem('eShopCartItems', JSON.stringify([]));
	}, [cartProducts]);

	const handleLoadUserCart = useCallback(
		(cart: any) => {
			setCartProducts(cart);
			localStorage.setItem('eShopCartItems', JSON.stringify(cart));
		},
		[cartProducts]
	);

	const handleLogin = useCallback(
		(userData: any) => {
			setInSession(true);
			localStorage.setItem('inSession', JSON.stringify(true));

			setInSessionUserName(userData.userName);
			localStorage.setItem('userName', JSON.stringify(userData.userName));

			setInSessionName(userData.name);
			localStorage.setItem('name', JSON.stringify(userData.name));

			setInSessionLastName(userData.lastName);
			localStorage.setItem('lastName', JSON.stringify(userData.lastName));

			setInSessionEmail(userData.email);
			localStorage.setItem('email', JSON.stringify(userData.email));

			setInSessionJwt(userData.jwt);
			localStorage.setItem('jwt', JSON.stringify(userData.jwt));
		},
		[
			inSession,
			inSessionUserName,
			inSessionName,
			inSessionLastName,
			inSessionEmail,
			inSessionJwt,
		]
	);

	const handleLogout = useCallback(() => {
		setInSession(false);
		localStorage.setItem('inSession', JSON.stringify(false));

		setInSessionUserName('');
		localStorage.setItem('userName', JSON.stringify(''));

		setInSessionName('');
		localStorage.setItem('name', JSON.stringify(''));

		setInSessionLastName('');
		localStorage.setItem('lastName', JSON.stringify(''));

		setInSessionEmail('');
		localStorage.setItem('email', JSON.stringify(''));

		setInSessionJwt('');
		localStorage.setItem('jwt', JSON.stringify(''));
	}, [
		inSession,
		inSessionUserName,
		inSessionName,
		inSessionLastName,
		inSessionEmail,
		inSessionJwt,
	]);

	const value = {
		cartTotalQty,
		cartProducts,
		handleAddProductToCart,
		handleRemoveProductFromCart,
		handleEmptyCart,
		handleLoadUserCart,

		inSession,
		inSessionUserName,
		inSessionName,
		inSessionLastName,
		inSessionEmail,
		inSessionJwt,
		handleLogin,
		handleLogout,
	};

	return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
	const context = useContext(CartContext);

	if (context === null) {
		throw new Error('usCart must be used within a CartContextProvider');
	}

	return context;
};
