<<<<<<< HEAD:client/src/components/auth/VerifyUser.jsx
import React, { useRef } from 'react'
import './auth.css'
import { useHistory } from 'react-router';
import toast from 'react-hot-toast';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const VerifyUser = () => {
    const token = useRef();
    const history = useHistory()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!token.current.value) return toast.error('Please input token to verify');
  
      const user = {
        token: token.current.value,
      } 
  
      try {
        let res = await axios.post('http://localhost:4000/api/v1/auth/confirm-user', user);
        if(res.data.success) toast.success(res.data.msg);
        history.push('/login');
      }catch(err) { 
        if(!err.response.data.success) return toast.error(err.response.data.msg);
      }
  
    }
  
    return (
      <div className="register">
        <div className="holder">
          <h3> Verify email</h3>
          <form onSubmit={handleSubmit} className="register__form" noValidate autoComplete="off">
            <TextField
              label="Token"
              id="filled-start-adornment"
              sx={{ m: 1, width: '35ch' }}
              variant="filled"
              type='text'
              inputRef={token}
            />
  
            <div className="btn">
           <Button type='submit' variant='contained' className='register__btn'>
              Register
           </Button>
          </div>
          </form>
        </div>
      </div>
    );
}

export default VerifyUser
=======
import React, { useState } from "react";
import axios from "axios";
import "./auth.css";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const VerifyUser = () => {
	// const token = useRef();
	const { reset_token } = useParams();
	const [resetToken, setResetToken] = useState();
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!resetToken) return toast.error("Token is required");
		if (!reset_token) return toast.error("Token is required");

		const user = {
			token: reset_token && resetToken
		};

		try {
			let res = await axios.post(
				"https://frooto-api.herokuapp.com/api/v1/auth/verify",
				user,
			);
			if (res.data.success) toast.success(res.data.msg);
			window.location.href = "/user/login";
		} catch (err) {
			if (!err.response.data.success) return toast.error(err.response.data.msg);
		}
	};

	return (
		<div className="register">
			<div className="form-flex">
				<div className="container-form register-form">
					<div className="heading">
						<h1>User Email Veriffication</h1>
					</div>
					<br />
					<br />
					<form onSubmit={handleSubmit} className="auth register-form">
						<label for="token">Verification Token</label>
						<input
							type="text"
							name="text"
							id=""
							placeholder="email verification token"
							value={reset_token && resetToken}
							onChange={(e) => setResetToken(e.target.value)}
						/>
						<input className="form__submit-button" type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default VerifyUser;
>>>>>>> 918f0c0896fb2bcabbbb530b97ed3f58eae743d6:src/pages/auth/VerifyUser.jsx
