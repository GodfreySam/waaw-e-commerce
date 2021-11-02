import * as React from 'react';
import './reg.css'
import { Button,IconButton,FilledInput,InputLabel,InputAdornment,FormControl,TextField, } from '@mui/material';
import { VisibilityOff,Visibility } from '@mui/icons-material';

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    username: '',
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async() => {

  }

  return (
    <div className="register">
      <div className="holder">
        <form onSubmit={handleSubmit} className="register__form">
          <TextField
            label="Username"
            id="filled-start-adornment"
            sx={{ m: 1, width: '30ch' }}
            variant="filled"
            type='text'
            value={values.username}
          />

          <TextField
            label="Email address"
            id="filled-start-adornment"
            sx={{ m: 1, width: '30ch' }}
            variant="filled"
            type='email'
            value={values.email}
          />

          <FormControl sx={{ m: 1, width: '30ch' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button className='register__btn'>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
