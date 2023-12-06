const productsQuery = `
  query ProductsQuery($categoryId: Int, $search: String, $minPrice: Int, $maxPrice: Int) {
    products(categoryId: $categoryId, search: $search, minPrice: $minPrice, maxPrice: $maxPrice) {
      id
      name
      author
      description
      price
      image
      isFavourite
      totalStock
      categories {
        id
        name
      }
    }
  }
`;

export async function getProducts(
	categoryId?: number | undefined,
	search?: string | undefined,
	minPrice?: number | undefined,
	maxPrice?: number | undefined
) {
	let variables: any = {
		categoryId: categoryId !== undefined ? categoryId : null,
		search: search !== undefined ? search : null,
		minPrice: minPrice !== undefined ? minPrice : null,
		maxPrice: maxPrice !== undefined ? maxPrice : null,
	};

	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: productsQuery,
			variables,
		}),
	});
	let products = await results.json();
	return products.data.products;
}

const categoriesQuery = `
  query {
    categories {
      id
      name      
    }
  }
`;

export async function getCategories() {
	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: categoriesQuery,
		}),
	});
	let categories = await results.json();
	console.log(categories.data.categories);
	return categories.data.categories;
}

const productQuery = `
  query ProductQuery($id: Int!) {
    product(id: $id) {
      name
      author
      price
      description
      image      
      totalStock
      categories {
        id
        name
      }
    }
  }
`;

export async function getProduct(id: number) {
	console.log(id);
	let variables: any = {
		id,
	};
	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: productQuery,
			variables,
		}),
	});
	let product = await results.json();
	console.log(product);
	return product.data.product;
}

export async function createTransaction() {
	try {
		const response = await fetch('http://localhost:10000/payment/create', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			// Puedes agregar más opciones según tus necesidades (cuerpo, etc.)
		});

		if (!response.ok) {
			throw new Error(
				`Error al crear la transacción. Código de estado: ${response.status}`
			);
		}

		const data = await response.json();
		return data;
	} catch (error: any) {
		console.error('Error al crear la transacción:', error.message);
		throw error; // Puedes manejar el error según tus necesidades
	}
}
