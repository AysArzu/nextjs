const API_URL = "https://66c6cfad8b2c10445bc7c560.mockapi.io";

export const getAllProducts = async () => {
	const res = await fetch(`${API_URL}/PRODUCTS`); // request
	if (!res.ok) throw new Error("Failed to fetch products");
	const data = await res.json(); // response daki body i cozer
	return data;
};

export const createProduct = async (product) => {
	const res = await fetch(`${API_URL}/PRODUCTS`, {
		method: "POST",
		body: JSON.stringify(product),
		headers: {
			"Content-Type": "application/json",
		},
	}); // request
	if (!res.ok) throw new Error("Failed to post product");
	const data = await res.json(); // response daki body i cozer
	return data;
};
//https://66c6cfad8b2c10445bc7c560.mockapi.io/PRODUCTS mockapi.io da olustururken buyuk yazdim indan buyuk product yazdim :(export const updateProduct = async (id, product) => {

	export const updateProduct = async (id, product) => {
		const res = await fetch(`${API_URL}/products/${id}`, {
			method: "PUT",
			body:JSON.stringify(product),
			headers: {
				"Content-Type": "application/json",
			},
		}); // request
		if (!res.ok) throw new Error("Failed to update product");
		const data = await res.json(); // response daki body i cozer
		return data;
	};
	
	
	export const deleteProduct = async (id) => {
		const res = await fetch(`${API_URL}/products/${id}`, {
			method: "DELETE",
		})
		if (!res.ok) throw new Error("Failed to delete product");
		const data = await res.json(); // response daki body i cozer
		return data;
	}