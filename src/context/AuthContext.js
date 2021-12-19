import { createContext, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducers';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

<<<<<<< HEAD:client/src/context/AuthContext.js
export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
=======
 export const AuthContextProvider = ({ children }) => {
		const [state, authDispatch] = useReducer(AuthReducer, INITIAL_STATE);
>>>>>>> 918f0c0896fb2bcabbbb530b97ed3f58eae743d6:src/context/AuthContext.js

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

<<<<<<< HEAD:client/src/context/AuthContext.js
    return(
        <AuthContext.Provider
        value={{
            user:state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    );
}
=======
		return (
			<AuthContext.Provider
				value={{
					user: state.user,
					isFetching: state.isFetching,
					error: state.error,
					authDispatch,
				}}
			>
				{children}
			</AuthContext.Provider>
		);
	};
>>>>>>> 918f0c0896fb2bcabbbb530b97ed3f58eae743d6:src/context/AuthContext.js
