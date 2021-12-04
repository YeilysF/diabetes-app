import jwt_decode from "jwt-decode"
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseURL from "../../assets/common/baseURL"

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user, dispatch) => {
    fetch(`${baseURL}Users/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        if (data) {
            const token = data.token;
            AsyncStorage.setItem("jwt", token)
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded, user))
        } else {
           logoutUser(dispatch)
        }
    }).catch((err) => {
        console.log("Error"+err)
        logoutUser(dispatch)
    });
};

export const getUserProfile = (id) => {
    fetch(`${baseURL}Users/${id}`, {
        method: "GET",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export const logoutUser = (dispatch) => {
    AsyncStorage.removeItem("jwt");
    dispatch(setCurrentUser({}))
}


export const setCurrentUser = (decoded, user) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
        userProfile: user
    }
}