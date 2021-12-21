import React, { useContext, useRef, useState } from 'react';
import './auth.css'
import { Button,IconButton,FilledInput,InputLabel,InputAdornment,FormControl,TextField, } from '@mui/material';
import { VisibilityOff,Visibility } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";


const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	  };
	
	  const handleMouseDownPassword = (event) => {
		event.preventDefault();
	  };
	const userInput = useRef();
	const password = useRef();
	const { dispatch } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!userInput.current.value) return toast.error("An input is required");
		if (!password.current.value) return toast.error("Password is required");

		const user = {
			userInput: userInput.current.value,
			password: password.current.value,
		};

		loginCall(user, dispatch);
		
	};

	return (
		<div className="register">
      <div className="holder">
		  <h3>Login Here</h3>
        <form onSubmit={handleSubmit} className="register__form" noValidate autoComplete="off">
          <TextField
            label="Email or Username"
            id="filled-start-adornment"
            sx={{ m: 1, width: '35ch' }}
            variant="filled"
            type='text'
            inputRef={userInput}
          />

          <FormControl sx={{ m: 1, width: '35ch' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              inputRef={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <div className="btn">
			<Button type='submit' variant='contained' className='register__btn'>
				Login
			</Button>
		  </div>
        </form>
      </div>
    </div>
	);
};

export default Login;
