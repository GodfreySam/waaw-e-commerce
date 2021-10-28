import React, {useState} from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';


const Checkbox =() =>{
  const [value, setValue] = useState('Online Payment');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup value={value} onChange={handleChange}>
        <FormControlLabel value="Cash On Delivery(COD)" control={<Radio />} label="Cash On Delivery(COD)" />
        <FormControlLabel value="Online Payment" control={<Radio />} label="Online Payment" />
      </RadioGroup>
    </FormControl>
  );
}

export default Checkbox