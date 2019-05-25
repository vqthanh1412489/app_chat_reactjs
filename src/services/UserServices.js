import *as Config from '../constants/Config';
import axios from 'axios';

const login = (username, password) => {
    return axios.post(`${Config.API_URL}/users/signin`,
        {
            username,
            password
        }
    )
}
const signup = (username, password, name) => {
    return axios.post(`${Config.API_URL}/users/signup`,
        {
            username,
            password,
            name
        }
    )
}

const checkToken = () => {
    const token = localStorage.getItem('token');
    return axios.post(`${Config.API_URL}/users/checkToken`,
    {
        token
    });
}

const getIdWithUsername = (username) => {
    return axios.post(`${Config.API_URL}/users/getId`,
    {
        username
    });
}

export {
    login,
    signup,
    checkToken,
    getIdWithUsername,

}