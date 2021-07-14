import axios from 'axios';

export const logoutUser = (url, token) => {
    return {
        type: 'LOGOUT_USER',
        payload: axios.delete(url, {
            headers: { 'x-access-token': `Bearer ${token}` },
        }),
    };
};

export const login = (url, dataUser) => {
    return {
        type: 'LOGIN',
        payload: axios.post(url, dataUser),
    };
};

export const register = (url, data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(url, data),
    };
};
