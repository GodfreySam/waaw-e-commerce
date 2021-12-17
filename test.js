handleRemoveProduct = (product) => {
	const productExist = cartItems.find((item) => item.id === product.id);
	if (productExist.quantity === 1) {
		setCartItems(cartItems.filter((item) => item.id !== product.id));
	} else {
		setCartItems(
			cartItems.map((item) =>
				item.id === product.id
					? { ...productExist, quantity: productExist.quantity - 1 }
					: item,
			),
		);
	}
};
