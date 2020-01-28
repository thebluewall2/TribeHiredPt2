import Types from './types';

const authLoginAttempt = (email, password) => {
    return {
        type: Types.AUTH_LOGIN_ATTEMPT,
        email,
        password
    };
};

const authLoginSuccess = (authToken) => {
    return {
        type: Types.AUTH_LOGIN_SUCCESS,
        authToken
    };
};

const authLoginFailure = (error) => {
    return {
        type: Types.AUTH_LOGIN_FAILURE,
        error
    };
};

export default {
    authLoginAttempt,
    authLoginSuccess,
    authLoginFailure,
};
