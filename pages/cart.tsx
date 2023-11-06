import { useEffect, useState } from 'react';
import Link from 'next/link';

type ProductType = {
  image: string;
  name: string;
  price: string;
  id: number;
  description: string;
  description_large: string;
  author: string;
  stock: number;
  Category: string[];
  shipping: string;
};

type CartItemType = ProductType & {
  quantity: number;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as CartItemType[];
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const addToCart = (product: ProductType) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const removeFromCart = (product: CartItemType) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} style={{ width: '100px' }} />
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => addToCart(item)}>Añadir uno más</button>
              <button onClick={() => removeFromCart(item)}>Eliminar uno</button>
            </div>
          ))}
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <button onClick={clearCart}>Vaciar Carrito</button>
          <Link href="/checkout">
            <a>Ir al Pago</a>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
