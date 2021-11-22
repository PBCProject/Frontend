import Axios from "axios";

const KEY = 'JdcSecur1ty';

const setToken = (token) => {
    localStorage.setItem(KEY, token);
    initTokenOnAxios();
}

const getToken = () => {
    return localStorage.getItem(KEY);
}

const initTokenOnAxios = () => {
    const token = getToken();
    if (token) {
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}

const isAuthenticated = () => {
    const token = getToken();
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp > Date.now() / 1000;
    } else {
        return false;
    }
}

//export all
export {
    setToken,
    getToken,
    initTokenOnAxios,
    isAuthenticated
}