import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';

type CartContextType = {
	cartTotalQty: number;
	cartProducts: any[] | null;
	handleAddProductToCart: (product: any) => void;
	handleRemoveProductFromCart: (productName: string) => void;
	handleEmptyCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
	[propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
	const [cartTotalQty, setCartTotalQty] = useState(0);
	const [cartProducts, setCartProducts] = useState(null);

	useEffect(() => {
		const cartItems: any = localStorage.getItem('eShopCartItems');
		const cProducts: any[] | null = JSON.parse(cartItems);
		setCartProducts(cProducts);
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
			}
		},
		[cartProducts]
	);

	const handleEmptyCart = useCallback(() => {
		setCartProducts([]);
		localStorage.setItem('eShopCartItems', JSON.stringify([]));
	}, [cartProducts]);

	const value = {
		cartTotalQty,
		cartProducts,
		handleAddProductToCart,
		handleRemoveProductFromCart,
		handleEmptyCart,
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
