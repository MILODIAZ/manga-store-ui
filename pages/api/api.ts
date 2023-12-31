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

const transactionMutation = `
mutation TransactionQuery($amount: Int!){
	createTransaction(amount: $amount){
	  token
	  url
	}
  }
`;

export async function createTransaction(amount: number) {
	let variables: any = {
		amount,
	};
	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: transactionMutation,
			variables,
		}),
	});
	let result = await results.json();
	return result.data.createTransaction;
}

const confirmMutation = `
mutation ConfirmTransactionQuery($token: String!){
	confirmTransaction(token: $token)
  }
`;

export async function confirmTransaction(token: string) {
	let variables: any = {
		token,
	};
	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: confirmMutation,
			variables,
		}),
	});
	let result = await results.json();
	return result.data.confirmTransaction;
}

const purchaseMutation = `
mutation PurchaseMutation($userName: String!, $itemsIDs: [Int!]!, $productNames: [productQty!]!) {
  purchase(userName: $userName, itemsIDs: $itemsIDs, productNames: $productNames)
}
`;

export async function purchase(
	userName: string = '',
	itemsIDs: number[] = [],
	productNames: { name: string; quantity: number }[] = []
) {
	let variables: any = {
		userName,
		itemsIDs,
		productNames,
	};

	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: purchaseMutation,
			variables,
		}),
	});

	let result = await results.json();
	return result.data.purchase;
}

const createUserMutation = `
mutation CreateUserMutation($data: userDto!) {
  createUser(data: $data){
	name
	lastName
	userName
	email
	id
  }
}
`;

export async function createUser(data: {
	name: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
}) {
	console.log(data);
	let variables: any = {
		data,
	};
	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: createUserMutation,
			variables,
		}),
	});
	let result = await results.json();
	if (result.data === null) {
		return 'Register failed';
	}

	return 'Register successfully';
}

const loginMutation = `mutation LoginMutation($data: loginDto!) {
	login(data: $data){
	  user{
		userName
		name
		lastName
		email
	  }
	  jwt
	  cart{
		id
		product
		quantity
		total
		orderId
	  }
	}  
  }`;

export async function loginAPI(data: { userName: string; password: string }) {
	let variables: any = {
		data,
	};
	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: loginMutation,
			variables,
		}),
	});
	let result = await results.json();
	return result;
}

const createCartItemMutation = `mutation CreateCartItemMutation($data: createProductItemInput!){
	createProductItem(data: $data)
  }`;

export async function createItem(data: {
	userName: string;
	productName: string;
	quantity: number;
}) {
	let variables: any = {
		data,
	};
	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: createCartItemMutation,
			variables,
		}),
	});
	let result = await results.json();
	return result.data.createProductItem;
}

const deleteItemMutation = `mutation DeleteCartItemMutation($id: Int!, $userName: String!){
	deleteProductItem(id: $id, userName:$userName)
  }`;

export async function deleteItem(id: number, userName: string) {
	console.log(typeof id);
	let variables: any = {
		id,
		userName,
	};
	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: deleteItemMutation,
			variables,
		}),
	});
	let result = await results.json();
	return result.data.deleteProductItem;
}

const getOrdersQuery = `query GetOrdersQuery($userName: String!){
	getOrders(userName: $userName){
	  id
	  items{
		product{
		  name
		}
		quantity
	  }
	}
  }`;

export async function getOrders(userName: string) {
	let variables: any = {
		userName,
	};
	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: getOrdersQuery,
			variables,
		}),
	});
	let result = await results.json();
	return result.data.getOrders;
}
