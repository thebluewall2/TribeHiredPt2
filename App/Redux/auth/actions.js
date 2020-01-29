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

const authSignUpAttempt = (user) => {
    return {
        type: Types.AUTH_SIGN_UP_ATTEMPT,
        user,
    };
};

const authSignUpSuccess = () => {
    return {
        type: Types.AUTH_SIGN_UP_SUCCESS,
    };
};

const authSignUpFailure = (error) => {
    return {
        type: Types.AUTH_SIGN_UP_FAILURE,
        error
    };
};

export default {
    authLoginAttempt,
    authLoginSuccess,
    authLoginFailure,

    authSignUpAttempt,
    authSignUpSuccess,
    authSignUpFailure,
};
