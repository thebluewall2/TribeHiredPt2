import auth from './auth/selectors';

const getAuthLoginAttempting = (state) => auth.getLoginAttempting(state.auth);
const getAuthLoginError = (state) => auth.getLoginError(state.auth);

const getAuthSignUpAttempting = (state) => auth.getSignUpAttempting(state.auth);
const getAuthSignUpError = (state) => auth.getSignUpError(state.auth);

const getAuthToken = (state) => state.getAuthToken(state.auth);

export default {
    getAuthLoginAttempting,
    getAuthLoginError,

    getAuthSignUpAttempting,
    getAuthSignUpError,

    getAuthToken,
};
