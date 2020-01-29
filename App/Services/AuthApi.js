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

    return {
        login,
    };
};

export default {
    create
};
