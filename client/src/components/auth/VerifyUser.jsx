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
