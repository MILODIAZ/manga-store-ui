import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Importa useRouter
import { database } from '@/components/database';
import DefaultLayout from '@/layouts/default';
import { title } from '@/components/primitives';
import { Button } from '@nextui-org/react';

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

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const [cart, setCart] = useState<CartItemType[]>([]); // Estado del carrito
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    // Obtiene los datos del carrito del almacenamiento local
    const cartData = localStorage.getItem('cart');
    const cart = cartData ? JSON.parse(cartData) : [];
    setCart(cart);
  }, []);

  const addToCart = () => {
    if (product) {
      const updatedCart = [...cart];
      const existingProductIndex = updatedCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        updatedCart[existingProductIndex].quantity++;
      } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        updatedCart.push({ ...product, quantity: 1 });
      }

      // Actualiza el estado del carrito
      setCart(updatedCart);

      // Guarda el carrito actualizado en el almacenamiento local
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      // Redirige a la página del carrito
      router.push('/cart');
    }
  };

  useEffect(() => {
    // Obtiene el ID del producto desde la URL y busca el producto correspondiente
    if (typeof productId === 'string') {
      const productIdString = productId;
      const selectedProduct = database.find((item) => item.id === parseInt(productIdString));

      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }
  }, [productId]);

  if (product) {
    return (
      <DefaultLayout>
        <section className='flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10'>
          <div className="w-full md:w-1/2 flex items-center">
            <img
              className="w-full max-w-md mx-auto"
              alt={product.name}
              src={product.image}
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className={title({ color: 'yellow' })}>{product.name}</h1>
            <p>{product.price}</p>
            <Button color='primary' className='text-xs py-1' onClick={addToCart}>
              Añadir al carrito
            </Button>
            <br />
            <br />
            <p>{product.description}</p>
            <p>Autor: {product.author}</p>
            <br />
            <p>{product.description_large}</p>
            <br />
            <p>Categorías: {product.Category.join(', ')}</p>

            
          </div>
        </section>
      </DefaultLayout>
    );
  } else {
    return <div>Producto no encontrado</div>;
  }
}