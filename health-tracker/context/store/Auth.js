import React, { createContext, useEffect, useReducer, useState} from "react";
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from "../reducers/AuthReducer";
import { setCurrentUser } from "../actions/AuthActions";

export const AuthContext = createContext();

const Auth = (props) => {
    const [stateUser, dispatch] = useReducer(AuthReducer, {
        isAuthenticated: null,
        user: {}
    });
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
        if (AsyncStorage.jwt) {
            const decoded = AsyncStorage.jwt ? AsyncStorage.jwt : "";
            if (setShowChild) {
                dispatch(setCurrentUser(jwt_decode(decoded)))
            }
        }
        return () => setShowChild(false);
    }, [])


    if (!showChild) {
        return null;
    } else {
        return (
            <AuthContext.Provider
                value={{
                    stateUser,
                    dispatch
                }}
            >
                {props.children}
            </AuthContext.Provider>
        )
    }
};

export default Auth;