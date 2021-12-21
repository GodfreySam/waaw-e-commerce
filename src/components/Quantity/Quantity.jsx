import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { CartState } from "../../context/CartContext";

const useStyles = makeStyles((theme) => ({
	button: {
		display: "block",
		marginTop: theme.spacing(2),
		// color: 'black'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		color: "black",
	},
}));

const Quantity = ({ item }) => {
	const { dispatch } = CartState();

	const classes = useStyles();
	const [quantity, setQuantity] = useState("");

	const handleChange = (e) => {
		setQuantity(e.target.value);
		dispatch({
			type: "CHANGE_CART_QTY",
			payload: {
				id: item.id,
				qty: e.target.value,
			},
		});
	};

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-controlled-open-select-label">Quantity</InputLabel>
				<Select
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					variant="filled"
					value={quantity}
					onChange={handleChange}
				>
					<MenuItem value=""></MenuItem>
					<MenuItem value={1}>1</MenuItem>
					<MenuItem value={2}>2</MenuItem>
					<MenuItem value={3}>3</MenuItem>
					<MenuItem value={4}>4</MenuItem>
					<MenuItem value={5}>5</MenuItem>
					<MenuItem value={6}>6</MenuItem>
					<MenuItem value={7}>7</MenuItem>
					<MenuItem value={8}>8</MenuItem>
					<MenuItem value={9}>9</MenuItem>
					<MenuItem value={10}>10</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default Quantity;
