import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    // color: 'black'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: 'black'

  },
}));

const Quantity = () =>{
  const classes = useStyles();
  const [quantity, setQuantity] = useState('');

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Quantity</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={quantity}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
          <MenuItem value={40}>4</MenuItem>
          <MenuItem value={50}>5</MenuItem>
          <MenuItem value={60}>6</MenuItem>
          <MenuItem value={70}>7</MenuItem>
          <MenuItem value={80}>8</MenuItem>
          <MenuItem value={90}>9</MenuItem>
          <MenuItem value={100}>10</MenuItem>
          <MenuItem value={110}>11</MenuItem>
          <MenuItem value={120}>12</MenuItem>
          <MenuItem value={130}>13</MenuItem>
          <MenuItem value={140}>Oga he don do</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}

export default Quantity