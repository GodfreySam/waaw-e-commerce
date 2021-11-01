import React, {useState} from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  radio: {
    color: 'whitesmoke'
  },

  radioBtn: {
    border: 'whitesmoke',
  }
}));

const Checkbox = () => {
  const classes = useStyles();
  const [value, setValue] = useState('Online Payment');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
			<FormControl component="fieldset">
				<RadioGroup value={value} onChange={handleChange}>
					<FormControlLabel
						className={classes.radio}
						value="Cash On Delivery(COD)"
						control={<Radio />}
						label="Cash On Delivery(COD)"
					/>
					<FormControlLabel
						className={classes.radio}
						value="Online Payment"
						control={<Radio className={classes.radioBtn} />}
						label="Online Payment"
					/>
				</RadioGroup>
			</FormControl>
		);
}

export default Checkbox