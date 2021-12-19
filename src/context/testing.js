import { ActionType } from "react-hot-toast/dist/core/store";

state.cart.find((item) => item.id === action.payload.id) === 1 ?
   [...state.cart.filter((item) => item.id !== action.payload.id)]
	: [
			...state.cart.map((item) =>
				item.id === action.payload.id
					? {
							...state.cart.find((item) => item.id === action.payload.id),
							quantity: state.cart.find((item) => item.id === action.payload.id) - 1,
					  }
					: item,
			),
	  ];