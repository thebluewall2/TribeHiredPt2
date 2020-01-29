import apisauce from 'apisauce';

const create = (baseURL = 'http://52.221.195.23:8000') => {
    const api = apisauce.create({
        baseURL,
        timeout: 10000,
    });

    const login = (email, password) =>
        api.post('/api/auth/login', {
            email,
            password
        });

    const signUp = (name, email, password) =>
        api.post('/api/users/', {
            name,
            email,
            password
        });

    return {
        login,
        signUp,
    };
};

export default {
    create
};
