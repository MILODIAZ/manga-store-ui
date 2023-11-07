const query = `query {  
    products {
      id
      name
      author
      description
      price
      image
      isFavourite
      totalStock
      categories{
        id
        name
      }
    }
  }`;

export async function getProducts() {
	let results = await fetch('http://localhost:8000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query,
		}),
	});
	let products = await results.json();
	return products.data.products;
}
