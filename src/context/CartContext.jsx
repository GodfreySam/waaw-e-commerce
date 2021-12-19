import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./CartReducer";

import data from "../database/data";
const Cart = createContext();

export const CartContext = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, {
		products: data,
		cart: [],
	});

	const [productState, productDispatch] = useReducer(productReducer, {
		byStock: false,
		byFastDelivery: false,
		byRating: 0,
		searchQuery: "",
	});

	return (
		<Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
			{children}
		</Cart.Provider>
	);
};

export default CartContext;

export const CartState = () => {
	return useContext(Cart);
};
